import { Speed } from '../types/type';
import { CADRES, MILLISECOND } from './constants';

export async function animationCar(carId: number, endX: number, time: number): Promise<void> {
  const car: HTMLElement | null = document.querySelector(`[data-id="image-${carId}"]`);
  if (car) {
    let currentX = car.offsetLeft;
    const framesCurrent = (time / MILLISECOND) * CADRES;
    const dX = (endX - car.offsetLeft) / framesCurrent;

    const tick = (): number => {
      currentX += dX;
      car.style.transform = `translateX(${currentX}px)`;

      if (currentX < endX) {
        requestAnimationFrame(tick);
      }
      return currentX;
    };

    tick();
  }
}
