import { getCarsAPI } from '../api/api';
import { currentPageGarage, onOffNextButton, onOffPrevButton, removeAllCars } from '../utils/utils';
import { createCars } from './createCars';

export function clickPrevNextBtn(): void {
  const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('[data-name="pagination"]');
  buttons.forEach((button) => {
    button.addEventListener('click', async () => {
      const currentPage = currentPageGarage();
      const currentNumberPage: HTMLElement | null = document.querySelector('.current_garage-page');

      const carInGarage = await getCarsAPI();
      await removeAllCars();
      if (carInGarage) {
        if (button.dataset.id === 'prev') {
          const newPage = button.dataset.id === 'prev' ? currentPage - 1 : currentPage + 1;
          await createCars(carInGarage, newPage);
          if (currentNumberPage) currentNumberPage.innerText = `Page #${newPage}`;
        }
      }
      onOffPrevButton();
      await onOffNextButton();
    });
  });
}
