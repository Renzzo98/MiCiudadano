import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-setup-screen',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './setup-screen.component.html',
  styleUrls: ['./setup-screen.component.css']
})
export class SetupScreenComponent {
  questionCount: number = 5;

  constructor(
    private router: Router,
    private sessionService: SessionService
  ) {}

  startSession() {
    console.log(this.questionCount);
    this.sessionService.startNewSession(this.questionCount);
    this.router.navigate(['/session']);
  }

  goBack() {
    this.router.navigate(['/']);
  }
} 