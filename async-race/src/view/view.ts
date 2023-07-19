import { getCarsAPI } from '../api/api';
import { CARS_ON_PAGE, START_PAGE_GARAGE } from '../utils/constants';
import { createCars } from '../utils/create-cars';
import { createButton, createElement, createInput } from '../utils/utils';

function createGeneralButtons(): void {
  createButton('body', 'TO GARAGE', { name: 'general', id: '' }, 'disabled');
  createButton('body', 'TO WINNERS', { name: 'general', id: '' });
}

function createPageSections(): void {
  createElement('body', 'section', ['garage']);
  createElement('body', 'section', ['winners', 'hidden']);
}

function createCarNewCar(): void {
  createElement('.garage', 'div', ['create_car']);

  createInput('.create_car', 'text', 'name-car-to-create');
  createInput('.create_car', 'color', 'color-car-to-create');
  createButton('.create_car', 'Create car', { name: 'create', id: '' });
}

function editCar(): void {
  createElement('.garage', 'div', ['edit_car']);

  createInput('.edit_car', 'text', 'name-car-to-edit', 'disabled');
  createInput('.edit_car', 'color', 'color-car-to-edit', 'disabled');
  createButton('.edit_car', 'Edit car', { name: 'edit-car', id: '' }, 'disabled');
}

function createRaceButton(): void {
  createElement('.garage', 'div', ['race']);

  createButton('.race', 'RACE', { name: 'race', id: '' });
  createButton('.race', 'RESET', { name: 'reset', id: '' });
  createButton('.race', 'GENERATE CARS', { name: 'generate', id: '' });
}

async function currentCarInGarage(): Promise<void> {
  const carsInGarage = await getCarsAPI();

  const countCarInGarage = carsInGarage.length;
  const countGaragePage = START_PAGE_GARAGE;

  createElement('.garage', 'h2', ['cars_in-garage'], `Cars in garage #${countCarInGarage}`);
  createElement('.garage', 'h2', ['current_garage-page'], `Page #${countGaragePage}`);
}

async function createPagination(): Promise<void> {
  const carsInGarage = await getCarsAPI();
  const countCarInGarage = carsInGarage.length;

  createElement('.garage', 'div', ['pagination_button']);

  createButton('.pagination_button', 'PREV', { name: 'pagination', id: 'prev' }, 'disabled');
  if (countCarInGarage > CARS_ON_PAGE) {
    createButton('.pagination_button', 'NEXT', { name: 'pagination', id: 'next' });
  } else {
    createButton('.pagination_button', 'NEXT', { name: 'pagination', id: 'next' }, 'disabled');
  }
}

export async function createPage(): Promise<void> {
  createGeneralButtons();
  createPageSections();
  createCarNewCar();
  editCar();
  createRaceButton();

  await currentCarInGarage();
  await getCarsAPI().then((arr) => {
    createCars(arr, START_PAGE_GARAGE);
  });
  await createPagination();
}
