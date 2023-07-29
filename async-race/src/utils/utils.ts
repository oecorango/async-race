import { Action, Car, DataButtons } from '../types/type';
import { FIRST_NAME, LAST_NAME, START_PAGE_GARAGE } from './constants';
import { getCarsAPI } from '../api/api';
import carImage from '../assets/car.gif';
import finishImage from '../assets/finish.png';

export function createElement(parent: string, tag: string, className: string[], text?: string, dataId?: string): void {
  const parentElement = document.querySelector(parent);
  const element = document.createElement(tag);
  element.classList.add(...className);
  if (text) element.innerText = text;
  if (dataId) element.dataset.id = dataId;
  parentElement?.append(element);
}

export function createButton(parent: string, textButton: string, dataParam?: DataButtons, disabled?: string): void {
  const parentElement = document.querySelector(parent);
  const button = document.createElement('button');
  button.textContent = textButton;

  if (dataParam) {
    button.dataset.id = dataParam.id;
    button.dataset.name = dataParam.name;
  }

  if (disabled) button.setAttribute('disabled', 'disabled');
  parentElement?.append(button);
}

export function createInput(parent: string, type: string, idName?: string, disabled?: string): void {
  const parentElement = document.querySelector(parent);
  const input = document.createElement('input');
  input.type = type;
  if (idName) input.dataset.id = idName;
  if (disabled) input.disabled = true;
  parentElement?.append(input);
}

export function createImage(parent: string, path: string, color?: string, name?: string, idName?: string): void {
  const parentElement = document.querySelector(parent);
  const img = new Image();
  img.src = path;
  if (color) img.style.background = color;
  if (name) img.classList.add(name);
  if (idName) img.dataset.id = idName;
  parentElement?.append(img);
}

export function createCarElements(id: number, name: string, color: string): void {
  createElement('.garage_cars', 'div', ['car', `car_${id}`]);
  createElement(`.car_${id}`, 'div', ['option', `option-${id}`]);
  createButton(`.option-${id}`, 'SELECT', { name: 'select', id: `${id}` });
  createButton(`.option-${id}`, 'REMOVE', { name: 'remove', id: `${id}` });
  createElement(`.option-${id}`, 'h3', [], `${name}`, `text-${id}`);
  createElement(`.car_${id}`, 'div', ['track', `track-${id}`]);
  createElement(`.track-${id}`, 'div', [`car_motor-${id}`]);
  createButton(`.car_motor-${id}`, 'A', { name: 'start-car', id: `${id}` });
  createButton(`.car_motor-${id}`, 'B', { name: 'stop-car', id: `${id}` }, 'disabled');
  createImage(`.car_motor-${id}`, carImage, `${color}`, '', `image-${id}`);
  createImage(`.track-${id}`, finishImage, '', 'finish');
}

export function currentPageGarage(): number {
  const currentPage: HTMLElement | null = document.querySelector('.current_garage-page');
  const numberOfPage = currentPage?.innerText.split('#')[1];

  return Number(numberOfPage);
}

export function removeAllCarsElements(): void {
  const carsInGarage = document.querySelector('.garage_cars');
  carsInGarage?.replaceChildren();
}

export function removeOneCarElements(idCar: number): void {
  const car = document.querySelector(`.car_${idCar}`);
  car?.remove();
}

export function changeNumberCarsInGarage(action: Action): void {
  const carsInGarage: HTMLElement | null = document.querySelector(`.cars_in-garage`);
  if (carsInGarage) {
    let newString = null;
    const number = carsInGarage.innerText.split('#')[1];
    if (action === 'add') newString = Number(number) + 1;
    if (action === 'add-100') newString = Number(number) + 100;
    if (action === 'remove') newString = Number(number) - 1;
    carsInGarage.innerText = `Medusas in pool #${newString}`;
  }
}

export function onOffPrevButton(): void {
  const prevButton: HTMLButtonElement | null = document.querySelector('[data-id="prev"]');
  const currentPage = currentPageGarage();
  if (currentPage === START_PAGE_GARAGE && prevButton) prevButton.disabled = true;
  if (currentPage > START_PAGE_GARAGE && prevButton) prevButton.disabled = false;
}

export async function onOffNextButton(): Promise<void> {
  const nextButton: HTMLButtonElement | null = document.querySelector('[data-id="next"]');
  const currentPage = currentPageGarage();
  const arrayCars = await getCarsAPI();
  if (arrayCars) {
    const allPages = Math.ceil(arrayCars.length / 7);
    if (currentPage === allPages && nextButton) nextButton.disabled = true;
    if (currentPage < allPages && nextButton) nextButton.disabled = false;
  }
}

export function enabledEditCarElement(): void {
  const nameCar: HTMLInputElement | null = document.querySelector('[data-id="name-car-to-edit"]');
  const colorCar: HTMLInputElement | null = document.querySelector('[data-id="color-car-to-edit"]');
  const buttonToEditCat: HTMLButtonElement | null = document.querySelector('[data-name="edit-car"]');
  if (nameCar && colorCar && buttonToEditCat) {
    nameCar.disabled = false;
    colorCar.disabled = false;
    buttonToEditCat.disabled = false;
  }
}

export function disabledEditCarElement(): void {
  const nameCar: HTMLInputElement | null = document.querySelector('[data-id="name-car-to-edit"]');
  const colorCar: HTMLInputElement | null = document.querySelector('[data-id="color-car-to-edit"]');
  const buttonToEditCat: HTMLButtonElement | null = document.querySelector('[data-name="edit-car"]');
  if (nameCar && colorCar && buttonToEditCat) {
    nameCar.disabled = true;
    nameCar.value = '';
    colorCar.disabled = true;
    buttonToEditCat.disabled = true;
  }
}

export async function editCar(car: Car | null): Promise<void> {
  if (car) {
    const carId = car.id;
    const carName = car.name;
    const carColor = car.color;

    const nameCar: HTMLElement | null = document.querySelector(`[data-id="text-${carId}"]`);
    const colorCar: HTMLElement | null = document.querySelector(`[data-id="image-${carId}"]`);

    if (nameCar && colorCar) {
      nameCar.innerText = carName;
      colorCar.style.background = carColor;
    }
  }
}

export function removeWinnerOnTable(id: number): void {
  const pageWinners = document.querySelector(`[data-car_win_id="${id}"]`);
  pageWinners?.replaceChildren();
}

export function createRandomName(): string {
  const firsNameIndex = Math.round(Math.random() * FIRST_NAME.length);
  const lastNameIndex = Math.round(Math.random() * LAST_NAME.length);

  const fullName = `${FIRST_NAME[firsNameIndex]} ${LAST_NAME[lastNameIndex]}`;
  return fullName;
}

export function createRandomColor(): string {
  const randomColorRGB = [Math.random() * 255, Math.random() * 255, Math.random() * 255];
  const colorRGB = `rgb(${Math.round(randomColorRGB[0])},
                        ${Math.round(randomColorRGB[1])},
                        ${Math.round(randomColorRGB[2])})`;
  return colorRGB;
}
