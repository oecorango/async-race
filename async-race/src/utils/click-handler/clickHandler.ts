import { createCarParams, createOneHangaredCarsParams } from '../../api/createCarApi';
import { createOneCar } from './createCars';
import { clickPrevNextBtn } from './openNextPrevPage';
import { clickRemoveCarBtn } from './removeCar';
import { clickSelectCarBtn } from './renameCar';
import { changeNumberCarsInGarage, onOffNextButton, onOffPrevButton } from '../utils';
import { clickStartStopCar } from './startStopCar';
import { startStopRace } from './startRace';

function clickGeneralBtn(): void {
  const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('[data-name="general"]');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const section = document.querySelectorAll('section');
      section.forEach((e) => e.classList.toggle('hidden'));
      // eslint-disable-next-line no-return-assign, no-param-reassign
      buttons.forEach((btn) => (btn.disabled ? (btn.disabled = false) : (btn.disabled = true)));
    });
  });
}

function clickCreateCarBtn(): void {
  const button: HTMLButtonElement | null = document.querySelector('[data-name="create"]');
  if (button) {
    button.addEventListener('click', async () => {
      createCarParams().then((car) => createOneCar(car));
      changeNumberCarsInGarage('add');
      onOffPrevButton();
      await onOffNextButton();
    });
  }
}

function clickGenerateCars(): void {
  const button: HTMLButtonElement | null = document.querySelector('[data-name="generate"]');
  if (button) {
    button.addEventListener('click', async () => {
      createOneHangaredCarsParams();
      changeNumberCarsInGarage('add-100');
      onOffPrevButton();
      await onOffNextButton();
    });
  }
}

export async function clickHandler(): Promise<void> {
  clickGeneralBtn();
  clickCreateCarBtn();
  clickPrevNextBtn();
  clickRemoveCarBtn();
  clickSelectCarBtn();
  clickGenerateCars();
  clickStartStopCar();
  startStopRace();
}
