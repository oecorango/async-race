import { createButton, createElements, createInput } from '../utils/utils';

function createGeneralButtons(): void {
  createButton('body', 'to garage', 'garage', 'disabled');
  createButton('body', 'to winners', 'winners');
}

function createPageSections(): void {
  createElements('body', 'section', ['garage']);
  createElements('body', 'section', ['winners', 'hidden']);
}

function createCar(): void {
  createElements('.garage', 'div', ['create_car']);

  createInput('.create_car', 'text');
  createInput('.create_car', 'color');
  createButton('.create_car', 'Create car', 'create-car');
}

function editCar(): void {
  createElements('.garage', 'div', ['edit_car']);

  createInput('.edit_car', 'text', 'disabled');
  createInput('.edit_car', 'color', 'disabled');
  createButton('.edit_car', 'Edit car', 'edit-car', 'disabled');
}

function currentCarInGarage(): void {
  const countCarInGarage = 5; // написать функуцию получаения машин
  const countGaragePage = 1; // написать функуцию получаения страниц

  createElements('.garage', 'h2', ['current_car'], `Garage (${countCarInGarage})`);
  createElements('.garage', 'h2', ['current_garage-page'], `Page #${countGaragePage}`);
}

export function createPage(): void {
  createGeneralButtons();
  createPageSections();
  createCar();
  editCar();

  currentCarInGarage();
}
