import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionStore } from '../../store/question.store';
import { Question } from '../../models/question.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-progress-screen',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="progress-container">
      <div class="header">
        <button class="back-button" (click)="goBack()">
          <i class="fas fa-arrow-left"></i>
        </button>
        <h1>Study Progress</h1>
        <div class="spacer"></div>
      </div>

      <div class="overall-progress">
        <h2>Overall Progress</h2>
        <div class="progress-bar">
          <div class="progress-fill" [style.width.%]="overallProgress"></div>
          <span class="progress-text">{{overallProgress}}% Complete</span>
        </div>
      </div>

      <div class="categories">
        <h2>Progress by Category</h2>
        <div class="category-grid">
          <div class="category-card" *ngFor="let category of categories">
            <h3>{{category.name}}</h3>
            <div class="progress-bar">
              <div class="progress-fill" [style.width.%]="category.progress"></div>
              <span class="progress-text">{{category.progress}}%</span>
            </div>
            <div class="stats">
              <div class="stat">
                <span class="label">Questions</span>
                <span class="value">{{category.totalQuestions}}</span>
              </div>
              <div class="stat">
                <span class="label">Mastered</span>
                <span class="value">{{category.masteredQuestions}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .progress-container {
      padding: 1rem;
      color: white;
      min-height: 100vh;
      background-color: var(--military-green-primary);
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
    }

    .back-button {
      background-color: var(--military-green-dark);
      color: white;
      border: none;
      border-radius: 50%;
      width: 3rem;
      height: 3rem;
      cursor: pointer;
      transition: transform 0.2s ease;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .back-button:hover {
      transform: scale(1.1);
    }

    .spacer {
      width: 3rem;
    }

    h1 {
      font-size: 1.5rem;
      margin: 0;
      text-transform: uppercase;
      letter-spacing: 2px;
    }

    h2 {
      font-size: 1.2rem;
      margin-bottom: 1rem;
      color: rgba(255, 255, 255, 0.9);
    }

    .overall-progress {
      background-color: var(--military-green-dark);
      padding: 1.5rem;
      border-radius: 8px;
      margin-bottom: 2rem;
    }

    .progress-bar {
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 4px;
      height: 2rem;
      position: relative;
      overflow: hidden;
    }

    .progress-fill {
      background-color: #4caf50;
      height: 100%;
      transition: width 0.3s ease;
    }

    .progress-text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-weight: bold;
    }

    .category-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 1rem;
    }

    .category-card {
      background-color: var(--military-green-dark);
      padding: 1.5rem;
      border-radius: 8px;
    }

    .category-card h3 {
      margin: 0 0 1rem 0;
      font-size: 1.1rem;
      color: rgba(255, 255, 255, 0.9);
    }

    .stats {
      display: flex;
      justify-content: space-between;
      margin-top: 1rem;
      padding-top: 1rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }

    .stat {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .label {
      font-size: 0.9rem;
      color: rgba(255, 255, 255, 0.7);
      margin-bottom: 0.3rem;
    }

    .value {
      font-size: 1.2rem;
      font-weight: bold;
    }

    @media (max-width: 480px) {
      .category-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ProgressScreenComponent implements OnInit {
  categories: any[] = [];
  overallProgress: number = 0;

  constructor(private questionStore: QuestionStore, private router: Router) {}

  ngOnInit() {
    this.questionStore.questions$.subscribe(questions => {
      this.calculateProgress(questions);
    });
  }

  private calculateProgress(questions: Question[]) {
    // Group questions by category
    const categoryMap = new Map<string, Question[]>();
    questions.forEach(q => {
      if (!categoryMap.has(q.category)) {
        categoryMap.set(q.category, []);
      }
      categoryMap.get(q.category)?.push(q);
    });

    // Calculate progress for each category
    this.categories = Array.from(categoryMap.entries()).map(([name, questions]) => {
      const totalQuestions = questions.length;
      const masteredQuestions = questions.filter(q => 
        q.correctAttempts > 0 && (q.correctAttempts / (q.correctAttempts + q.failedAttempts)) >= 0.7
      ).length;
      const progress = Math.round((masteredQuestions / totalQuestions) * 100);

      return {
        name,
        totalQuestions,
        masteredQuestions,
        progress
      };
    });

    // Calculate overall progress
    const totalMastered = this.categories.reduce((sum, cat) => sum + cat.masteredQuestions, 0);
    const totalQuestions = this.categories.reduce((sum, cat) => sum + cat.totalQuestions, 0);
    this.overallProgress = Math.round((totalMastered / totalQuestions) * 100);
  }

  goBack() {
    this.router.navigate(['/']);
  }
} 