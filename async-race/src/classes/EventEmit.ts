import { getCarsAPI, removeCarAPI } from '../api/api';
import { createCarParams } from '../api/create-one-car';
// eslint-disable-next-line import/no-cycle
import { createCars } from '../utils/create-cars';
import {
  createOneCar,
  currentPageGarage,
  increaseNumberCarsInGarage,
  onOffButton,
  reduceNumberCarsInGarage,
  removeAllCars,
  removeOneCar,
} from '../utils/utils';

export class EventEmitter {
  public static clickGeneralBtn(btn: HTMLButtonElement): void {
    btn.addEventListener('click', () => {
      const section = document.querySelectorAll('section');
      section.forEach((e) => e.classList.toggle('hidden'));

      const garage = document.getElementById('garage');
      const winners = document.getElementById('winners');
      if (garage) onOffButton(<HTMLButtonElement>garage);
      if (winners) onOffButton(<HTMLButtonElement>winners);
    });
  }

  public static clickAddCarBtn(btn: HTMLButtonElement): void {
    btn.addEventListener('click', async () => {
      await createCarParams().then((car) => createOneCar(car));
      increaseNumberCarsInGarage();
    });
  }

  public static clickRemoveCarBtn(btn: HTMLButtonElement): void {
    btn.addEventListener('click', async () => {
      const idCar = btn.parentElement;
      if (idCar) {
        const id = idCar.classList[1].split('-')[1];
        removeCarAPI(+id);
        removeOneCar(+id);
        reduceNumberCarsInGarage();
      }
    });
  }

  // этот метод буду переделывать, пока просто оформил
  // для понимания как работает программа
  public static clickPrevNextBtn(btn: HTMLButtonElement): void {
    btn.addEventListener('click', async () => {
      const currentPage = currentPageGarage();
      const allPages = Math.ceil((await getCarsAPI()).length / 7);
      let nextPrevPage = currentPage;
      if (btn.id === 'prev' && nextPrevPage > 1) {
        nextPrevPage -= 1;
        const nextBtn = <HTMLButtonElement>document.getElementById('next');
        nextBtn.disabled = false;
        if (nextPrevPage === 1) {
          const prevBtn = <HTMLButtonElement>document.getElementById('prev');
          prevBtn.disabled = true;
        }
        const numberPage: HTMLElement | null = document.querySelector('.current_garage-page');
        if (numberPage) numberPage.innerText = `Page #${nextPrevPage}`;
        removeAllCars();
        await getCarsAPI().then((arr) => {
          createCars(arr);
        });
      }
      if (btn.id === 'next' && nextPrevPage <= allPages) {
        const prevBtn = <HTMLButtonElement>document.getElementById('prev');
        prevBtn.disabled = false;
        nextPrevPage += 1;
        if (nextPrevPage === allPages) {
          const nextBtn = <HTMLButtonElement>document.getElementById('next');
          nextBtn.disabled = true;
        }
        const numberPage: HTMLElement | null = document.querySelector('.current_garage-page');
        if (numberPage) numberPage.innerText = `Page #${nextPrevPage}`;
        removeAllCars();
        await getCarsAPI().then((arr) => {
          createCars(arr);
        });
      }
    });
  }
}
