import { startGame } from '../left-handler';

let timeOfGame = 0;

async function showTime() {
  const time = document.querySelector('.time');
  timeOfGame += 1;
  time.textContent = `Time of Game: ${timeOfGame}s`;
  if (startGame === 'start') {
    setTimeout(() => {
      showTime();
    }, 1000);
  } else timeOfGame = 0;
}

export default showTime;
