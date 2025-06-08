export interface QuizResult {
  questionId: number;
  selectedAnswer: number;
  isCorrect: boolean;
  timestamp: number;
}

export interface QuizState {
  currentQuestionIndex: number;
  selectedAnswer: number | null;
  showResult: boolean;
  isCorrect: boolean;
  quizCompleted: boolean;
  results: QuizResult[];
  score: number;
}