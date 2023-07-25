export async function createModalForWin(name: string, time: number): Promise<void> {
  const body = document.querySelector('body');

  const modalWind = document.createElement('h2');
  modalWind.classList.add('wins');
  modalWind.innerText = `Medusa ${name} wins with time ${time.toFixed(2)}`;
  body?.append(modalWind);
}

export function removeModalForWin(): void {
  const modalWind = document.querySelector('.wins');
  modalWind?.remove();
}
