async function rigthClick(width) {
  const FIELD = document.querySelector('.field');
  const CELLS = [...FIELD.children];

  function pointCell(row, column) {
    const index = row * width + column;
    const cell = CELLS[index];

    if (!cell.classList.contains('cell-on')) {
      cell.classList.toggle('cell-off');
    }
  }

  function pointCellQuestion(row, column) {
    const index = row * width + column;
    const cell = CELLS[index];

    if (!cell.classList.contains('cell-on')) {
      cell.classList.remove('cell-off');
      cell.classList.add('cell-question');
    }
  }

  function removePointCell(row, column) {
    const index = row * width + column;
    const cell = CELLS[index];

    if (!cell.classList.contains('cell-on')) {
      cell.classList.remove('cell-off');
      cell.classList.remove('cell-question');
    }
  }

  FIELD.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    const index = CELLS.indexOf(event.target);
    const row = Math.floor(index / width);
    const column = index % width;
    const isCell = event.target.classList.contains('cell');
    if (isCell && !event.target.classList.contains('cell-off')
        && !event.target.classList.contains('cell-question')) {
      pointCell(row, column);
    } else if (isCell && event.target.classList.contains('cell-off')) {
      pointCellQuestion(row, column);
    } else if (isCell) {
      removePointCell(row, column);
    }
  });
}

export default rigthClick;
