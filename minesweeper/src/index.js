import './index.html';
import './style.scss';
import createField from './modules/render-page/createField';
import createTimer from './modules/render-page/createTimer';
import createSetings from './modules/render-page/createButtons';

async function createHTML() {
  await createTimer();
  // await createField(9, 9, 15, 0.15);
  // await createField(12, 12, 40, 0.3);
  await createField(15, 15, 110, 0.5);
  await createSetings();
}
createHTML();
