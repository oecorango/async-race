export function removeCars(): void {
  const carsInGarage = document.querySelector('.garage_cars');
  while (carsInGarage?.firstChild) {
    carsInGarage.removeChild(carsInGarage.firstChild);
  }
}
