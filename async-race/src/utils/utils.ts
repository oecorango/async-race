// eslint-disable-next-line import/no-cycle
import { EventEmitter } from '../classes/EventEmit';
import { Car } from '../types/type';
import { CARS_ON_PAGE } from './constants';
import carImage from '../assets/car.gif';
import finishImage from '../assets/finish.png';

export function createElement(parent: string, tag: string, className: string[], text?: string): void {
  const parentElement = document.querySelector(parent);
  const element = document.createElement(tag);
  element.classList.add(...className);
  if (text) element.innerText = text;
  parentElement?.append(element);
}

export function createButton(parent: string, nameButton: string, idName?: string, disabled?: string): void {
  const parentElement = document.querySelector(parent);
  const button = document.createElement('button');
  button.textContent = nameButton;
  if (idName) button.id = idName;
  if (disabled) button.disabled = true;
  parentElement?.append(button);

  if (parent === 'body') EventEmitter.clickGeneralBtn(button);
  if (idName === 'next' || idName === 'prev') EventEmitter.clickPrevNextBtn(button);
  if (idName === 'create-car') EventEmitter.clickAddCarBtn(button);
  if (nameButton === 'REMOVE') EventEmitter.clickRemoveCarBtn(button);
}

export function createInput(parent: string, type: string, idName?: string, disabled?: string): void {
  const parentElement = document.querySelector(parent);
  const input = document.createElement('input');
  input.type = type;
  if (idName) input.id = idName;
  if (disabled) input.disabled = true;
  parentElement?.append(input);
}

export function createImage(parent: string, path: string, color?: string, name?: string): void {
  const parentElement = document.querySelector(parent);
  const img = new Image();
  img.src = path;
  if (color) img.style.background = color;
  if (name) img.classList.add(name);
  parentElement?.append(img);
}

export function currentPageGarage(): number {
  const currentPage: HTMLElement | null = document.querySelector('.current_garage-page');
  const numberOfPage = currentPage?.innerText.split('#')[1];

  return Number(numberOfPage);
}

export function onOffButton(btn: HTMLButtonElement): void {
  if (btn.hasAttribute('disabled')) {
    btn.removeAttribute('disabled');
  } else btn.setAttribute('disabled', 'disabled');
}

export function removeAllCars(): void {
  const carsInGarage = document.querySelector('.garage_cars');
  while (carsInGarage?.firstChild) {
    carsInGarage.removeChild(carsInGarage.firstChild);
  }
}

export function removeOneCar(idCar: number): void {
  const car = document.querySelector(`.car_${idCar}`);
  car?.remove();
}

export function reduceNumberCarsInGarage(): void {
  const carsInGarage: HTMLElement | null = document.querySelector(`.cars_in-garage`);
  if (carsInGarage) {
    const number = carsInGarage.innerText.split('#')[1];
    const newString = +number - 1;
    carsInGarage.innerText = `Cars in garage #${newString}`;
  }
}

export function increaseNumberCarsInGarage(): void {
  const carsInGarage: HTMLElement | null = document.querySelector(`.cars_in-garage`);
  if (carsInGarage) {
    const number = carsInGarage.innerText.split('#')[1];
    const newString = +number + 1;
    carsInGarage.innerText = `Cars in garage #${newString}`;
  }
}

export async function createOneCar(car: Car | null): Promise<void> {
  const currentCarsOnPage = document.querySelectorAll('.car').length;
  if (currentCarsOnPage < CARS_ON_PAGE) {
    if (car) {
      const carId = car.id;
      const carName = car.name;
      const carColor = car.color;

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
}
