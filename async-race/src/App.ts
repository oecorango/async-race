import './app.scss';
import { clickHandler } from './utils/click-handler/click-handler';
import { createPage } from './view/view';

async function start(): Promise<void> {
  try {
    await createPage();
    await clickHandler();
  } catch (err) {
    console.warn(err)
  }
}

start();
