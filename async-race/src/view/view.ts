import { createButton, createCar, createElement, createInput } from '../utils/utils';

function createGeneralButtons(): void {
  createButton('body', 'to garage', 'garage', 'disabled');
  createButton('body', 'to winners', 'winners');
}

function createPageSections(): void {
  createElement('body', 'section', ['garage']);
  createElement('body', 'section', ['winners', 'hidden']);
}

function createCarButtons(): void {
  createElement('.garage', 'div', ['create_car']);

  createInput('.create_car', 'text');
  createInput('.create_car', 'color');
  createButton('.create_car', 'Create car', 'create-car');
}

function editCar(): void {
  createElement('.garage', 'div', ['edit_car']);

  createInput('.edit_car', 'text', 'disabled');
  createInput('.edit_car', 'color', 'disabled');
  createButton('.edit_car', 'Edit car', 'edit-car', 'disabled');
}

function currentCarInGarage(): void {
  const countCarInGarage = 5; // написать функуцию получаения машин
  const countGaragePage = 1; // написать функуцию получаения страниц

  createElement('.garage', 'h2', ['current_car'], `Garage (${countCarInGarage})`);
  createElement('.garage', 'h2', ['current_garage-page'], `Page #${countGaragePage}`);
}

function createGarageCars(): void {
  createCar();
}

export function createPage(): void {
  createGeneralButtons();
  createPageSections();
  createCarButtons();
  editCar();

  currentCarInGarage();
  createGarageCars();
}
