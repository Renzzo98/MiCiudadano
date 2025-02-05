import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionStore } from '../../store/question.store';
import { Question } from '../../models/question.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-analytics-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './analytics-screen.component.html',
  styleUrls: ['./analytics-screen.component.css']
})
export class AnalyticsScreenComponent implements OnInit {
  questions: Question[] = [];
  filteredQuestions: Question[] = [];
  activeFilter: 'all' | 'correct' | 'incorrect' = 'all';

  constructor(private questionStore: QuestionStore, private router: Router) {}

  ngOnInit() {
    this.questionStore.questions$.subscribe(questions => {
      this.questions = questions;
      this.applyFilter(this.activeFilter);
    });
  }

  applyFilter(filter: 'all' | 'correct' | 'incorrect') {
    this.activeFilter = filter;
    switch (filter) {
      case 'correct':
        this.filteredQuestions = this.questions.filter(q => q.correctAttempts > 0);
        break;
      case 'incorrect':
        this.filteredQuestions = this.questions.filter(q => q.failedAttempts > 0);
        break;
      default:
        this.filteredQuestions = this.questions;
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }

  resetStats() {
    if (confirm('Are you sure you want to reset all statistics?')) {
      this.questionStore.resetStats();
    }
  }
} 