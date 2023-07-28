import { getCarsOnPageAPI } from '../api/api';
import { Car } from '../types/type';
import { WIDTH_GARAGE_PADDING } from '../utils/constants';
import { disEnCarButtons, driveAllCars, stopCar } from '../utils/driveCar';
import { currentPageGarage } from '../utils/utils';

async function raceCars(cars: Car[]): Promise<void> {
  const garage: HTMLElement | null = document.querySelector('.garage_cars');
  if (garage) {
    const distance = garage.offsetWidth - WIDTH_GARAGE_PADDING;
    driveAllCars(cars, distance);
    cars.forEach((car) => {
      if (car.id) {
        const buttonsStartStop: NodeListOf<HTMLButtonElement> = garage.querySelectorAll(`[data-id="${car.id}"]`);
        disEnCarButtons(buttonsStartStop);
      }
    });
  }
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
