import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Question } from '../models/question.model';
import { QUESTIONS } from '../data/questions.const';

const STORAGE_KEY = 'question_stats';

@Injectable({
  providedIn: 'root'
})
export class QuestionStore {
  private questions: Question[] = [];
  private questionsSubject = new BehaviorSubject<Question[]>([]);
  questions$ = this.questionsSubject.asObservable();

  private currentQuestionIndexSubject = new BehaviorSubject<number>(0);
  currentQuestionIndex$ = this.currentQuestionIndexSubject.asObservable();

  constructor() {
    this.loadQuestions();
  }

  private loadQuestions() {
    // Try to load stats from localStorage
    const savedStats = localStorage.getItem(STORAGE_KEY);
    if (savedStats) {
      const stats = JSON.parse(savedStats);
      // Merge saved stats with questions
      this.questions = QUESTIONS.map(q => ({
        ...q,
        correctAttempts: stats[q.id]?.correctAttempts ?? 0,
        failedAttempts: stats[q.id]?.failedAttempts ?? 0
      }));
    } else {
      this.questions = [...QUESTIONS];
    }
    this.questionsSubject.next(this.questions);
  }

  private saveToLocalStorage() {
    // Save only the stats part to localStorage
    const stats = this.questions.reduce((acc, q) => ({
      ...acc,
      [q.id]: {
        correctAttempts: q.correctAttempts,
        failedAttempts: q.failedAttempts
      }
    }), {});
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
  }

  getCurrentQuestion(): Observable<Question> {
    return new Observable(observer => {
      this.questions$.subscribe(questions => {
        this.currentQuestionIndex$.subscribe(index => {
          observer.next(questions[index]);
        });
      });
    });
  }

  updateQuestionAttempt(id: number, isCorrect: boolean) {
    const question = this.questions.find(q => q.id === id);
    if (question) {
      if (isCorrect) {
        question.correctAttempts++;
      } else {
        question.failedAttempts++;
      }
      this.questionsSubject.next(this.questions);
      this.saveToLocalStorage();
    }
  }

  nextQuestion(): boolean {
    const nextIndex = this.currentQuestionIndexSubject.value + 1;
    if (nextIndex < this.questions.length) {
      this.currentQuestionIndexSubject.next(nextIndex);
      return true;
    }
    return false;
  }

  resetStats(): void {
    this.currentQuestionIndexSubject.next(0);
    this.questions = this.questions.map(q => ({
      ...q,
      correctAttempts: 0,
      failedAttempts: 0
    }));
    this.questionsSubject.next(this.questions);
    localStorage.removeItem(STORAGE_KEY);
  }

  getTotalQuestions(): number {
    return this.questions.length;
  }

  getCurrentIndex(): number {
    return this.currentQuestionIndexSubject.value;
  }

  getQuestions(count: number): Question[] {
    // // Fisher-Yates shuffle
    // for (let i = shuffled.length - 1; i > 0; i--) {
    //     // Generate a random index between 0 and i
    //     const j = Math.floor(Math.random() * (i + 1));
    //     // Swap the elements at indices i and j
    //     // This is a modern JavaScript syntax for swapping elements
    //     [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    // }
    const shuffled = [...this.questions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  }
} 