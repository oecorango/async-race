import sunCat from '../../assets/image/sun/cat.gif';
import nightCat from '../../assets/image/night/cat1.gif';

const BODY = document.querySelector('body');

async function createTimer(mine) {
  const main = document.createElement('main');
  main.classList.add('main');

  const header = document.createElement('header');
  header.classList.add('header');

  const text = document.createElement('h1');
  text.classList.add('header__text');
  text.innerText = 'MinesWeeper';

  const imageCat = new Image();
  imageCat.classList.add('cat');
  imageCat.src = sunCat;

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

  const clicks = document.createElement('div');
  clicks.classList.add('clicks');
  clicks.innerText = 'Clicks: 0';

  header.append(text, imageCat);
  info.append(timer, mines, flags, clicks);
  main.append(info);
  BODY.append(header, main);

  if (BODY.classList.contains('body_night')) {
    imageCat.src = nightCat;
    text.classList.add('header__text_night');
  }
}

export default createTimer;
