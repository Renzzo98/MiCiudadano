import { Component } from '@angular/core';
import './home-screen.css';
import { RouterLink, Router } from '@angular/router';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.html',
  styleUrls: ['./home-screen.css'],
  standalone: true,
  imports: [RouterLink]
})
export class HomeScreenComponent {
  constructor(
    private router: Router,
    private sessionService: SessionService
  ) {}

  startRandomSession(): void {
    // Generate random number between 1 and 100
    const randomCount = Math.floor(Math.random() * 100) + 1;
    this.sessionService.startNewSession(randomCount);
    this.router.navigate(['/session']);
  }
} 