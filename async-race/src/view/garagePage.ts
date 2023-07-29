import { getCarsAPI } from '../api/api';
import { CARS_ON_PAGE, START_PAGE_GARAGE } from '../constants/api';
import { createCars } from '../handlers/createCars';
import { createButton, createElement, createInput } from '../utils/utils';

function createGeneralButtons(): void {
  createButton('body', 'TO GARAGE', { name: 'general', id: '' }, 'disabled');
  createButton('body', 'TO WINNERS', { name: 'general', id: '' });
}

function createPageSections(): void {
  createElement('body', 'section', ['garage']);
  createElement('body', 'section', ['winners', 'hidden']);
}

function createNewCar(): void {
  createElement('.garage', 'div', ['create_car']);

  createInput('.create_car', 'text', 'name-car-to-create');
  createInput('.create_car', 'color', 'color-car-to-create');
  createButton('.create_car', 'Create medusa', { name: 'create', id: '' });
}

function editCar(): void {
  createElement('.garage', 'div', ['edit_car']);

  createInput('.edit_car', 'text', 'name-car-to-edit', 'disabled');
  createInput('.edit_car', 'color', 'color-car-to-edit', 'disabled');
  createButton('.edit_car', 'Edit medusa', { name: 'edit-car', id: '' }, 'disabled');
}

function createRaceButton(): void {
  createElement('.garage', 'div', ['race']);

  createButton('.race', 'RACE', { name: 'race', id: '' });
  createButton('.race', 'RESET', { name: 'reset', id: '' });
  createButton('.race', 'GENERATE Medusas', { name: 'generate', id: '' });
}

async function currentCarInGarage(): Promise<void> {
  const carsInGarage = await getCarsAPI();
  if (carsInGarage) {
    const countCarInGarage = carsInGarage.length;
    const countGaragePage = START_PAGE_GARAGE;

    createElement('.garage', 'h2', ['cars_in-garage'], `Medusas in pool #${countCarInGarage}`);
    createElement('.garage', 'h2', ['current_garage-page'], `Page #${countGaragePage}`);
  }
}

async function createPagination(): Promise<void> {
  const carsInGarage = await getCarsAPI();
  if (carsInGarage) {
    const countCarInGarage = carsInGarage.length;
    createElement('.garage', 'div', ['pagination_button']);
    createButton('.pagination_button', 'PREV', { name: 'pagination', id: 'prev' }, 'disabled');
    if (countCarInGarage > CARS_ON_PAGE) {
      createButton('.pagination_button', 'NEXT', { name: 'pagination', id: 'next' });
    } else {
      createButton('.pagination_button', 'NEXT', { name: 'pagination', id: 'next' }, 'disabled');
    }
  }
}

export async function createGaragePage(): Promise<void> {
  createGeneralButtons();
  createPageSections();
  createNewCar();
  editCar();
  createRaceButton();
  await currentCarInGarage();
  const arr = await getCarsAPI();
  if (arr) createCars(arr, START_PAGE_GARAGE);
  await createPagination();
}
