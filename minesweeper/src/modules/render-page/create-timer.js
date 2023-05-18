const BODY = document.querySelector('body');

async function createTimer(mine) {
  const hedder = document.createElement('h1');
  hedder.classList.add('header');
  hedder.innerText = 'Minesweeper';

  const score = document.createElement('div');
  score.classList.add('score');

  const timer = document.createElement('div');
  timer.classList.add('time');
  timer.textContent = 'Time of Game: 0s';

  const mines = document.createElement('div');
  mines.classList.add('count-mines');
  mines.innerText = mine;

  score.append(timer, mines);
  BODY.append(hedder, score);
}

export default createTimer;
