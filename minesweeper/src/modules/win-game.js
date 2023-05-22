async function winGame(time, clicks) {
  const modalWindow = document.querySelector('.game-win');
  modalWindow.classList.add('game-win_on');
  modalWindow.firstChild.textContent = `Hooray!\nYou found all mines\nin ${time} seconds\nand ${clicks} moves!`;
}

export default winGame;
