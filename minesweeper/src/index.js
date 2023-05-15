import './index.html';
import './style.scss';
import createField from './modules/render-page/create-field';
import createTimer from './modules/render-page/create-timer';
import createSetings from './modules/render-page/create-buttons';
import leftClick from './modules/left-handler';

async function createHTML(width, heigth, mine) {
  await createTimer();
  await createField(width, heigth, mine);
  // await createField(15, 15, 40);
  // await createField(25, 25, 100);
  createSetings();
  await leftClick(width, heigth);
}
createHTML(10, 10, 50);
