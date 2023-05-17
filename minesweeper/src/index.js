import './index.html';
import './style.scss';
import createField from './modules/render-page/create-field';
import createTimer from './modules/render-page/create-timer';
import createSetings from './modules/render-page/create-buttons';
import leftClick from './modules/left-handler';
import rigthClick from './modules/right-handler';

async function createHTML(width, heigth, mine) {
  await createTimer();
  await createSetings();
  await createField(width, heigth, mine);
  await leftClick(width, heigth, mine);
  await rigthClick(width, heigth);
}

createHTML(10, 10, 10);
// createHTML(15, 15, 50);
// createHTML(25, 25, 100);
