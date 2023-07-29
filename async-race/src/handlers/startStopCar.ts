import { driveCar, stopCar } from '../utils/driveCar';
import { WIDTH_GARAGE_PADDING } from '../utils/constants';

export function clickStartStopCar(): void {
  const garage: HTMLElement | null = document.querySelector('.garage_cars');
  if (garage) {
    garage.addEventListener('click', (event) => {
      const startStopButtons: NodeListOf<HTMLButtonElement> = garage.querySelectorAll(
        '[data-name="start-car"], [data-name="stop-car"]',
      );
      startStopButtons.forEach((startStopButton) => {
        if (startStopButton === event.target && startStopButton.dataset.name === 'start-car') {
          const carID = startStopButton.dataset.id;
          if (carID) {
            const buttonsStartStop: NodeListOf<HTMLButtonElement> = garage.querySelectorAll(`[data-id="${carID}"]`);
            const distance = garage.offsetWidth - WIDTH_GARAGE_PADDING;

            driveCar(Number(carID), distance, buttonsStartStop);
          }
        }
      });

      const storButtons: NodeListOf<HTMLButtonElement> = garage.querySelectorAll('[data-name="stop-car"]');
      storButtons.forEach((stopButton) => {
        if (stopButton === event.target) {
          const carID = stopButton.dataset.id;
          if (carID) {
            const buttonsStartStop: NodeListOf<HTMLButtonElement> = garage.querySelectorAll(`[data-id="${carID}"]`);

            stopCar(Number(carID), buttonsStartStop);
          }
        }
      });
    });
  }
}
