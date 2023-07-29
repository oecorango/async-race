import { Car } from '../types/type';
import { CARS_ON_PAGE } from '../utils/constants';
import { createCarElements, createElement } from '../utils/utils';

export async function createCars(cars: Car[] | Car, page: number): Promise<void> {
  const arrayCars = Array.isArray(cars) ? [...cars] : [cars];
  const garageCars = document.querySelector('.garage_cars');
  if (!garageCars) createElement('.garage', 'div', ['garage_cars']);

  const startIndexCar = (page - 1) * CARS_ON_PAGE;
  const endIndexCar = startIndexCar + CARS_ON_PAGE;

  arrayCars.slice(startIndexCar, endIndexCar).forEach((car) => {
    if (car.id) {
      createCarElements(car.id, car.name, car.color);
    }
  });
}

export async function createOneCar(car: Car | null): Promise<void> {
  const currentCarsOnPage = document.querySelectorAll('.car').length;
  if (currentCarsOnPage < CARS_ON_PAGE) {
    if (car && car.id) {
      createCarElements(car.id, car.name, car.color);
    }
  }
}
