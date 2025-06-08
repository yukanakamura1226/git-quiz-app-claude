'use client';

import React from 'react';
import {
  Alert,
  Typography
} from '@mui/material';
import { CheckCircle, Cancel } from '@mui/icons-material';

interface QuizResultDisplayProps {
  isCorrect: boolean;
  explanation: string;
}

export default function QuizResultDisplay({
  isCorrect,
  explanation
}: QuizResultDisplayProps) {
  return (
    <Alert
      severity={isCorrect ? 'success' : 'error'}
      icon={isCorrect ? <CheckCircle /> : <Cancel />}
      sx={{ mt: 3, mb: 2 }}
    >
      <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 1 }}>
        {isCorrect ? '正解！' : '不正解'}
      </Typography>
      <Typography variant="body2">
        {explanation}
      </Typography>
    </Alert>
  );
}