import { isOnSound } from './sound-on';

async function winGame(time, clicks) {
  const modalWindow = document.querySelector('.game-win');
  modalWindow.classList.add('game-win_on');
  modalWindow.firstChild.textContent = `Hooray!\nYou found all mines\nin ${time} seconds\nand ${clicks} moves!`;

  const audioClick = new Audio();
  async function playAudio() {
    audioClick.src = './assets/win.mp3';
    audioClick.play();
  }

  if (isOnSound()) {
    playAudio();
  }
}

export default winGame;
