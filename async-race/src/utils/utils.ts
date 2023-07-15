import { EventEmitter } from '../classes/EventEmit';

export function createElements(parent: string, tag: string, className: string[], text?: string): void {
  const parentElement = document.querySelector(parent);
  const element = document.createElement(tag);
  element.classList.add(...className);
  if (text) element.innerText = text;
  parentElement?.append(element);
}

export function createButton(parent: string, text: string, idName?: string, disabled?: string): void {
  const parentElement = document.querySelector(parent);
  const button = document.createElement('button');
  button.textContent = text;
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
