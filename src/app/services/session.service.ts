import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Question } from '../models/question.model';
import { QuestionStore } from '../store/question.store';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private sessionQuestions: Question[] = [];
  private currentIndex = 0;
  private correctCount = 0;
  private incorrectCount = 0;

  private currentQuestionSubject = new BehaviorSubject<Question | null>(null);
  currentQuestion$ = this.currentQuestionSubject.asObservable();

  constructor(
    private questionStore: QuestionStore,
    private router: Router
  ) {}

  startNewSession(questionCount: number): void {
    this.sessionQuestions = this.questionStore.getQuestions(questionCount);
    console.log('questionCount', questionCount);
    console.log(this.sessionQuestions);
    this.currentIndex = 0;
    this.correctCount = 0;
    this.incorrectCount = 0;
    this.updateCurrentQuestion();
  }

  private updateCurrentQuestion(): void {
    this.currentQuestionSubject.next(this.sessionQuestions[this.currentIndex]);
  }

  answerQuestion(isCorrect: boolean): void {
    const currentQuestion = this.sessionQuestions[this.currentIndex];
    this.questionStore.updateQuestionAttempt(currentQuestion.id, isCorrect);
    
    if (isCorrect) {
      this.correctCount++;
    } else {
      this.incorrectCount++;
    }

    if (this.currentIndex < this.sessionQuestions.length - 1) {
      this.currentIndex++;
      this.updateCurrentQuestion();
    } else {
      this.endSession();
    }
  }

  private endSession(): void {
    this.router.navigate(['/results'], {
      queryParams: {
        numCorrect: this.correctCount,
        numWrong: this.incorrectCount
      }
    });
  }

  getCurrentIndex(): number {
    return this.currentIndex;
  }

  getTotalQuestions(): number {
    return this.sessionQuestions.length;
  }
} 