async function rigthClick(width) {
  const FIELD = document.querySelector('.field');
  const CELLS = [...FIELD.children];

  function pointCell(row, column) {
    const index = row * width + column;
    const cell = CELLS[index];

    cell.classList.toggle('cell-off');
  }

  FIELD.addEventListener('contextmenu', (event) => {
    event.preventDefault();

    const index = CELLS.indexOf(event.target);
    const row = Math.floor(index / width);
    const column = index % width;

    pointCell(row, column);
  });
}

export default rigthClick;
