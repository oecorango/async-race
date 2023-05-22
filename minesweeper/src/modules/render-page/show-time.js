import { startGame } from '../left-handler';

let timeOfGame = 0;

async function resetTimer() {
  timeOfGame = 0;
}

async function showTime() {
  const time = document.querySelector('.time');
  timeOfGame += 1;
  time.textContent = `Time: ${timeOfGame}s`;
  if (startGame === 'start') {
    setTimeout(() => {
      showTime();
    }, 1000);
  }
  if (startGame === 'end') {
    timeOfGame = 0;
  }
}

function getTime() {
  return timeOfGame;
}

export { showTime, resetTimer, getTime };
