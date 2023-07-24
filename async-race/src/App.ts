import './app.scss';
import { clickHandler } from './utils/click-handler/click-handler';
import { createGaragePage } from './view/garage-page';
import { createWinnersPage } from './view/winners-page';

async function start(): Promise<void> {
  try {
    await createGaragePage();
    await createWinnersPage();
    await clickHandler();
  } catch (err) {
    console.warn(err);
  }
}

start();
