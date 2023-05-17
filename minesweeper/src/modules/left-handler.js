import stopGame from './render-page/stop-Game';
import imgMine from '../assets/image/bomb2.png';

async function leftClick(width, heigth, mine) {
  const FIELD = document.querySelector('.field');
  const MINES = document.querySelectorAll('.item-mine');
  const ITEM_CELL = document.querySelectorAll('.item');
  const CELLS = [...FIELD.children];

  const items = [];
  ITEM_CELL.forEach((elem) => {
    items.push(elem);
  });

  const mines = [];
  MINES.forEach((elem) => {
    const index = items.indexOf(elem);
    mines.push(index);
  });

  function cellInField(row, column) {
    return (row >= 0 && row < heigth && column >= 0 && column < heigth);
  }

  function isMine(row, column) {
    if (!cellInField(row, column)) return false;
    const index = row * width + column;
    return mines.includes(index);
  }

  function getNumberCell(row, column) {
    let count = 0;
    for (let x = -1; x <= 1; x += 1) {
      for (let y = -1; y <= 1; y += 1) {
        if (isMine(row + y, column + x)) {
          count += 1;
        }
      }
    }
    return count;
  }

  let count = (heigth * width) - mine;

  async function openCell(row, column) {
    if (!cellInField(row, column)) return;
    const index = row * width + column;
    const cell = CELLS[index];
    const itemCell = items[index];

    if (cell.classList.contains('cell-on') && itemCell.classList.contains('item-on')) return;

    if (count === ((heigth * width) - mine) && isMine(row, column)) {
      cell.innerHTML = '<div class="item"></div>';

      let newNumber = 0;
      while (mines.includes(newNumber)) {
        newNumber += 1;
      }

      mines.push(newNumber);
      mines.splice(mines.indexOf(index), 1);

      CELLS[newNumber].removeChild(items[newNumber]);
      const newMine = document.createElement('div');
      newMine.classList.add('item');
      newMine.classList.add('item-mine');
      const image = new Image();
      image.src = imgMine;
      newMine.append(image);
      CELLS[newNumber].append(newMine);

      items.splice(0);
      document.querySelectorAll('.item').forEach((elem) => {
        items.push(elem);
      });
    }

    cell.classList.add('cell-on');
    itemCell.classList.add('item-on');

    if (isMine(row, column)) {
      FIELD.childNodes.forEach((element, i) => {
        element.classList.add('cell-on');
        setTimeout(() => {
          if (element.firstChild.hasChildNodes()) {
            element.firstChild.classList.add('item-on');
          }
          if (i === CELLS.length) {
            stopGame();
          }
        // eslint-disable-next-line no-param-reassign
        }, 10 * (i += 1));
      });

      return;
    }

    count -= 1;

    const numberCell = getNumberCell(row, column);

    if (numberCell !== 0 && !isMine(row, column)) {
      cell.classList.add(`item-${numberCell}`);
      cell.innerText = numberCell;
      return;
    }

    if (numberCell === 0) {
      for (let x = -1; x <= 1; x += 1) {
        for (let y = -1; y <= 1; y += 1) {
          openCell(row + y, column + x);
        }
      }
    }
  }

  FIELD.addEventListener('click', (event) => {
    if (event.target.className !== 'cell') {
      return;
    }

    const index = CELLS.indexOf(event.target);
    const row = Math.floor(index / width);
    const column = index % width;

    openCell(row, column);
  });
}

export default leftClick;
