const BODY = document.querySelector('body');

async function winGame() {
  const modalWindow = document.createElement('div');

  modalWindow.classList.add('game-win');
  modalWindow.innerHTML = '<p>You win!</p>';

  const button = document.createElement('button');
  button.classList.add('button');
  button.id = 'new-game';
  button.innerText = 'Play again?';

  modalWindow.append(button);
  BODY.append(modalWindow);
}

export default winGame;
