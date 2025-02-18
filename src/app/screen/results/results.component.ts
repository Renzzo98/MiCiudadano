import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SessionService } from '../../services/session.service';
import { Question } from '../../models/question.model';

interface SessionAnswer {
  question: Question;
  isCorrect: boolean;
}

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
  sessionAnswers: SessionAnswer[] = [];
  failedQuestions: SessionAnswer[] = [];

  constructor(
    private route: ActivatedRoute,
    private sessionService: SessionService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.numCorrect = Number(params['numCorrect']);
      this.numWrong = Number(params['numWrong']);
      
      // Get session details
      const stats = this.sessionService.getSessionStats();
      this.sessionAnswers = stats.answeredQuestions;
      
      // Filter out failed questions
      this.failedQuestions = this.sessionAnswers.filter(answer => !answer.isCorrect);
    });
  }

  get totalQuestions(): number {
    return this.numCorrect + this.numWrong;
  }

  get percentageCorrect(): number {
    return (this.numCorrect / this.totalQuestions) * 100;
  }

  exportStudyGuide(): void {
    // Create session summary
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();
    
    // English Version
    let englishContent = `U.S. Citizenship Test Practice - Study Guide\n`;
    englishContent += `Generated on: ${date} at ${time}\n\n`;
    englishContent += `Session Summary:\n`;
    englishContent += `Total Questions: ${this.totalQuestions}\n`;
    englishContent += `Correct Answers: ${this.numCorrect}\n`;
    englishContent += `Incorrect Answers: ${this.numWrong}\n`;
    englishContent += `Success Rate: ${this.percentageCorrect.toFixed(1)}%\n\n`;

    englishContent += `Question History:\n`;
    englishContent += `---------------\n\n`;
    this.sessionAnswers.forEach((answer, index) => {
      englishContent += `${index + 1}. ${answer.question.question}\n`;
      englishContent += `Result: ${answer.isCorrect ? '✓ Correct' : '✗ Incorrect'}\n\n`;
    });

    if (this.failedQuestions.length > 0) {
      englishContent += `Questions to Review:\n`;
      englishContent += `------------------\n\n`;
      this.failedQuestions.forEach((answer, index) => {
        englishContent += `${index + 1}. ${answer.question.question}\n`;
        englishContent += `Correct Answer(s):\n`;
        answer.question.correctAnswers.forEach(correctAnswer => {
          englishContent += `• ${correctAnswer}\n`;
        });
        englishContent += `\n`;
      });
    }

    // Spanish Version
    let spanishContent = `Práctica del Examen de Ciudadanía de EE.UU. - Guía de Estudio\n`;
    spanishContent += `Generado el: ${date} a las ${time}\n\n`;
    spanishContent += `Resumen de la Sesión:\n`;
    spanishContent += `Total de Preguntas: ${this.totalQuestions}\n`;
    spanishContent += `Respuestas Correctas: ${this.numCorrect}\n`;
    spanishContent += `Respuestas Incorrectas: ${this.numWrong}\n`;
    spanishContent += `Tasa de Éxito: ${this.percentageCorrect.toFixed(1)}%\n\n`;

    spanishContent += `Historial de Preguntas:\n`;
    spanishContent += `---------------------\n\n`;
    this.sessionAnswers.forEach((answer, index) => {
      spanishContent += `${index + 1}. ${answer.question.spanishVer.question}\n`;
      spanishContent += `Resultado: ${answer.isCorrect ? '✓ Correcto' : '✗ Incorrecto'}\n\n`;
    });

    if (this.failedQuestions.length > 0) {
      spanishContent += `Preguntas para Repasar:\n`;
      spanishContent += `----------------------\n\n`;
      this.failedQuestions.forEach((answer, index) => {
        spanishContent += `${index + 1}. ${answer.question.spanishVer.question}\n`;
        spanishContent += `Respuesta(s) Correcta(s):\n`;
        answer.question.spanishVer.correctAnswers.forEach(correctAnswer => {
          spanishContent += `• ${correctAnswer}\n`;
        });
        spanishContent += `\n`;
      });
    }

    // Combine both versions with a separator
    const content = `${englishContent}\n\n` +
                   `=================================\n\n` +
                   `${spanishContent}`;

    // Create and download the file
    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `citizenship-study-guide-${date}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }
} 