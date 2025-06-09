'use client';

import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Container,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { QuizSet } from '../data';
import { QuizState } from '../types/quiz';
import QuizHeader from './QuizHeader';
import AnswerOptions from './AnswerOptions';
import QuizResultDisplay from './QuizResultDisplay';
import QuizActions from './QuizActions';

interface QuizQuestionProps {
  selectedQuizSet: QuizSet;
  quizState: QuizState;
  onAnswerSelect: (answerIndex: number) => void;
  onNextQuestion: () => void;
  onResetQuiz: () => void;
  onBackToSetSelection: () => void;
}

export default function QuizQuestion({
  selectedQuizSet,
  quizState,
  onAnswerSelect,
  onNextQuestion,
  onResetQuiz,
  onBackToSetSelection
}: QuizQuestionProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const currentQuestions = selectedQuizSet?.questions || [];
  const currentQuestion = currentQuestions[quizState.currentQuestionIndex];
  const isLastQuestion = quizState.currentQuestionIndex === currentQuestions.length - 1;

  return (
    <Container maxWidth="md">
      <QuizHeader
        selectedQuizSet={selectedQuizSet}
        currentQuestionIndex={quizState.currentQuestionIndex}
        totalQuestions={currentQuestions.length}
        onBackToSetSelection={onBackToSetSelection}
      />

      <Card elevation={3}>
        <CardContent sx={{ p: isMobile ? 2 : 4 }}>
          <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
            {currentQuestion.question}
          </Typography>

          <AnswerOptions
            options={currentQuestion.options}
            selectedAnswer={quizState.selectedAnswer}
            showResult={quizState.showResult}
            onAnswerSelect={onAnswerSelect}
          />

          {quizState.showResult && (
            <QuizResultDisplay
              isCorrect={quizState.isCorrect}
              explanation={currentQuestion.explanation}
            />
          )}

          <QuizActions
            showResult={quizState.showResult}
            isLastQuestion={isLastQuestion}
            onResetQuiz={onResetQuiz}
            onNextQuestion={onNextQuestion}
          />
        </CardContent>
      </Card>
    </Container>
  );
}