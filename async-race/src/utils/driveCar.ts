import {
  startAllCarAPI,
  driveCarAPI,
  startCarAPI,
  stopCarAPI,
  createWinnerAPI,
  getWinnerAPI,
  updateWinnerAPI,
  getCarAPI,
} from '../api/api';
import { Car, Speed } from '../types/type';
import { createModalForWin, removeModalForWin } from '../view/createModalWin';
import { createWinCar } from '../view/winnersPage';
import { FPS, MILLISECOND_TO_SECOND, OPTIONS_MAP, WIDTH_CAR } from './constants';
import { removeWinnerOnTable } from './utils';

let requestId: number | null = null;

function animationCar(carId: number, endX: number, time: number): void {
  const car: HTMLElement | null = document.querySelector(`[data-id="image-${carId}"]`);
  if (car) {
    let currentX = car.offsetLeft - WIDTH_CAR;
    const framesCurrent = (time / MILLISECOND_TO_SECOND) * FPS;
    const dX = (endX - car.offsetLeft) / framesCurrent;

    const tick = (): number => {
      currentX += dX;
      car.style.transform = `translateX(${currentX}px)`;
      if (currentX < endX) {
        requestId = requestAnimationFrame(tick);
      }
      return currentX;
    };
    tick();
  }
}

function returnCarsOnStart(carId: number): void {
  const car: HTMLElement | null = document.querySelector(`[data-id="image-${carId}"]`);
  if (car) car.style.transform = `translateX(${0}px)`;
}

export async function disEnCarButtons(button: NodeListOf<HTMLButtonElement>): Promise<void> {
  button.forEach((btn) => {
    const carBtn = btn;
    carBtn.disabled = !carBtn.disabled;
  });
}

export async function driveCar(id: number, distance: number, buttons: NodeListOf<HTMLButtonElement>): Promise<void> {
  disEnCarButtons(buttons);
  const time = await startCarAPI(id, OPTIONS_MAP.started);
  animationCar(id, distance, Number(time));
  const drive = await driveCarAPI(id, OPTIONS_MAP.drive);
  if (!drive && requestId) {
    cancelAnimationFrame(requestId);
  }
}

export async function stopCar(id: number, buttons: NodeListOf<HTMLButtonElement>): Promise<void> {
  if (requestId) cancelAnimationFrame(requestId);
  disEnCarButtons(buttons);
  returnCarsOnStart(id);
  stopCarAPI(id, OPTIONS_MAP.stopped);
}

// тут очень страшная функция, подумаю как ее переделать...
export async function driveAllCars(cars: Car[], dist: number): Promise<void> {
  const dataCars = await startAllCarAPI(cars, OPTIONS_MAP.started);
  if (dataCars) {
    let timeCurrentWin = 0;

    dataCars?.map(async (response) => {
      const id = response.url.split('id=')[1].replace('&', ' ').split(' ')[0];
      const data: Speed = await response.json();
      const time = data.distance / data.velocity;
      animationCar(Number(id), dist, Number(time));

      const drive = await driveCarAPI(Number(id), OPTIONS_MAP.drive);
      const car = await getCarAPI(Number(id));
      if (!drive) {
        if (requestId) cancelAnimationFrame(requestId);
      }
      if (drive && timeCurrentWin === 0 && car) {
        timeCurrentWin = time / MILLISECOND_TO_SECOND;

        const oldWinner = await getWinnerAPI(Number(id));
        if (oldWinner) {
          const oldWins = oldWinner.wins;
          const oldTime = oldWinner.time;
          if (oldTime > timeCurrentWin) {
            await updateWinnerAPI(Number(id), oldWins + 1, timeCurrentWin);
          } else {
            await updateWinnerAPI(Number(id), oldWins + 1, oldTime);
          }
          await removeWinnerOnTable(Number(id));
        }
        await createWinnerAPI(Number(id), timeCurrentWin);
        await createWinCar({ id: Number(id), wins: 1, time: timeCurrentWin });
        await createModalForWin(car?.name, timeCurrentWin);
        setTimeout(() => {
          removeModalForWin();
        }, 3000);
      }
    });
  }
}
