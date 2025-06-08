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
        description={`├─ Level 1: 基本操作（10問）
│   Gitの基本的なコマンドを学習
├─ Level 2: 実用操作（10問）
│   日常的によく使うコマンドを学習
└─ Level 3: 応用操作（10問）
    より高度なコマンドを学習`}
        color="primary"
        quizSets={gitQuizSets}
        onSelectQuizSet={onSelectQuizSet}
      />

      <QuizCategorySection
        title="Linux コマンド"
        description={`├─ Level 1: 実務基本（10問）
│   毎日使うコマンドを学習
└─ Level 2: 実務応用（10問）
    週数回使うコマンドを学習`}
        color="success"
        quizSets={linuxQuizSets}
        onSelectQuizSet={onSelectQuizSet}
      />
    </Container>
  );
}