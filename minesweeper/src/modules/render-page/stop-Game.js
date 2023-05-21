async function createstopGame() {
  const main = document.querySelector('.main');
  const modalWindow = document.createElement('div');

  modalWindow.classList.add('game-over');
  modalWindow.innerHTML = '<p>Game Over</p>';

  const button = document.createElement('button');
  button.classList.add('button');
  button.id = 'try-again';
  button.innerText = 'Try again';

  modalWindow.append(button);
  main.append(modalWindow);
}

export default createstopGame;
