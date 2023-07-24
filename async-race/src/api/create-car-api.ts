import { Car } from '../types/type';
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
    const name = Math.floor(Math.random() * 10);
    const name2 = Math.floor(Math.random() * 10);
    const arrName = ['aw', 'qwes', 'dqwe', 'fsss', 'gqwe', 'qwew', 'hqq', 'utyuj', 'qwek', 'qwerrl'];
    const resName = `${arrName[name]} ${arrName[name2]}`;

    const arrColor = [Math.random() * 255, Math.random() * 255, Math.random() * 255];

    const resColor = `rgb(${Math.floor(arrColor[0])},${Math.floor(arrColor[1])},${Math.floor(arrColor[2])})`;

    createCarAPI({
      name: resName,
      color: resColor,
    });
  }
}
