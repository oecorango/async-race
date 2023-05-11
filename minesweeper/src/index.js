import './index.html';
import './style.scss';
import createField from './modules/createField';
import createTimer from './modules/createTimer';
import createSetings from './modules/createButtons';

async function createHTML() {
  await createTimer();
  await createField();
  await createSetings();
}
createHTML();
