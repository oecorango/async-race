import './index.html';
import './style.scss';
import createField from './modules/render-page/create-field';
import createTimer from './modules/render-page/create-timer';
import createSetings from './modules/render-page/create-settings';
import leftClick from './modules/left-handler';
import rigthClick from './modules/right-handler';
import removePage from './modules/render-page/remove-page';

const widthField = 10;
const heigthField = 10;
const mineField = 10;

async function createHTML(width, heigth, mine) {
  await createTimer(mine);
  await createSetings();
  await createField(width, heigth, mine);

  await leftClick(width, heigth, mine);
  await rigthClick(width, mine);

  const newGameBtn = document.getElementById('new-game');
  newGameBtn.addEventListener('click', async () => {
    await removePage();
    await createHTML(widthField, heigthField, mineField);
  });
}

createHTML(widthField, heigthField, mineField);
