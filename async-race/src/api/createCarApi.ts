import { Car } from '../types/type';
import { FIRST_NAME, LAST_NAME } from '../utils/constants';
import { createCarAPI } from './api';

export async function createCarParams(): Promise<Car | null> {
  const nameCar: HTMLInputElement | null = document.querySelector('[data-id="name-car-to-create"]');
  const colorCar: HTMLInputElement | null = document.querySelector('[data-id="color-car-to-create"]');
  if (nameCar && colorCar) {
    const car = await createCarAPI({
      name: nameCar.value,
      color: colorCar.value,
    });
    nameCar.value = '';
    return car;
  }
  return null;
}

export async function createOneHangaredCarsParams(): Promise<void> {
  for (let i = 0; i < 100; i += 1) {
    const index = Math.floor(Math.random() * 10);
    const index2 = Math.floor(Math.random() * 10);

    const resName = `${FIRST_NAME[index]} ${LAST_NAME[index2]}`;

    const colorCar = [Math.random() * 255, Math.random() * 255, Math.random() * 255];
    const resColor = `rgb(${Math.floor(colorCar[0])},${Math.floor(colorCar[1])},${Math.floor(colorCar[2])})`;

    createCarAPI({
      name: resName,
      color: resColor,
    });
  }
}
