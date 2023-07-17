// eslint-disable-next-line import/no-cycle
import { createButton, createElement, createImage, currentPageGarage } from './utils';
import carImage from '../assets/car.gif';
import finishImage from '../assets/finish.png';
import { Car } from '../types/type';

export async function createCars(cars: Car[] /* | Car */): Promise<void> {
  const arrayCars = [...cars];
  const garageCars = document.querySelector('.garage_cars');
  if (!garageCars) createElement('.garage', 'div', ['garage_cars']);

  // подумать как сделать это не магичиским ;)
  const currentPage = currentPageGarage();
  const startIndexCar = (currentPage - 1) * 7;
  const endIndexCar = startIndexCar + 7;

  arrayCars.slice(startIndexCar, endIndexCar).map((elem) => {
    const carId = elem.id;
    const carName = elem.name;
    const carColor = elem.color;
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
    return elem;
  });
}
