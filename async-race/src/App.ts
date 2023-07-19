import './app.scss';
import { clickHandler } from './utils/click-handler';
import { createPage } from './view/view';

async function start(): Promise<void> {
  await createPage();
  await clickHandler();
}

start();
