'use client';

import React, { useState, useEffect, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { QuizSet } from '../quiz-data';
import { QuizResult, QuizState } from '../types/quiz';
import { playCorrectSound, playPageTurnSound } from './AudioUtils';
import QuizSetSelection from './QuizSetSelection';
import QuizComplete from './QuizComplete';
import QuizQuestion from './QuizQuestion';

function EngineerQuizComponent() {
  const [selectedQuizSet, setSelectedQuizSet] = useState<QuizSet | null>(null);
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    selectedAnswer: null,
    showResult: false,
    isCorrect: false,
    quizCompleted: false,
    results: [],
    score: 0
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentQuestions = selectedQuizSet?.questions || [];
  const currentQuestion = currentQuestions[quizState.currentQuestionIndex];

  const loadQuizProgress = useCallback(() => {
    try {
      const saved = localStorage.getItem('engineerQuizState');
      if (saved) {
        const parsedState = JSON.parse(saved);
        setQuizState(parsedState);
      }
    } catch (error) {
      console.error('Failed to load quiz progress:', error);
    }
  }, []);

  const saveQuizProgress = useCallback(() => {
    try {
      localStorage.setItem('engineerQuizState', JSON.stringify(quizState));
    } catch (error) {
      console.error('Failed to save quiz progress:', error);
    }
  }, [quizState]);

  useEffect(() => {
    loadQuizProgress();
  }, [loadQuizProgress]);

  useEffect(() => {
    saveQuizProgress();
  }, [saveQuizProgress]);

  const handleAnswerSelect = (answerIndex: number) => {
    const isCorrect = answerIndex === currentQuestion.correctAnswer;
    
    // 正解時にピンポン音を再生
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

  const handleNextQuestion = () => {
    // ページめくり音を再生
    playPageTurnSound();
    
    if (quizState.currentQuestionIndex < currentQuestions.length - 1) {
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

  const handleResetQuiz = () => {
    setQuizState(resetQuizState());
    localStorage.removeItem('engineerQuizState');
  };

  const resetQuizState = () => ({
    currentQuestionIndex: 0,
    selectedAnswer: null,
    showResult: false,
    isCorrect: false,
    quizCompleted: false,
    results: [],
    score: 0
  });

  const handleSelectQuizSet = (quizSet: QuizSet) => {
    setSelectedQuizSet(quizSet);
    setQuizState(resetQuizState());
  };

  const handleBackToSetSelection = () => {
    setSelectedQuizSet(null);
    setQuizState(resetQuizState());
  };

  if (!mounted) {
    return null;
  }

  // セット選択画面
  if (!selectedQuizSet) {
    return <QuizSetSelection onSelectQuizSet={handleSelectQuizSet} />;
  }

  // クイズ完了画面
  if (quizState.quizCompleted) {
    return (
      <QuizComplete
        score={quizState.score}
        totalQuestions={currentQuestions.length}
        onResetQuiz={handleResetQuiz}
        onBackToSetSelection={handleBackToSetSelection}
      />
    );
  }

  // クイズ画面
  return (
    <QuizQuestion
      selectedQuizSet={selectedQuizSet}
      quizState={quizState}
      onAnswerSelect={handleAnswerSelect}
      onNextQuestion={handleNextQuestion}
      onResetQuiz={handleResetQuiz}
      onBackToSetSelection={handleBackToSetSelection}
    />
  );
}

const EngineerQuiz = dynamic(() => Promise.resolve(EngineerQuizComponent), {
  ssr: false
});

export default EngineerQuiz;