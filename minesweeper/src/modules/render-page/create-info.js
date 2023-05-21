import imageCat from '../../assets/image/cat.gif';

const BODY = document.querySelector('body');

async function createTimer(mine) {
  const main = document.createElement('main');
  main.classList.add('main');

  const header = document.createElement('header');
  header.classList.add('header');

  const text = document.createElement('h1');
  text.classList.add('header__text');
  text.innerText = 'Minesweeper';

  const image = new Image();
  image.classList = 'cat';
  image.src = imageCat;

  const info = document.createElement('div');
  info.classList.add('info');

  const timer = document.createElement('div');
  timer.classList.add('time');
  timer.textContent = 'Time: 0s';

  const mines = document.createElement('div');
  mines.classList.add('mines');
  mines.innerText = `Mines: ${mine}`;

  const flags = document.createElement('div');
  flags.classList.add('count-flags');
  flags.innerText = `Flags: ${mine}`;

  header.append(text, image);
  info.append(timer, mines, flags);
  main.append(info);
  BODY.append(header, main);
}

export default createTimer;
