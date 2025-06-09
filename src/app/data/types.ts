export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface QuizSet {
  id: string;
  title: string;
  description: string;
  category: string;
  questions: QuizQuestion[];
}