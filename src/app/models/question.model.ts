export interface Question {
  id: number;
  question: string;
  answers: string[];
  correctAnswer: string;
  correctAttempts: number;
  failedAttempts: number;
} 