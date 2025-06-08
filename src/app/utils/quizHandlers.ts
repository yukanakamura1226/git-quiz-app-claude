import { QuizResult, QuizState } from '../types/quiz';
import { QuizQuestion } from '../quiz-data';
import { playCorrectSound, playPageTurnSound } from '../components/AudioUtils';

export const createAnswerSelectHandler = (
  currentQuestion: QuizQuestion,
  setQuizState: (updater: (prev: QuizState) => QuizState) => void
) => {
  return (answerIndex: number) => {
    const isCorrect = answerIndex === currentQuestion.correctAnswer;
    
    if (isCorrect) {
      playCorrectSound();
    }
    
    const result: QuizResult = {
      questionId: currentQuestion.id,
      selectedAnswer: answerIndex,
      isCorrect,
      timestamp: Date.now()
    };

    setQuizState(prev => ({
      ...prev,
      selectedAnswer: answerIndex,
      showResult: true,
      isCorrect,
      results: [...prev.results, result],
      score: isCorrect ? prev.score + 1 : prev.score
    }));
  };
};

export const createNextQuestionHandler = (
  currentQuestionIndex: number,
  totalQuestions: number,
  setQuizState: (updater: (prev: QuizState) => QuizState) => void
) => {
  return () => {
    playPageTurnSound();
    
    if (currentQuestionIndex < totalQuestions - 1) {
      setQuizState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
        selectedAnswer: null,
        showResult: false,
        isCorrect: false
      }));
    } else {
      setQuizState(prev => ({
        ...prev,
        quizCompleted: true
      }));
    }
  };
};