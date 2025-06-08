'use client';

import React from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  Paper,
  Chip
} from '@mui/material';
import { Quiz, Refresh, ArrowBack } from '@mui/icons-material';

interface QuizCompleteProps {
  score: number;
  totalQuestions: number;
  onResetQuiz: () => void;
  onBackToSetSelection: () => void;
}

export default function QuizComplete({ 
  score, 
  totalQuestions, 
  onResetQuiz, 
  onBackToSetSelection 
}: QuizCompleteProps) {
  const getScoreColor = (): 'success' | 'warning' | 'error' => {
    const percentage = (score / totalQuestions) * 100;
    if (percentage >= 80) return 'success';
    if (percentage >= 60) return 'warning';
    return 'error';
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
        <Quiz sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
        <Typography variant="h4" gutterBottom>
          クイズ完了！
        </Typography>
        <Typography variant="h5" sx={{ mb: 3 }}>
          スコア: {score} / {totalQuestions}
        </Typography>
        <Chip
          label={`正答率: ${Math.min(100, Math.round((score / totalQuestions) * 100))}%`}
          color={getScoreColor()}
          sx={{ mb: 3, fontSize: '1.2rem', py: 3 }}
        />
        <Box sx={{ mt: 3, display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            onClick={onResetQuiz}
            startIcon={<Refresh />}
            size="large"
          >
            もう一度挑戦する
          </Button>
          <Button
            variant="outlined"
            onClick={onBackToSetSelection}
            startIcon={<ArrowBack />}
            size="large"
          >
            セット選択に戻る
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}