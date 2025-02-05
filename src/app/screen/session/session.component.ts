import { Component } from '@angular/core';
import { QuestionListComponent } from '../../components/question-list/question-list.component';
import { CommonModule } from '@angular/common';
import { SessionService } from '../../services/session.service';

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

  constructor(private sessionService: SessionService) {
    this.totalQuestions = this.sessionService.getTotalQuestions();
  }

  onQuestionIndexChanged(index: number) {
    this.currentQuestionIndex = index;
  }

  onTotalQuestionsChanged(total: number) {
    this.totalQuestions = total;
  }
} 