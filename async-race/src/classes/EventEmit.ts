import { onOffButton } from '../components/on-off-buttons';

export class EventEmitter {
  public static clickGeneralBtn(btn: HTMLButtonElement): void {
    btn.addEventListener('click', () => {
      const section = document.querySelectorAll('section');
      section.forEach((e) => e.classList.toggle('hidden'));

      const garage = document.getElementById('garage');
      const winners = document.getElementById('winners');
      if (garage) onOffButton(<HTMLButtonElement>garage);
      if (winners) onOffButton(<HTMLButtonElement>winners);
    });
  }
}
