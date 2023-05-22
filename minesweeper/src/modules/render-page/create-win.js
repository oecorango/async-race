async function createWinGame() {
  const main = document.querySelector('.main');
  const modalWindow = document.createElement('div');

  modalWindow.classList.add('game-win');
  modalWindow.innerHTML = '<p>You win!</p>';

  const button = document.createElement('button');
  button.classList.add('button');
  button.id = 'win-game';
  button.innerText = 'Play again?';

  modalWindow.append(button);
  main.append(modalWindow);
}

export default createWinGame;
