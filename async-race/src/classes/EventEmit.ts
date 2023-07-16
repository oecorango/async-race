import { createCar, removeCar } from '../api/api';
import { onOffButton } from '../components/on-off-buttons';

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
}
