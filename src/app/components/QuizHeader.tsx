'use client';

import React from 'react';
import {
  Box,
  Typography,
  Button,
  LinearProgress
} from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { QuizSet } from '../data';

interface QuizHeaderProps {
  selectedQuizSet: QuizSet;
  currentQuestionIndex: number;
  totalQuestions: number;
  onBackToSetSelection: () => void;
}

export default function QuizHeader({
  selectedQuizSet,
  currentQuestionIndex,
  totalQuestions,
  onBackToSetSelection
}: QuizHeaderProps) {
  const progress = totalQuestions > 0 ? ((currentQuestionIndex + 1) / totalQuestions) * 100 : 0;

  return (
    <Box sx={{ mb: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
        <Button
          variant="outlined"
          onClick={onBackToSetSelection}
          startIcon={<ArrowBack />}
          size="small"
        >
          セット選択
        </Button>
        <Typography variant="h6" color="primary">
          {selectedQuizSet?.title}
        </Typography>
        <Box sx={{ width: 120 }} />
      </Box>
      <Typography variant="h4" align="center" gutterBottom>
        {selectedQuizSet?.category}クイズ
      </Typography>
      <Box sx={{ mb: 2 }}>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          問題 {currentQuestionIndex + 1} / {totalQuestions}
        </Typography>
        <LinearProgress variant="determinate" value={progress} sx={{ height: 8, borderRadius: 4 }} />
      </Box>
    </Box>
  );
}