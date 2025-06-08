'use client';

import React, { useState, useEffect, useCallback } from 'react';
import dynamic from 'next/dynamic';
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
  Chip,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { CheckCircle, Cancel, Refresh, Quiz, ArrowBack } from '@mui/icons-material';
import { quizSets, QuizSet } from '../quiz-data';

interface QuizResult {
  questionId: number;
  selectedAnswer: number;
  isCorrect: boolean;
  timestamp: number;
}

interface QuizState {
  currentQuestionIndex: number;
  selectedAnswer: number | null;
  showResult: boolean;
  isCorrect: boolean;
  quizCompleted: boolean;
  results: QuizResult[];
  score: number;
}

function GitQuizComponent() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const [selectedQuizSet, setSelectedQuizSet] = useState<QuizSet | null>(null);
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    selectedAnswer: null,
    showResult: false,
    isCorrect: false,
    quizCompleted: false,
    results: [],
    score: 0
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentQuestions = selectedQuizSet?.questions || [];
  const currentQuestion = currentQuestions[quizState.currentQuestionIndex];
  const progress = currentQuestions.length > 0 ? ((quizState.currentQuestionIndex + 1) / currentQuestions.length) * 100 : 0;

  const loadQuizProgress = useCallback(() => {
    try {
      const saved = localStorage.getItem('gitQuizState');
      if (saved) {
        const parsedState = JSON.parse(saved);
        setQuizState(parsedState);
      }
    } catch (error) {
      console.error('Failed to load quiz progress:', error);
    }
  }, []);

  const saveQuizProgress = useCallback(() => {
    try {
      localStorage.setItem('gitQuizState', JSON.stringify(quizState));
    } catch (error) {
      console.error('Failed to save quiz progress:', error);
    }
  }, [quizState]);

  useEffect(() => {
    loadQuizProgress();
  }, [loadQuizProgress]);

  useEffect(() => {
    saveQuizProgress();
  }, [saveQuizProgress]);

  const handleAnswerSelect = (answerIndex: number) => {
    const isCorrect = answerIndex === currentQuestion.correctAnswer;
    
    // 正解時にピンポン音を再生
    if (isCorrect) {
      playCorrectSound();
    }
    
    const result: QuizResult = {
      questionId: currentQuestion.id,
      selectedAnswer: answerIndex,
      isCorrect,
      timestamp: Date.now()
    };

    setQuizState(prev => ({
      ...prev,
      selectedAnswer: answerIndex,
      showResult: true,
      isCorrect,
      results: [...prev.results, result],
      score: isCorrect ? prev.score + 1 : prev.score
    }));
  };

  const playCorrectSound = () => {
    try {
      const AudioContextClass = window.AudioContext || (window as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      const context = new AudioContextClass();
      
      // ピンポン音を生成（シンプルなチャイム音）
      const oscillator1 = context.createOscillator();
      const oscillator2 = context.createOscillator();
      const gainNode = context.createGain();
      
      oscillator1.connect(gainNode);
      oscillator2.connect(gainNode);
      gainNode.connect(context.destination);
      
      // ピンポンの「ピン」音（高い音）
      oscillator1.frequency.setValueAtTime(800, context.currentTime);
      oscillator1.frequency.setValueAtTime(800, context.currentTime + 0.1);
      
      // ピンポンの「ポン」音（低い音）
      oscillator2.frequency.setValueAtTime(600, context.currentTime + 0.15);
      oscillator2.frequency.setValueAtTime(600, context.currentTime + 0.25);
      
      // 音量調整
      gainNode.gain.setValueAtTime(0.3, context.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, context.currentTime + 0.4);
      
      oscillator1.start(context.currentTime);
      oscillator1.stop(context.currentTime + 0.15);
      
      oscillator2.start(context.currentTime + 0.15);
      oscillator2.stop(context.currentTime + 0.4);
    } catch {
      console.log('Audio playback not supported');
    }
  };


  const playPageTurnSound = () => {
    try {
      const AudioContextClass = window.AudioContext || (window as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      const context = new AudioContextClass();
      
      // ページめくり音を生成（紙がめくれる音）
      const whiteNoise = context.createBufferSource();
      const buffer = context.createBuffer(1, context.sampleRate * 0.2, context.sampleRate);
      const data = buffer.getChannelData(0);
      
      // ホワイトノイズを生成
      for (let i = 0; i < buffer.length; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      
      whiteNoise.buffer = buffer;
      
      // フィルターでページめくり感を演出
      const filter = context.createBiquadFilter();
      filter.type = 'highpass';
      filter.frequency.setValueAtTime(3000, context.currentTime);
      filter.Q.setValueAtTime(10, context.currentTime);
      
      const gainNode = context.createGain();
      gainNode.gain.setValueAtTime(0.02, context.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.15);
      
      whiteNoise.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(context.destination);
      
      whiteNoise.start(context.currentTime);
      whiteNoise.stop(context.currentTime + 0.15);
    } catch {
      console.log('Audio playback not supported');
    }
  };

  const handleNextQuestion = () => {
    // ページめくり音を再生
    playPageTurnSound();
    
    if (quizState.currentQuestionIndex < currentQuestions.length - 1) {
      setQuizState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
        selectedAnswer: null,
        showResult: false,
        isCorrect: false
      }));
    } else {
      setQuizState(prev => ({
        ...prev,
        quizCompleted: true
      }));
    }
  };

  const handleResetQuiz = () => {
    setQuizState({
      currentQuestionIndex: 0,
      selectedAnswer: null,
      showResult: false,
      isCorrect: false,
      quizCompleted: false,
      results: [],
      score: 0
    });
    localStorage.removeItem('gitQuizState');
  };

  const handleSelectQuizSet = (quizSet: QuizSet) => {
    setSelectedQuizSet(quizSet);
    setQuizState({
      currentQuestionIndex: 0,
      selectedAnswer: null,
      showResult: false,
      isCorrect: false,
      quizCompleted: false,
      results: [],
      score: 0
    });
  };

  const handleBackToSetSelection = () => {
    setSelectedQuizSet(null);
    setQuizState({
      currentQuestionIndex: 0,
      selectedAnswer: null,
      showResult: false,
      isCorrect: false,
      quizCompleted: false,
      results: [],
      score: 0
    });
  };

  const getScoreColor = () => {
    const percentage = (quizState.score / currentQuestions.length) * 100;
    if (percentage >= 80) return 'success';
    if (percentage >= 60) return 'warning';
    return 'error';
  };

  if (!mounted) {
    return null;
  }

  // セット選択画面
  if (!selectedQuizSet) {
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
                onClick={() => handleSelectQuizSet(quizSet)}
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
                onClick={() => handleSelectQuizSet(quizSet)}
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

  if (quizState.quizCompleted) {
    return (
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
          <Quiz sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
          <Typography variant="h4" gutterBottom>
            クイズ完了！
          </Typography>
          <Typography variant="h5" sx={{ mb: 3 }}>
            スコア: {quizState.score} / {currentQuestions.length}
          </Typography>
          <Chip
            label={`正答率: ${Math.min(100, Math.round((quizState.score / currentQuestions.length) * 100))}%`}
            color={getScoreColor()}
            sx={{ mb: 3, fontSize: '1.2rem', py: 3 }}
          />
          <Box sx={{ mt: 3, display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              onClick={handleResetQuiz}
              startIcon={<Refresh />}
              size="large"
            >
              もう一度挑戦する
            </Button>
            <Button
              variant="outlined"
              onClick={handleBackToSetSelection}
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

  return (
    <Container maxWidth="md">
      <Box sx={{ mb: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
          <Button
            variant="outlined"
            onClick={handleBackToSetSelection}
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
            onChange={quizState.showResult ? undefined : (e) => handleAnswerSelect(Number(e.target.value))}
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
                    onClick={quizState.showResult ? undefined : () => handleAnswerSelect(index)}
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
              onClick={handleResetQuiz}
              startIcon={<Refresh />}
            >
              リセット
            </Button>
            
            {quizState.showResult && (
              <Button
                variant="contained"
                onClick={handleNextQuestion}
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

const GitQuiz = dynamic(() => Promise.resolve(GitQuizComponent), {
  ssr: false
});

export default GitQuiz;