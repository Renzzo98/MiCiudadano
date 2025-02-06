import { Component } from '@angular/core';
import { QuestionListComponent } from '../../components/question-list/question-list.component';
import { CommonModule } from '@angular/common';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-session',
  standalone: true,
  imports: [QuestionListComponent, CommonModule],
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent {
  currentQuestionIndex = 0;
  totalQuestions = 0;

  constructor(
    private sessionService: SessionService,
    private router: Router
  ) {
    this.totalQuestions = this.sessionService.getTotalQuestions();
  }

  onQuestionIndexChanged(index: number) {
    this.currentQuestionIndex = index;
  }

  onTotalQuestionsChanged(total: number) {
    this.totalQuestions = total;
  }

  exitSession() {
    const stats = this.sessionService.getSessionStats();
    this.router.navigate(['/results'], {
      queryParams: {
        numCorrect: stats.correctCount,
        numWrong: stats.incorrectCount
      }
    });
  }
} 