let targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let gameOver = false;
let minRange = 1;
let maxRange = 100;

document.addEventListener('DOMContentLoaded', function() {
  const guessInput = document.getElementById('guessInput');
  const guessButton = document.getElementById('guessButton');
  const resetButton = document.getElementById('resetButton');
  const message = document.getElementById('message');
  const attemptsDisplay = document.getElementById('attempts');

  function updateRangeDisplay() {
    if (!gameOver) {
      message.innerHTML = `${message.textContent}<br>当前范围：${minRange} - ${maxRange}`;
    }
  }

  guessButton.addEventListener('click', function() {
    const guess = parseInt(guessInput.value);
    
    if (isNaN(guess) || guess < 1 || guess > 100) {
      message.textContent = '请输入1到100之间的有效数字！';
      updateRangeDisplay();
      return;
    }

    attempts++;
    attemptsDisplay.textContent = `已尝试次数: ${attempts}`;

    if (guess === targetNumber) {
      message.textContent = `恭喜你！你用了 ${attempts} 次猜对了数字！`;
      gameOver = true;
      guessInput.disabled = true;
      guessButton.disabled = true;
    } else if (guess < targetNumber) {
      message.textContent = '太小了，再试试！';
      minRange = Math.max(minRange, guess + 1);
      updateRangeDisplay();
    } else {
      message.textContent = '太大了，再试试！';
      maxRange = Math.min(maxRange, guess - 1);
      updateRangeDisplay();
    }
  });

  resetButton.addEventListener('click', function() {
    targetNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    gameOver = false;
    minRange = 1;
    maxRange = 100;
    guessInput.value = '';
    guessInput.disabled = false;
    guessButton.disabled = false;
    message.textContent = '';
    attemptsDisplay.textContent = '已尝试次数: 0';
  });

  guessInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && !gameOver) {
      guessButton.click();
    }
  });
}); 