import { createCar, getCar } from './api/api';
import './app.scss';
import { createPage } from './view/view';

createPage();
const main = async (): Promise<void> => {
  const creat = await createCar({
    name: 'Chin-Moskvich',
    color: '#fff',
  });
};
// main();
