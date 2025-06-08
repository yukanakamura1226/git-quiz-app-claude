'use client';

import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Paper,
  Chip
} from '@mui/material';
import { QuizSet } from '../quiz-data';

interface QuizCategorySectionProps {
  title: string;
  description: string;
  color: 'primary' | 'success';
  quizSets: QuizSet[];
  onSelectQuizSet: (quizSet: QuizSet) => void;
}

export default function QuizCategorySection({
  title,
  description,
  color,
  quizSets,
  onSelectQuizSet
}: QuizCategorySectionProps) {
  return (
    <Box sx={{ mb: 4 }}>
      <Paper 
        elevation={1} 
        sx={{ 
          p: 2, 
          mb: 3, 
          backgroundColor: `${color}.50`,
          borderLeft: '4px solid',
          borderLeftColor: `${color}.main`
        }}
      >
        <Typography variant="h5" sx={{ color: `${color}.main`, fontWeight: 'bold' }}>
          {title}
        </Typography>
        {description && (
          <Typography 
            variant="body2" 
            color="text.secondary"
            sx={{ whiteSpace: 'pre-line', fontFamily: 'monospace', fontSize: '0.875rem' }}
          >
            {description}
          </Typography>
        )}
      </Paper>
      
      <Box sx={{ display: 'grid', gap: 2 }}>
        {quizSets.map((quizSet) => (
          <Card
            key={quizSet.id}
            elevation={2}
            sx={{
              cursor: 'pointer',
              transition: 'all 0.2s ease-in-out',
              borderLeft: '3px solid',
              borderLeftColor: `${color}.main`,
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
                  color={color}
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
  );
}