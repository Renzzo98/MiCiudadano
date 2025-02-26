import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { Question } from '../models/question.model';
import { QuestionStore } from '../store/question.store';

interface SessionAnswer {
  question: Question;
  isCorrect: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private sessionQuestions: Question[] = [];
  private currentIndex = 0;
  private correctCount = 0;
  private incorrectCount = 0;
  private answeredQuestions: SessionAnswer[] = [];

  private currentQuestionSubject = new BehaviorSubject<Question | null>(null);
  currentQuestion$ = this.currentQuestionSubject.asObservable();

  constructor(
    private questionStore: QuestionStore,
    private router: Router
  ) {}

  startNewSession(questionCount: number): void {
    this.sessionQuestions = this.questionStore.getQuestions(questionCount);
    this.currentIndex = 0;
    this.correctCount = 0;
    this.incorrectCount = 0;
    this.answeredQuestions = [];
    this.updateCurrentQuestion();
  }

  private updateCurrentQuestion(): void {
    this.currentQuestionSubject.next(this.sessionQuestions[this.currentIndex]);
  }

  answerQuestion(isCorrect: boolean): void {
    const currentQuestion = this.sessionQuestions[this.currentIndex];
    this.questionStore.updateQuestionAttempt(currentQuestion.id, isCorrect);
    
    // Track the answered question
    this.answeredQuestions.push({
      question: currentQuestion,
      isCorrect: isCorrect
    });

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

  endSession(): void {
    this.router.navigate(['/results'], {
      queryParams: {
        numCorrect: this.correctCount,
        numWrong: this.incorrectCount,
        sessionId: Date.now() // Add timestamp to identify the session
      }
    });
  }

  getCurrentIndex(): number {
    return this.currentIndex;
  }

  getTotalQuestions(): number {
    return this.sessionQuestions.length;
  }

  getSessionStats() {
    return {
      correctCount: this.correctCount,
      incorrectCount: this.incorrectCount,
      answeredQuestions: this.answeredQuestions,
      remainingQuestions: this.sessionQuestions.slice(this.currentIndex + 1)
    };
  }
} 