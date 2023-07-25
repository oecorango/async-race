import { driveAllCarAPI, driveCarAPI, startCarAPI, stopCarAPI } from '../api/api';
import { Car, OptionsStatus, Speed } from '../types/type';
import { CADRES, MILLISECOND, OPTIONS_MAP, PATH_MAP, URL, WIGHT_CAR } from './constants';

// переделать эту функцию, т.к. значение перезаписывается и стопается не та машинка.
let requestId: number | null = null;

function animationCar(carId: number, endX: number, time: number): void {
  const car: HTMLElement | null = document.querySelector(`[data-id="image-${carId}"]`);
  if (car) {
    let currentX = car.offsetLeft - WIGHT_CAR;
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

export async function disEnCarButtons(button: NodeListOf<HTMLButtonElement>): Promise<void> {
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

// export async function createWinCarAPI(cars: Car[], param: OptionsStatus): Promise<void> {
//   cars.map(async (car) => {
//     fetch(`${URL}${PATH_MAP.engine}?id=${car.id}&status=${param}`, {
//       method: 'PATCH',
//       body: JSON.stringify(param),
//     })
//       .then((data) => {
//         if (data.status === 500) {
//           if (requestId) cancelAnimationFrame(requestId);
//           const err = new Error('Oops!');
//         }
//       })
//       .catch((err) => console.warn(err));
//   });
// }

export async function driveAllCars(cars: Car[], dist: number): Promise<void> {
  const dataCars = await driveAllCarAPI(cars, OPTIONS_MAP.started);
  if (dataCars) {
    dataCars?.map(async (response) => {
      const id = response.url.split('id=')[1].replace('&', ' ').split(' ')[0];
      const data: Speed = await response.json();
      const time = data.distance / data.velocity;
      animationCar(Number(id), dist, Number(time));
      const drive = await driveCarAPI(Number(id), OPTIONS_MAP.drive);
      if (!drive && requestId) {
        cancelAnimationFrame(requestId);
      }
    });
  }
  // await createWinCarAPI(cars, OPTIONS_MAP.drive);
}