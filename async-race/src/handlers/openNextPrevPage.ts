import { getCarsAPI } from '../api/api';
import { currentPageGarage, onOffNextButton, onOffPrevButton, removeAllCars } from '../utils/utils';
import { createCars } from './createCars';

export function clickPrevNextBtn(): void {
  const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('[data-name="pagination"]');
  buttons.forEach((button) => {
    button.addEventListener('click', async () => {
      const currentPage = currentPageGarage();
      const prevPage = currentPage - 1;
      const nextPage = currentPage + 1;
      const cerTextPage: HTMLElement | null = document.querySelector('.current_garage-page');

      const carInGarage = await getCarsAPI();
      await removeAllCars();
      if (carInGarage) {
        if (button.dataset.id === 'prev') {
          await createCars(carInGarage, prevPage);
          if (cerTextPage) cerTextPage.innerText = `Page #${prevPage}`;
        }
        if (button.dataset.id === 'next') {
          await createCars(carInGarage, nextPage);
          if (cerTextPage) cerTextPage.innerText = `Page #${nextPage}`;
        }
      }
      onOffPrevButton();
      await onOffNextButton();
    });
  });
}
