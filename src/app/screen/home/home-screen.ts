import { Component } from '@angular/core';
import './home-screen.css';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.html',
  styleUrls: ['./home-screen.css'],
  standalone: true,
  imports: [RouterLink]
})
export class HomeScreenComponent {
  // Component logic can go here
} 