import { EventEmitter } from '../classes/EventEmit';

export function createElements(parent: string, tag: string, className: string[]): void {
  const parentElement = document.querySelector(parent);
  const element = document.createElement(tag);
  element.classList.add(...className);
  parentElement?.append(element);
}

export function createButton(parent: string, text: string, idName?: string, disabled?: string): void {
  const parentElement = document.querySelector(parent);
  const button = document.createElement('button');
  button.textContent = text;
  if (idName) button.id = idName;
  if (disabled) button.disabled = true;
  parentElement?.append(button);
  EventEmitter.clickSectionBtn(button);
}

export function createInput(parent: string, type: string): void {
  const parentElement = document.querySelector(parent);
  const input = document.createElement('input');
  input.type = type;
  parentElement?.append(input);
}
