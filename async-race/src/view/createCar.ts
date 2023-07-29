import { Car } from '../types/type';
import { NUMBER_RANDOM_CARS } from '../constants/common';
import { createRandomColor, createRandomName } from '../utils/utils';
import { createCarAPI } from '../api/api';

let countCar = 1;
export async function createNewCar(): Promise<Car | null> {
  const name: HTMLInputElement | null = document.querySelector('[data-id="name-car-to-create"]');
  const color: HTMLInputElement | null = document.querySelector('[data-id="color-car-to-create"]');
  if (name && color) {
    if (name.value.length === 0) {
      name.value = `noname car ${countCar}`;
      countCar += 1;
    }
    const car = await createCarAPI({
      name: name.value,
      color: color.value,
    });
    name.value = '';
    return car;
  }
  return null;
}

export async function createRandomCars(): Promise<void> {
  for (let i = 0; i < NUMBER_RANDOM_CARS; i += 1) {
    createCarAPI({
      name: createRandomName(),
      color: createRandomColor(),
    });
  }
}
