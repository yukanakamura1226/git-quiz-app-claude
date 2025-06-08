'use client';

import React from 'react';
import {
  Box,
  Button
} from '@mui/material';
import { Refresh } from '@mui/icons-material';

interface QuizActionsProps {
  showResult: boolean;
  isLastQuestion: boolean;
  onResetQuiz: () => void;
  onNextQuestion: () => void;
}

export default function QuizActions({
  showResult,
  isLastQuestion,
  onResetQuiz,
  onNextQuestion
}: QuizActionsProps) {
  return (
    <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
      <Button
        variant="outlined"
        onClick={onResetQuiz}
        startIcon={<Refresh />}
      >
        リセット
      </Button>
      
      {showResult && (
        <Button
          variant="contained"
          onClick={onNextQuestion}
          size="large"
        >
          {isLastQuestion ? '結果を見る' : '次の問題'}
        </Button>
      )}
    </Box>
  );
}