'use client';

import React from 'react';
import {
  Box,
  Typography,
  Container
} from '@mui/material';
import { quizSets, QuizSet } from '../quiz-data';
import QuizCategorySection from './QuizCategorySection';

interface QuizSetSelectionProps {
  onSelectQuizSet: (quizSet: QuizSet) => void;
}

export default function QuizSetSelection({ onSelectQuizSet }: QuizSetSelectionProps) {
  const gitQuizSets = quizSets.filter(set => set.category === 'Git');
  const linuxQuizSets = quizSets.filter(set => set.category === 'Linux');

  return (
    <Container maxWidth="md">
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" align="center" gutterBottom>
          エンジニア学習クイズ
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" gutterBottom>
          学習したいクイズセットを選択してください
        </Typography>
      </Box>

      <QuizCategorySection
        title="Git コマンド"
        description="バージョン管理の基本から応用まで"
        color="primary"
        quizSets={gitQuizSets}
        onSelectQuizSet={onSelectQuizSet}
      />

      <QuizCategorySection
        title="Linux コマンド"
        description="システム操作とコマンドライン習得"
        color="success"
        quizSets={linuxQuizSets}
        onSelectQuizSet={onSelectQuizSet}
      />
    </Container>
  );
}