import { createCar, getCars, removeCar } from '../api/api';
import { currentPageGarage } from '../components/current-page-garage';
import { onOffButton } from '../components/on-off-buttons';
import { removeCars } from '../components/remove-cars';
import { createCars } from '../utils/create-cars';

const main = async (): Promise<void> => {
  const creat = await createCar({
    name: 'Moskvich',
    color: '#555555',
  });
};

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
      await main();
    });
  }

  public static clickRemoveCarBtn(btn: HTMLButtonElement): void {
    btn.addEventListener('click', async () => {
      // await removeCar();
    });
  }

  public static clickPrevNextBtn(btn: HTMLButtonElement): void {
    btn.addEventListener('click', async () => {
      const currentPage = currentPageGarage();
      const allPages = Math.round((await getCars()).length / 7);

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
        removeCars();
        await createCars();
      }
      if (btn.id === 'next' && nextPrevPage <= allPages) {
        const prevBtn = <HTMLButtonElement>document.getElementById('prev');
        prevBtn.disabled = false;

        if (nextPrevPage === allPages) {
          const nextBtn = <HTMLButtonElement>document.getElementById('next');
          nextBtn.disabled = true;
        }

        nextPrevPage += 1;
        const numberPage: HTMLElement | null = document.querySelector('.current_garage-page');
        if (numberPage) numberPage.innerText = `Page #${nextPrevPage}`;
        removeCars();
        await createCars();
      }
    });
  }
}
