import { driveCarAPI, startCarAPI, stopCarAPI } from '../api/api';
import { CADRES, MILLISECOND, OPTIONS_MAP } from './constants';

// переделать эту функцию, т.к. значение перезаписывается и стопается не там машинка.
let requestId: number | null = null;

async function animationCar(carId: number, endX: number, time: number): Promise<void> {
  const car: HTMLElement | null = document.querySelector(`[data-id="image-${carId}"]`);
  if (car) {
    let currentX = car.offsetLeft - 50;
    const framesCurrent = (time / MILLISECOND) * CADRES;
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

async function disEnCarButtons(button: NodeListOf<HTMLButtonElement>): Promise<void> {
  button.forEach((btn) => {
    const carBtn = btn;
    if (btn.disabled) {
      carBtn.disabled = false;
    } else {
      carBtn.disabled = true;
    }
  });
}

export async function driveCar(id: number, distance: number, buttons: NodeListOf<HTMLButtonElement>): Promise<void> {
  disEnCarButtons(buttons);
  const time = await startCarAPI(id, OPTIONS_MAP.started);
  await animationCar(id, distance, Number(time));
  const drive = await driveCarAPI(id, OPTIONS_MAP.drive);
  if (!drive && requestId) {
    cancelAnimationFrame(requestId);
  }
}

export async function stopCar(id: number, buttons: NodeListOf<HTMLButtonElement>): Promise<void> {
  if (requestId) cancelAnimationFrame(requestId);
  disEnCarButtons(buttons);
  returnCarsOnStart(id);
  await stopCarAPI(id, OPTIONS_MAP.stopped);
}
