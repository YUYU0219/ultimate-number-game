import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [targetNumber, setTargetNumber] = useState<number>(0);
  const [userGuess, setUserGuess] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [attempts, setAttempts] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [minRange, setMinRange] = useState<number>(1);
  const [maxRange, setMaxRange] = useState<number>(100);

  useEffect(() => {
    // 生成1到100之間的隨機數
    setTargetNumber(Math.floor(Math.random() * 100) + 1);
  }, []);

  const handleGuess = () => {
    const guess = parseInt(userGuess);
    
    if (isNaN(guess) || guess < 1 || guess > 100) {
      setMessage('請輸入1到100之間的有效數字！');
      return;
    }

    setAttempts(prev => prev + 1);

    if (guess === targetNumber) {
      setMessage(`恭喜你！你用了 ${attempts + 1} 次猜對了數字！`);
      setGameOver(true);
    } else if (guess < targetNumber) {
      setMessage(`太小了，再試試！\n當前範圍：${guess + 1} - ${maxRange}`);
      setMinRange(guess + 1);
    } else {
      setMessage(`太大了，再試試！\n當前範圍：${minRange} - ${guess - 1}`);
      setMaxRange(guess - 1);
    }
  };

  const resetGame = () => {
    setTargetNumber(Math.floor(Math.random() * 100) + 1);
    setUserGuess('');
    setMessage('');
    setAttempts(0);
    setGameOver(false);
    setMinRange(1);
    setMaxRange(100);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>終極數字遊戲</h1>
        <p>猜一個1到100之間的數字</p>
        
        <div className="game-container">
          <input
            type="number"
            value={userGuess}
            onChange={(e) => setUserGuess(e.target.value)}
            disabled={gameOver}
            placeholder="輸入你的猜測"
            min="1"
            max="100"
          />
          
          <div className="button-container">
            <button onClick={handleGuess} disabled={gameOver}>
              猜！
            </button>
            <button onClick={resetGame}>
              重新開始
            </button>
          </div>

          {message && (
            <p className="message" style={{ whiteSpace: 'pre-line' }}>
              {message}
            </p>
          )}

          <p>已嘗試次數: {attempts}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
