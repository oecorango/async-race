import stopGame from './render-page/stop-Game';

async function leftClick(width, heigth) {
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

  function openCell(row, column) {
    if (!cellInField(row, column)) return;

    const index = row * width + column;
    const cell = CELLS[index];
    const itemCell = items[index];

    if (cell.classList.contains('cell-on')
    && itemCell.classList.contains('item-on')) return;

    cell.classList.add('cell-on');
    itemCell.classList.add('item-on');

    if (isMine(row, column)) {
      items.forEach((element, i) => {
        FIELD.removeEventListener('click', FIELD.addEventListener);

        if (!element.classList.contains('item-on')) {
          element.parentNode.classList.add('cell-on');
        }

        setTimeout(() => {
          element.classList.add('item-on');
          if (i === CELLS.length) {
            stopGame();
          }
        // eslint-disable-next-line no-param-reassign
        }, 10 * (i += 1));
      });

      return;
    }

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
