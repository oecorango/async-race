import { startCarAPI } from '../../api/api';
import { WIDTH_GARAGE_PADDING } from '../constants';
import { animationCar } from '../drive-car';

// сделать внутри функции стрелочные сравнения
async function disEnCarButtons(button: NodeListOf<HTMLButtonElement>, time: number): Promise<number> {
  button.forEach((btn) => {
    const carBtn = btn;
    if (btn.disabled) {
      carBtn.disabled = false;
    } else {
      carBtn.disabled = true;
    }

    setTimeout(() => {
      if (btn.disabled) {
        carBtn.disabled = false;
      } else {
        carBtn.disabled = true;
      }
    }, time);
  });
  return time;
}

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

          startCarAPI(Number(carID), 'started')
            .then((time) => disEnCarButtons(buttonsStartStop, time))
            .then((time) => animationCar(Number(carID), distance, time));
        }
      });

      const storButtons: NodeListOf<HTMLButtonElement> = garage.querySelectorAll('[data-name="b"]');
      storButtons.forEach((stopButton) => {
        if (stopButton === event.target) {
          const carID = Number(stopButton.dataset.id);
          console.log(carID);
        }
      });
    });
  }
}
