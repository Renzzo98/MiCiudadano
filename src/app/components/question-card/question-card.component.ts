import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Question } from '../../models/question.model';

@Component({
  selector: 'app-question-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.css']
})
export class QuestionCardComponent {
  @Input() question!: Question;
  @Output() answered = new EventEmitter<boolean>();
  
  isFlipped = false;

  flipCard(): void {
    this.isFlipped = true;
  }

  onAnswerSelected(isCorrect: boolean): void {
    if (isCorrect) {
      this.question.correctAttempts++;
    } else {
      this.question.failedAttempts++;
    }
    this.answered.emit(isCorrect);
    this.isFlipped = false;
  }
} 