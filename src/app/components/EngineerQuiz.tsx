'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useQuizState } from '../hooks/useQuizState';
import { createAnswerSelectHandler, createNextQuestionHandler } from '../utils/quizHandlers';
import QuizSetSelection from './QuizSetSelection';
import QuizComplete from './QuizComplete';
import QuizQuestion from './QuizQuestion';

function EngineerQuizComponent() {
  const {
    quizState,
    setQuizState,
    selectedQuizSet,
    resetQuizState,
    selectQuizSet,
    backToSetSelection
  } = useQuizState();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentQuestions = selectedQuizSet?.questions || [];
  const currentQuestion = currentQuestions[quizState.currentQuestionIndex];

  const handleAnswerSelect = createAnswerSelectHandler(currentQuestion, setQuizState);
  const handleNextQuestion = createNextQuestionHandler(
    quizState.currentQuestionIndex,
    currentQuestions.length,
    setQuizState
  );

  // セット選択画面
  if (!selectedQuizSet) {
    return <QuizSetSelection onSelectQuizSet={selectQuizSet} />;
  }

  // クイズ完了画面
  if (quizState.quizCompleted) {
    return (
      <QuizComplete
        score={quizState.score}
        totalQuestions={currentQuestions.length}
        onResetQuiz={resetQuizState}
        onBackToSetSelection={backToSetSelection}
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
      onResetQuiz={resetQuizState}
      onBackToSetSelection={backToSetSelection}
    />
  );
}

const EngineerQuiz = dynamic(() => Promise.resolve(EngineerQuizComponent), {
  ssr: false
});

export default EngineerQuiz;