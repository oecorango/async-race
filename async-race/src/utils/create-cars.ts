import { createButton, createElement, createImage } from './utils';
import carImage from '../assets/car.gif';
import finishImage from '../assets/finish.png';
import { Car } from '../types/type';
import { CARS_ON_PAGE } from './constants';

function createCar(id: number, name: string, color: string): void {
  createElement('.garage_cars', 'div', ['car', `car_${id}`]);
  createElement(`.car_${id}`, 'div', ['option', `option-${id}`]);
  createButton(`.option-${id}`, 'SELECT', { name: 'select', id: `${id}` });
  createButton(`.option-${id}`, 'REMOVE', { name: 'remove', id: `${id}` });
  createElement(`.option-${id}`, 'h3', [], `${name}`, `text-${id}`);
  createElement(`.car_${id}`, 'div', ['track', `track-${id}`]);
  createElement(`.track-${id}`, 'div', [`car_motor-${id}`]);
  createButton(`.car_motor-${id}`, 'A', { name: 'a', id: `${id}` });
  createButton(`.car_motor-${id}`, 'B', { name: 'b', id: `${id}` }, 'disabled');
  createImage(`.car_motor-${id}`, carImage, `${color}`, '', `image-${id}`);
  createImage(`.track-${id}`, finishImage, '', 'finish');
}

export async function createCars(cars: Car[] | Car, page: number): Promise<void> {
  const arrayCars = Array.isArray(cars) ? [...cars] : [cars];
  const garageCars = document.querySelector('.garage_cars');
  if (!garageCars) createElement('.garage', 'div', ['garage_cars']);

  const currentPage = page;
  const startIndexCar = (currentPage - 1) * 7;
  const endIndexCar = startIndexCar + 7;

  arrayCars.slice(startIndexCar, endIndexCar).forEach((car) => {
    if (car.id) {
      createCar(car.id, car.name, car.color);
    }
  });
}

export async function createOneCar(car: Car | null): Promise<void> {
  const currentCarsOnPage = document.querySelectorAll('.car').length;
  if (currentCarsOnPage < CARS_ON_PAGE) {
    if (car && car.id) {
      createCar(car.id, car.name, car.color);
    }
  }
}
