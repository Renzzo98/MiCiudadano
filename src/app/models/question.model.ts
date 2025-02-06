export interface Question {
  id: number;
  question: string;
  category: string;
  flagged: boolean;
  possibleAnswers: string[];
  correctAnswers: string[];
  correctAttempts: number;
  failedAttempts: number;
} 