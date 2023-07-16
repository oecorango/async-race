import { getCars } from '../api/api';
import { createButton, createElement, createImage } from './utils';
import { currentPageGarage } from '../components/current-page-garage';
import carImage from '../assets/car.gif';
import finishImage from '../assets/finish.png';

export async function createCars(): Promise<void> {
  createElement('.garage', 'div', ['garage_cars']);

  const carsInGarage = await getCars();

  const currentPage = currentPageGarage();
  const startIndexCar = (currentPage - 1) * 7;
  const endIndexCar = startIndexCar + 7;

  for (let i = startIndexCar; i < carsInGarage.length && i < endIndexCar; i += 1) {
    const carId = carsInGarage[i].id;
    const carName = carsInGarage[i].name;
    const carColor = carsInGarage[i].color;

    createElement('.garage_cars', 'div', ['car', `car_${carId}`]);
    createElement(`.car_${carId}`, 'div', ['option', `option-${carId}`]);

    createButton(`.option-${carId}`, 'SELECT');
    createButton(`.option-${carId}`, 'REMOVE');
    createElement(`.option-${carId}`, 'h3', [], `${carName}`);

    createElement(`.car_${carId}`, 'div', ['track', `track-${carId}`]);
    createElement(`.track-${carId}`, 'div', [`car_motor-${carId}`]);

    createButton(`.car_motor-${carId}`, 'A');
    createButton(`.car_motor-${carId}`, 'B', '', 'disabled');
    createImage(`.car_motor-${carId}`, carImage, `${carColor}`);

    createImage(`.track-${carId}`, finishImage, '', 'finish');
  }
}
