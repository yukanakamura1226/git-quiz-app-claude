'use client';

import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Container,
  Paper,
  Chip
} from '@mui/material';
import { quizSets, QuizSet } from '../quiz-data';

interface QuizSetSelectionProps {
  onSelectQuizSet: (quizSet: QuizSet) => void;
}

export default function QuizSetSelection({ onSelectQuizSet }: QuizSetSelectionProps) {
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

      {/* Git Commands Section */}
      <Box sx={{ mb: 4 }}>
        <Paper 
          elevation={1} 
          sx={{ 
            p: 2, 
            mb: 3, 
            backgroundColor: 'primary.50',
            borderLeft: '4px solid',
            borderLeftColor: 'primary.main'
          }}
        >
          <Typography variant="h5" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
            Git コマンド
          </Typography>
          <Typography variant="body2" color="text.secondary">
            バージョン管理の基本から応用まで
          </Typography>
        </Paper>
        
        <Box sx={{ display: 'grid', gap: 2 }}>
          {quizSets.filter(set => set.category === 'Git').map((quizSet) => (
            <Card
              key={quizSet.id}
              elevation={2}
              sx={{
                cursor: 'pointer',
                transition: 'all 0.2s ease-in-out',
                borderLeft: '3px solid',
                borderLeftColor: 'primary.main',
                '&:hover': {
                  elevation: 4,
                  transform: 'translateY(-1px)'
                }
              }}
              onClick={() => onSelectQuizSet(quizSet)}
            >
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                  <Typography variant="h6" component="h3">
                    {quizSet.title}
                  </Typography>
                  <Chip
                    label={`${quizSet.questions.length}問`}
                    color="primary"
                    size="small"
                  />
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {quizSet.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

      {/* Linux Commands Section */}
      <Box sx={{ mb: 4 }}>
        <Paper 
          elevation={1} 
          sx={{ 
            p: 2, 
            mb: 3, 
            backgroundColor: 'success.50',
            borderLeft: '4px solid',
            borderLeftColor: 'success.main'
          }}
        >
          <Typography variant="h5" sx={{ color: 'success.main', fontWeight: 'bold' }}>
            Linux コマンド
          </Typography>
          <Typography variant="body2" color="text.secondary">
            システム操作とコマンドライン習得
          </Typography>
        </Paper>
        
        <Box sx={{ display: 'grid', gap: 2 }}>
          {quizSets.filter(set => set.category === 'Linux').map((quizSet) => (
            <Card
              key={quizSet.id}
              elevation={2}
              sx={{
                cursor: 'pointer',
                transition: 'all 0.2s ease-in-out',
                borderLeft: '3px solid',
                borderLeftColor: 'success.main',
                '&:hover': {
                  elevation: 4,
                  transform: 'translateY(-1px)'
                }
              }}
              onClick={() => onSelectQuizSet(quizSet)}
            >
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                  <Typography variant="h6" component="h3">
                    {quizSet.title}
                  </Typography>
                  <Chip
                    label={`${quizSet.questions.length}問`}
                    color="success"
                    size="small"
                  />
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {quizSet.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Container>
  );
}