import { editCarAPI } from '../api/api';
import { Car } from '../types/type';

export async function editCarParams(idCar: number): Promise<Car | null> {
  const nameCar: HTMLInputElement | null = document.querySelector('[data-id="name-car-to-edit"]');
  const colorCar: HTMLInputElement | null = document.querySelector('[data-id="color-car-to-edit"]');
  const buttonToEditCat: HTMLButtonElement | null = document.querySelector('[data-name="edit-car"]');
  if (nameCar && colorCar && buttonToEditCat) {
    const car = await editCarAPI({
      id: idCar,
      name: nameCar.value,
      color: colorCar.value,
    });
    return car;
  }
  return null;
}
