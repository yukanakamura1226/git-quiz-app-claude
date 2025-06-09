'use client';

import React from 'react';
import {
  Box,
  Typography,
  Container
} from '@mui/material';
import { quizSets, QuizSet } from '../data';
import QuizCategorySection from './QuizCategorySection';

interface QuizSetSelectionProps {
  onSelectQuizSet: (quizSet: QuizSet) => void;
}

export default function QuizSetSelection({ onSelectQuizSet }: QuizSetSelectionProps) {
  const gitQuizSets = quizSets.filter(set => set.category === 'Git');
  const linuxQuizSets = quizSets.filter(set => set.category === 'Linux');
  const nodeQuizSets = quizSets.filter(set => set.category === 'Node.js');

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
        description=""
        color="primary"
        quizSets={gitQuizSets}
        onSelectQuizSet={onSelectQuizSet}
      />

      <QuizCategorySection
        title="Linux コマンド"
        description=""
        color="success"
        quizSets={linuxQuizSets}
        onSelectQuizSet={onSelectQuizSet}
      />

      <QuizCategorySection
        title="Node.js/npm"
        description=""
        color="warning"
        quizSets={nodeQuizSets}
        onSelectQuizSet={onSelectQuizSet}
      />
    </Container>
  );
}