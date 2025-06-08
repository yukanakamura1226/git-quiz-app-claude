'use client';

export const playCorrectSound = () => {
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

export const playPageTurnSound = () => {
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