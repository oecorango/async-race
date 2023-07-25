import { getCarAPI, getWinnersAPI } from '../api/api';
import { Winners } from '../types/type';
import { START_PAGE_GARAGE, WINNERS_ON_PAGE } from '../utils/constants';
import { createButton, createElement } from '../utils/utils';
import carImg from '../assets/car.gif';

const NAME_HEADER_TABLE = ['Number', 'Car', 'Name', 'Wins', 'Best time'];

async function createWinCar(elem: Winners): Promise<void> {
  const ID = elem.id;
  const car = await getCarAPI(ID);
  if (car) {
    const parent = document.querySelector('.tbody');

    const row = document.createElement('tr');

    const number = document.createElement('th');
    number.textContent = '1';

    const imageTh = document.createElement('th');
    const imageCar = document.createElement('img');
    imageCar.src = carImg;
    imageCar.style.background = car.color;
    imageTh.append(imageCar);

    const name = document.createElement('th');
    name.textContent = car.name;

    const wins = document.createElement('th');
    wins.textContent = elem.wins.toString();

    const bestTime = document.createElement('th');
    bestTime.textContent = elem.time.toString();

    row?.append(number, imageTh, name, wins, bestTime);
    parent?.append(row);
  }
}

async function createTableWinners(winner: Winners[]): Promise<void> {
  createElement('.winners', 'table', ['winners_table']);

  createElement('.winners_table', 'thead', ['thead']);
  createElement('.thead', 'tr', ['headerRow']);

  NAME_HEADER_TABLE.forEach((elem) => {
    createElement('.headerRow', 'th', [], `${elem}`, `${elem}`);
  });
  createElement('.winners_table', 'tbody', ['tbody']);
  winner.forEach(async (elem) => createWinCar(elem));
}

async function createWinnersInfo(): Promise<void> {
  const winners = await getWinnersAPI();
  if (winners) {
    const countWinners = winners.length;
    const countPage = START_PAGE_GARAGE;
    createElement('.winners', 'h2', ['cars_in-garage'], `Winners #${countWinners}`);
    createElement('.winners', 'h2', ['current_garage-page'], `Page #${countPage}`);

    await createTableWinners(winners);

    createElement('.winners', 'div', ['winners_pag_button']);
    createButton('.winners_pag_button', 'PREV', { name: 'winners_pag', id: 'winners_prev' }, 'disabled');
    if (countWinners > WINNERS_ON_PAGE) {
      createButton('.winners_pag_button', 'NEXT', { name: 'winners_pag', id: 'winners_next' });
    } else {
      createButton('.winners_pag_button', 'NEXT', { name: 'winners_pag', id: 'winners_next' }, 'disabled');
    }
  }
}

export async function createWinnersPage(): Promise<void> {
  await createWinnersInfo();
}