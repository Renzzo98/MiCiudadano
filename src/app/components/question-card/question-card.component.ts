import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Question } from '../../models/question.model';

@Component({
  selector: 'app-question-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.css']
})
export class QuestionCardComponent implements AfterViewInit {
  @Input() question!: Question;
  @Output() answered = new EventEmitter<boolean>();
  @ViewChild('answerContent') answerContent!: ElementRef;
  
  isFlipped = false;
  showScrollIndicator = false;

  ngAfterViewInit() {
    // Check if content is scrollable after view initialization
    this.checkScrollable();
  }

  flipCard(): void {
    this.isFlipped = true;
    // Check if content is scrollable when card is flipped
    setTimeout(() => this.checkScrollable(), 0);
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

  onAnswerScroll(event: Event): void {
    const element = event.target as HTMLElement;
    const maxScroll = element.scrollHeight - element.clientHeight;
    const currentScroll = element.scrollTop;
    
    // Show indicator if not at bottom
    this.showScrollIndicator = currentScroll < maxScroll;
  }

  private checkScrollable(): void {
    if (this.answerContent) {
      const element = this.answerContent.nativeElement;
      this.showScrollIndicator = element.scrollHeight > element.clientHeight;
    }
  }
} 