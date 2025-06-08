'use client';

import React from 'react';
import {
  Box,
  RadioGroup,
  FormControlLabel,
  Radio,
  Paper,
  useTheme,
  useMediaQuery
} from '@mui/material';

interface AnswerOptionsProps {
  options: string[];
  selectedAnswer: number | null;
  showResult: boolean;
  onAnswerSelect: (index: number) => void;
}

export default function AnswerOptions({
  options,
  selectedAnswer,
  showResult,
  onAnswerSelect
}: AnswerOptionsProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <RadioGroup
      value={selectedAnswer ?? ''}
      onChange={showResult ? undefined : (e) => onAnswerSelect(Number(e.target.value))}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        {options.map((option: string, index: number) => (
          <Box key={index}>
            <Paper
              elevation={selectedAnswer === index ? 2 : 0}
              sx={{
                p: 1,
                border: '1px solid',
                borderColor: selectedAnswer === index ? 'primary.main' : 'divider',
                backgroundColor: selectedAnswer === index ? 'primary.50' : 'transparent',
                '&:hover': {
                  backgroundColor: 'action.hover'
                },
                cursor: showResult ? 'default' : 'pointer'
              }}
              onClick={showResult ? undefined : () => onAnswerSelect(index)}
            >
              <FormControlLabel
                value={index}
                control={<Radio disabled={showResult} />}
                label={option}
                sx={{ 
                  width: '100%', 
                  m: 0,
                  '& .MuiFormControlLabel-label': {
                    fontSize: isMobile ? '0.9rem' : '1rem'
                  }
                }}
              />
            </Paper>
          </Box>
        ))}
      </Box>
    </RadioGroup>
  );
}