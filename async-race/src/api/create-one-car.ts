import { Car } from '../types/type';
import { createCarAPI } from './api';

export async function createCarParams(): Promise<Car | null> {
  const nameCar: HTMLInputElement | null = document.querySelector('#name-car-to-create');
  const colorCar: HTMLInputElement | null = document.querySelector('#color-car-to-create');
  if (nameCar && colorCar) {
    const car = await createCarAPI({
      name: nameCar.value,
      color: colorCar.value,
    });
    return car;
  }
  return null;
}
