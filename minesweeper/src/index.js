import './index.html';
import './style.scss';
import createField from './modules/render-page/create-field';
import createTimer from './modules/render-page/create-timer';
import createSetings from './modules/render-page/create-settings';
import leftClick from './modules/left-handler';
import rigthClick from './modules/right-handler';
import removePage from './modules/render-page/remove-page';
import createstopGame from './modules/render-page/stop-game';
import winGame from './modules/render-page/win-game';
import {
  widthField, heigthField, mineField, onChange, resizeMines,
} from './modules/size-field';

import { resetTimer } from './modules/render-page/show-time';

async function createHTML(width, heigth, mine, num) {
  await resetTimer();
  await createTimer(mine);
  await createSetings(num);
  await createField(width, heigth, mine);
  await createstopGame();
  await winGame();

  await leftClick(width, heigth, mine);
  await rigthClick(width, mine);

  const newGameBtn = document.getElementById('new-game');
  const winGameBtn = document.getElementById('win-game');
  const againBtn = document.getElementById('try-again');

  newGameBtn.addEventListener('click', async () => {
    await removePage();
    await createHTML(widthField, heigthField, mineField);
  });
  winGameBtn.addEventListener('click', async () => {
    await removePage();
    await createHTML(widthField, heigthField, mineField);
  });
  againBtn.addEventListener('click', async () => {
    await removePage();
    await createHTML(widthField, heigthField, mineField);
  });
  await onChange();
  await resizeMines();
}

createHTML(widthField, heigthField, mineField);
