import { removeCarAPI, removeWinnerAPI } from '../api/api';
import { changeNumberCarsInGarage, removeOneCarElements } from '../utils/utils';

export function clickRemoveCarBtn(): void {
  const garage = document.querySelector('.garage_cars');
  if (garage) {
    garage.addEventListener('click', (event) => {
      const removeButtons: NodeListOf<HTMLElement> = garage.querySelectorAll('[data-name="remove"]');
      removeButtons.forEach((button) => {
        if (button === event.target) {
          const idCar = button.dataset.id;
          if (idCar) {
            removeCarAPI(Number(idCar));
            removeWinnerAPI(Number(idCar));
            removeOneCarElements(Number(idCar));
            changeNumberCarsInGarage('remove');
          }
        }
      });
    });
  }
}
