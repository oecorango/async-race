import { getCarsOnPageAPI } from '../../api/api';
import { Car } from '../../types/type';
import { WIDTH_GARAGE_PADDING } from '../constants';
import { driveCar, stopCar } from '../drive-car';
import { currentPageGarage } from '../utils';

async function raceCars(cars: Car[]): Promise<void> {
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

async function stopRace(cars: Car[]): Promise<void> {
  const garage: HTMLElement | null = document.querySelector('.garage_cars');
  if (garage)
    cars.forEach((car) => {
      if (car.id) {
        const buttonsStartStop: NodeListOf<HTMLButtonElement> = garage.querySelectorAll(`[data-id="${car.id}"]`);
        stopCar(car.id, buttonsStartStop);
      }
    });
}

export async function startStopRace(): Promise<void> {
  const raceButton: HTMLElement | null = document.querySelector('[data-name="race"]');
  const stopRaceButton: HTMLElement | null = document.querySelector('[data-name="reset"]');

  if (raceButton)
    raceButton.addEventListener('click', async () => {
      const currentPage = currentPageGarage();
      const carsOnCurrentPage = await getCarsOnPageAPI(currentPage);
      if (carsOnCurrentPage) raceCars(carsOnCurrentPage);
    });

  if (stopRaceButton) {
    stopRaceButton.addEventListener('click', async () => {
      const currentPage = currentPageGarage();
      const carsOnCurrentPage = await getCarsOnPageAPI(currentPage);
      if (carsOnCurrentPage) stopRace(carsOnCurrentPage);
    });
  }
}
