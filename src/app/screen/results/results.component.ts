import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  numCorrect: number = 0;
  numWrong: number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.numCorrect = Number(params['numCorrect']);
      this.numWrong = Number(params['numWrong']);
    });
  }

  get totalQuestions(): number {
    console.log('totalQuestions', this.numCorrect + this.numWrong);
    return this.numCorrect + this.numWrong;
  }

  get percentageCorrect(): number {
    console.log(this.numCorrect, this.totalQuestions);
    return (this.numCorrect / this.totalQuestions) * 100;
  }
} 