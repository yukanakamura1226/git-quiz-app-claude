'use client';

import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  Alert,
  LinearProgress,
  Container,
  Paper,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { CheckCircle, Cancel, Refresh, ArrowBack } from '@mui/icons-material';
import { QuizSet } from '../quiz-data';
import { QuizState } from '../types/quiz';

interface QuizQuestionProps {
  selectedQuizSet: QuizSet;
  quizState: QuizState;
  onAnswerSelect: (answerIndex: number) => void;
  onNextQuestion: () => void;
  onResetQuiz: () => void;
  onBackToSetSelection: () => void;
}

export default function QuizQuestion({
  selectedQuizSet,
  quizState,
  onAnswerSelect,
  onNextQuestion,
  onResetQuiz,
  onBackToSetSelection
}: QuizQuestionProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const currentQuestions = selectedQuizSet?.questions || [];
  const currentQuestion = currentQuestions[quizState.currentQuestionIndex];
  const progress = currentQuestions.length > 0 ? ((quizState.currentQuestionIndex + 1) / currentQuestions.length) * 100 : 0;

  return (
    <Container maxWidth="md">
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
          {selectedQuizSet?.category === 'Git' ? 'Git' : 'Linux'}クイズ
        </Typography>
        <Box sx={{ mb: 2 }}>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            問題 {quizState.currentQuestionIndex + 1} / {currentQuestions.length}
          </Typography>
          <LinearProgress variant="determinate" value={progress} sx={{ height: 8, borderRadius: 4 }} />
        </Box>
      </Box>

      <Card elevation={3}>
        <CardContent sx={{ p: isMobile ? 2 : 4 }}>
          <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
            {currentQuestion.question}
          </Typography>

          <RadioGroup
            value={quizState.selectedAnswer ?? ''}
            onChange={quizState.showResult ? undefined : (e) => onAnswerSelect(Number(e.target.value))}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {currentQuestion.options.map((option: string, index: number) => (
                <Box key={index}>
                  <Paper
                    elevation={quizState.selectedAnswer === index ? 2 : 0}
                    sx={{
                      p: 1,
                      border: '1px solid',
                      borderColor: quizState.selectedAnswer === index ? 'primary.main' : 'divider',
                      backgroundColor: quizState.selectedAnswer === index ? 'primary.50' : 'transparent',
                      '&:hover': {
                        backgroundColor: 'action.hover'
                      },
                      cursor: quizState.showResult ? 'default' : 'pointer'
                    }}
                    onClick={quizState.showResult ? undefined : () => onAnswerSelect(index)}
                  >
                    <FormControlLabel
                      value={index}
                      control={<Radio disabled={quizState.showResult} />}
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

          {quizState.showResult && (
            <Alert
              severity={quizState.isCorrect ? 'success' : 'error'}
              icon={quizState.isCorrect ? <CheckCircle /> : <Cancel />}
              sx={{ mt: 3, mb: 2 }}
            >
              <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 1 }}>
                {quizState.isCorrect ? '正解！' : '不正解'}
              </Typography>
              <Typography variant="body2">
                {currentQuestion.explanation}
              </Typography>
            </Alert>
          )}

          <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
            <Button
              variant="outlined"
              onClick={onResetQuiz}
              startIcon={<Refresh />}
            >
              リセット
            </Button>
            
            {quizState.showResult && (
              <Button
                variant="contained"
                onClick={onNextQuestion}
                size="large"
              >
                {quizState.currentQuestionIndex < currentQuestions.length - 1 ? '次の問題' : '結果を見る'}
              </Button>
            )}
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}