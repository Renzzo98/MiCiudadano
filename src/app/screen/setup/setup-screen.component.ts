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

  private touchStartX: number = 0;
  private touchStartY: number = 0;

  constructor(
    private router: Router,
    private sessionService: SessionService
  ) {}

  startSession() {
    this.sessionService.startNewSession(this.questionCount);
    this.router.navigate(['/session']);
  }

  goBack() {
    this.router.navigate(['/']);
  }

  handleTouchStart(event: TouchEvent) {
    this.touchStartX = event.touches[0].clientX;
    this.touchStartY = event.touches[0].clientY;
  }

  handleTouchMove(event: TouchEvent) {
    if (!event.touches.length) return;

    const touchX = event.touches[0].clientX;
    const touchY = event.touches[0].clientY;

    const deltaX = Math.abs(touchX - this.touchStartX);
    const deltaY = Math.abs(touchY - this.touchStartY);

    // If horizontal movement is greater than vertical movement, prevent default
    if (deltaX > deltaY) {
      event.preventDefault();
    }
  }
} 