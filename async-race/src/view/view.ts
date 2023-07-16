import { getCars } from '../api/api';
import { START_PAGE_GARAGE } from '../utils/constants';
import { createCars } from '../utils/create-cars';
import { createButton, createElement, createInput } from '../utils/utils';

function createGeneralButtons(): void {
  createButton('body', 'to garage', 'garage', 'disabled');
  createButton('body', 'to winners', 'winners');
}

function createPageSections(): void {
  createElement('body', 'section', ['garage']);
  createElement('body', 'section', ['winners', 'hidden']);
}

function createCarNewCar(): void {
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

function createRaceButton(): void {
  createElement('.garage', 'div', ['race']);

  createButton('.race', 'RACE', 'race');
  createButton('.race', 'RESET', 'reset');
  createButton('.race', 'GENERATE CARS', 'generate');
}

async function currentCarInGarage(): Promise<void> {
  const carsInGarage = await getCars();

  const countCarInGarage = carsInGarage.length;
  const countGaragePage = START_PAGE_GARAGE;

  createElement('.garage', 'h2', ['current_car'], `Garage (${countCarInGarage})`);
  createElement('.garage', 'h2', ['current_garage-page'], `Page #${countGaragePage}`);
}

function createPagination(): void {
  createElement('.garage', 'div', ['pagination_button']);

  createButton('.pagination_button', 'PREV', 'prev');
  createButton('.pagination_button', 'NEXT', 'next');
}

export async function createPage(): Promise<void> {
  createGeneralButtons();
  createPageSections();
  createCarNewCar();
  editCar();
  createRaceButton();

  await currentCarInGarage();
  await createCars();

  createPagination();
}
