import { Car } from '../../types/type';
import { CARS_ON_PAGE } from '../constants';
import { createCar, createElement } from '../utils';

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
