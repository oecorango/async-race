import { driveCar, stopCar } from '../driveCar';
import { WIDTH_GARAGE_PADDING } from '../constants';

export function clickStartStopCar(): void {
  const garage: HTMLElement | null = document.querySelector('.garage_cars');
  if (garage) {
    garage.addEventListener('click', (event) => {
      const startStopButtons: NodeListOf<HTMLButtonElement> = garage.querySelectorAll(
        '[data-name="a"], [data-name="b"]',
      );
      startStopButtons.forEach((startStopButton) => {
        if (startStopButton === event.target && startStopButton.dataset.name === 'a') {
          const carID = startStopButton.dataset.id;
          const buttonsStartStop: NodeListOf<HTMLButtonElement> = garage.querySelectorAll(`[data-id="${carID}"]`);
          const distance = garage.offsetWidth - WIDTH_GARAGE_PADDING;

          driveCar(Number(carID), distance, buttonsStartStop);
        }
      });

      const storButtons: NodeListOf<HTMLButtonElement> = garage.querySelectorAll('[data-name="b"]');
      storButtons.forEach((stopButton) => {
        if (stopButton === event.target) {
          const carID = stopButton.dataset.id;
          const buttonsStartStop: NodeListOf<HTMLButtonElement> = garage.querySelectorAll(`[data-id="${carID}"]`);

          stopCar(Number(carID), buttonsStartStop);
        }
      });
    });
  }
}
