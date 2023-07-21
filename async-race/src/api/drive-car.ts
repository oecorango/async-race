import { animationCar } from '../utils/drive-car';
import { driveCarAPI, startCarAPI } from './api';

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
    const time = await startCarAPI(id, 'started');
    if (time) {
      disEnCarButtons(buttons);
      animationCar(id, distance, time);
    }

    const drive = await driveCarAPI(id, 'drive');
  } catch (err) {
    console.warn(err);
  }
}
