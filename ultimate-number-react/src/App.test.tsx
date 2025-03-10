import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('終極數字遊戲', () => {
  test('渲染主要遊戲元素', () => {
    render(<App />);
    
    // 檢查標題是否存在
    const title = screen.getByText('Hi 歡迎來到終極數字遊戲');
    expect(title).toBeInTheDocument();
    
    // 檢查說明文字是否存在
    const description = screen.getByText('猜一個1到100之間的數字');
    expect(description).toBeInTheDocument();
    
    // 檢查輸入框是否存在
    const input = screen.getByPlaceholderText('輸入你的猜測');
    expect(input).toBeInTheDocument();
    
    // 檢查按鈕是否存在
    const guessButton = screen.getByText('猜！');
    expect(guessButton).toBeInTheDocument();
    
    const resetButton = screen.getByText('重新開始');
    expect(resetButton).toBeInTheDocument();
    
    // 檢查嘗試次數計數器是否存在
    const attempts = screen.getByText('已嘗試次數: 0');
    expect(attempts).toBeInTheDocument();
  });
});
