import { EventEmitter } from '../classes/EventEmit';

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
}

export function createInput(parent: string, type: string, disabled?: string): void {
  const parentElement = document.querySelector(parent);
  const input = document.createElement('input');
  input.type = type;
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
