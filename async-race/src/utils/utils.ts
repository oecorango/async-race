import { getCar } from '../api/api';
import { EventEmitter } from '../classes/EventEmit';
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
  // if (parent === '.set_car') EventEmitter.clickGeneralBtn(button);
}

export function createInput(parent: string, type: string, disabled?: string): void {
  const parentElement = document.querySelector(parent);
  const input = document.createElement('input');
  input.type = type;
  if (disabled) input.disabled = true;
  parentElement?.append(input);
}

function createImage(parent: string, path: string, color?: string, name?: string): void {
  const parentElement = document.querySelector(parent);
  const img = new Image();
  img.src = path;
  if (color) img.style.background = color;
  if (name) img.classList.add(name);
  parentElement?.append(img);
}

export async function createCar(): Promise<void> {
  const carsInGarage = await getCar();

  for (let i = 0; i < carsInGarage.length; i += 1) {
    const carId = carsInGarage[i].id;
    const carName = carsInGarage[i].name;
    const carColor = carsInGarage[i].color;

    createElement('.garage', 'div', ['car', `car_${carId}`]);
    createElement(`.car_${carId}`, 'div', ['option', `option-${carId}`]);

    createButton(`.option-${carId}`, 'SELECT', `select_car_${carId}`);
    createButton(`.option-${carId}`, 'REMOVE', `remove_car_${carId}`);
    createElement(`.option-${carId}`, 'h3', [], `${carName}`);

    createElement(`.car_${carId}`, 'div', ['track', `track-${carId}`]);
    createElement(`.track-${carId}`, 'div', [`car_manager-${carId}`]);

    createButton(`.car_manager-${carId}`, 'A');
    createButton(`.car_manager-${carId}`, 'B', '', 'disabled');
    createImage(`.car_manager-${carId}`, carImage, `${carColor}`);

    createImage(`.track-${carId}`, finishImage, '', 'finish');
  }
}
