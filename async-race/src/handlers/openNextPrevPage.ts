import { getCarsAPI } from '../api/api';
import { currentPageGarage, onOffNextButton, onOffPrevButton, removeAllCarsElements } from '../utils/utils';
import { createCars } from './createCars';

export function clickPrevNextBtn(): void {
  const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('[data-name="pagination"]');
  buttons.forEach((button) => {
    button.addEventListener('click', async () => {
      const currentPage = currentPageGarage();
      const currentNumberPage: HTMLElement | null = document.querySelector('.current_garage-page');

      const carInGarage = await getCarsAPI();
      await removeAllCarsElements();
      if (carInGarage) {
        const newPage = button.dataset.id === 'prev' ? currentPage - 1 : currentPage + 1;
        console.log(newPage);
        await createCars(carInGarage, newPage);
        if (currentNumberPage) currentNumberPage.innerText = `Page #${newPage}`;
      }

      onOffPrevButton();
      onOffNextButton();
    });
  });
}
