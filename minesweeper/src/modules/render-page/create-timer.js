import imageCat from '../../assets/image/cat.gif';

const BODY = document.querySelector('body');

async function createTimer(mine) {
  const header = document.createElement('header');
  header.classList.add('header');

  const text = document.createElement('h1');
  text.classList.add('header__text');
  text.innerText = 'Minesweeper';

  const image = new Image();
  image.classList = 'cat';
  image.src = imageCat;

  const score = document.createElement('div');
  score.classList.add('score');

  const timer = document.createElement('div');
  timer.classList.add('time');
  timer.textContent = 'Time of Game: 0s';

  const mines = document.createElement('div');
  mines.classList.add('mines');
  mines.innerText = `Mines: ${mine}`;

  const flags = document.createElement('div');
  flags.classList.add('count-flags');
  flags.innerText = `Flags: ${mine}`;

  header.append(text, image);
  score.append(timer, mines, flags);
  BODY.append(header, score);
}

export default createTimer;
