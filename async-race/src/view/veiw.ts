import { createButton, createElements } from '../utils/utils';

export function createPage(): void {
  createButton('body', 'to garage', 'garage', 'disabled');
  createButton('body', 'to winners', 'winners');

  createElements('body', 'section', ['garage']);
  createElements('body', 'section', ['winners', 'hidden']);
}
