import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionCardComponent } from '../question-card/question-card.component';
import { Question } from '../../models/question.model';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-question-list',
  standalone: true,
  imports: [CommonModule, QuestionCardComponent],
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  @Output() questionIndexChanged = new EventEmitter<number>();
  @Output() totalQuestionsChanged = new EventEmitter<number>();

  currentQuestion?: Question;

  constructor(private sessionService: SessionService) {}

  ngOnInit() {
    this.sessionService.currentQuestion$.subscribe(question => {
      this.currentQuestion = question ?? undefined;
    });
    this.totalQuestionsChanged.emit(this.sessionService.getTotalQuestions());
    this.questionIndexChanged.emit(this.sessionService.getCurrentIndex());
  }
  
  onQuestionAnswered(answeredCorrectly: boolean): void {
    this.sessionService.answerQuestion(answeredCorrectly);
    this.questionIndexChanged.emit(this.sessionService.getCurrentIndex());
  }
} 