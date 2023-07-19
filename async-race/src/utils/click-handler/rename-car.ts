import { editCarParams } from '../../api/edit-car';
import { disabledEditCarElement, editCar, enabledEditCarElement } from '../utils';

let carID = 1;

function edit(): void {
  editCarParams(Number(carID)).then((car) => editCar(car));
  disabledEditCarElement();
}

function clickEditCarBtn(): void {
  const editButton = document.querySelector('[data-name="edit-car"]');
  editButton?.addEventListener('click', edit, { once: true });
}

export function clickSelectCarBtn(): void {
  const garage = document.querySelector('.garage_cars');
  if (garage) {
    garage.addEventListener('click', (event) => {
      const editButtons: NodeListOf<HTMLElement> = garage.querySelectorAll('[data-name="select"]');
      editButtons.forEach((button) => {
        if (button === event.target) {
          enabledEditCarElement();
          carID = Number(button.dataset.id);
          clickEditCarBtn();
        }
      });
    });
  }
}
