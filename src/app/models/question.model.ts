export interface TranslatedQuestion {
  id: number;
  question: string;
  category: string;
  possibleAnswers: string[];
  correctAnswers: string[];
}

export interface Question {
  id: number;
  question: string;
  category: string;
  flagged: boolean;
  possibleAnswers: string[];
  correctAnswers: string[];
  correctAttempts: number;
  failedAttempts: number;
  spanishVer: TranslatedQuestion;
} 