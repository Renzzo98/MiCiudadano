import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Question } from '../../models/question.model';
import { LocalOfficialsService } from '../../services/local-officials.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-question-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.css']
})
export class QuestionCardComponent implements AfterViewInit, OnInit, OnDestroy {
  private static readonly DYNAMIC_QUESTION_IDS = [43, 20, 23];
  
  @Input() question!: Question;
  @Output() answered = new EventEmitter<boolean>();
  @ViewChild('answerContent') answerContent!: ElementRef;
  
  isFlipped = false;
  showScrollIndicator = false;
  isSpanish = false;
  private officialsSubscription?: Subscription;

  constructor(
    private localOfficialsService: LocalOfficialsService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    // Only subscribe to officials data if this is a question that needs it
    if (QuestionCardComponent.DYNAMIC_QUESTION_IDS.includes(this.question.id)) {
      this.officialsSubscription = this.localOfficialsService.getOfficialsData().subscribe(data => {
        if (data) {
          // Properly trigger change detection
          this.cdr.markForCheck();
        }
      });
    }
  }

  ngOnDestroy() {
    if (this.officialsSubscription) {
      this.officialsSubscription.unsubscribe();
    }
  }

  ngAfterViewInit() {
    this.checkScrollable();
  }

  toggleLanguage(): void {
    this.isSpanish = !this.isSpanish;
  }

  flipCard(): void {
    this.isFlipped = true;
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
    this.showScrollIndicator = currentScroll < maxScroll;
  }

  private checkScrollable(): void {
    if (this.answerContent) {
      const element = this.answerContent.nativeElement;
      this.showScrollIndicator = element.scrollHeight > element.clientHeight;
    }
  }

  get currentAnswers(): string[] {
    // Only fetch officials data for questions that need it
    if (QuestionCardComponent.DYNAMIC_QUESTION_IDS.includes(this.question.id)) {
      const data = this.localOfficialsService.getCurrentOfficialsData();
      
      if (!data) {
        return this.isSpanish ? this.question.spanishVer.correctAnswers : this.question.correctAnswers;
      }

      switch (this.question.id) {
        case 43: // Who is the Governor of your state now?
          return [data.governor];
        case 20: // Who is one of your state's U.S. Senators now?
          return data.senators;
        case 23: // Name your U.S. Representative
          return data.representative;
      }
    }

    // For all other questions, just return the static answers
    return this.isSpanish ? this.question.spanishVer.correctAnswers : this.question.correctAnswers;
  }
} 