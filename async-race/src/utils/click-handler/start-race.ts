import { getCarsOnPageAPI } from '../../api/api';
import { Car } from '../../types/type';
import { WIDTH_GARAGE_PADDING } from '../constants';
import { driveCar } from '../drive-car';
import { currentPageGarage } from '../utils';

async function raceCar(cars: Car[]): Promise<void> {
  const garage: HTMLElement | null = document.querySelector('.garage_cars');
  if (garage)
    cars.forEach((car) => {
      if (car.id) {
        const buttonsStartStop: NodeListOf<HTMLButtonElement> = garage.querySelectorAll(`[data-id="${car.id}"]`);
        const distance = garage.offsetWidth - WIDTH_GARAGE_PADDING;
        driveCar(car.id, distance, buttonsStartStop);
      }
    });
}

export async function startRace(): Promise<void> {
  const raceButton: HTMLElement | null = document.querySelector('[data-name="race"]');

  if (raceButton)
    raceButton.addEventListener('click', async () => {
      const currentPage = currentPageGarage();
      const carsOnCurrentPage = await getCarsOnPageAPI(currentPage);
      if (carsOnCurrentPage) raceCar(carsOnCurrentPage);
    });
}
