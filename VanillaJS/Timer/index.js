let totalSeconds = 0;
let timerInterval;
let isRunning = false;

const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');

function updateDisplay() {
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
  const seconds = String(totalSeconds % 60).padStart(2, '0');
  display.textContent = `${minutes}:${seconds}`;
}

function disableInputs(disable) {
  minutesInput.disabled = disable;
  secondsInput.disabled = disable;
}

function startTimer() {
  if (!isRunning) {
    // Only read input values the first time
    if (totalSeconds === 0) {
      const minutes = parseInt(minutesInput.value, 10) || 0;
      const seconds = parseInt(secondsInput.value, 10) || 0;
      totalSeconds = minutes * 60 + seconds;
    }

    if (totalSeconds <= 0) {
      alert("Please enter a valid time.");
      return;
    }

    disableInputs(true);

    timerInterval = setInterval(() => {
      totalSeconds--;
      updateDisplay();

      if (totalSeconds <= 0) {
        clearInterval(timerInterval);
        isRunning = false;
        alert("Time's up!");
        disableInputs(false);
      }
    }, 1000);

    isRunning = true;
  }
}

function pauseTimer() {
  if (isRunning) {
    clearInterval(timerInterval);
    isRunning = false;
  }
}

function resetTimer() {
  clearInterval(timerInterval);
  isRunning = false;
  totalSeconds = 0;
  updateDisplay();
  disableInputs(false);
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

// Initial display
updateDisplay();
