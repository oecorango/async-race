import { driveCarAPI, startCarAPI, stopCarAPI } from '../api/api';
import { CADRES, MILLISECOND, OPTIONS_MAP } from './constants';

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

function returnCarsOnStart(carId: number) {
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
  try {
    disEnCarButtons(buttons);
    const time = await startCarAPI(id, OPTIONS_MAP.started);
    if (time) {
      animationCar(id, distance, time);
    }

    const drive = await driveCarAPI(id, OPTIONS_MAP.drive);
    if (!drive && requestId) {
      cancelAnimationFrame(requestId);
    }
  } catch (err) {
    console.warn(err);
  }
}

export async function stopCar(id: number, buttons: NodeListOf<HTMLButtonElement>): Promise<void> {
  try {
    if (requestId) cancelAnimationFrame(requestId);
    disEnCarButtons(buttons);
    returnCarsOnStart(id);
    await stopCarAPI(id, OPTIONS_MAP.stopped);
  } catch (err) {
    console.warn(err);
  }
}