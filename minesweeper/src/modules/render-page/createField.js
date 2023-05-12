import numberForCell from './init-mines';

const BODY = document.querySelector('body');

async function createField(width, heigth, mine, diff) {
  const mult = width * heigth;
  const field = document.createElement('div');
  field.classList.add('field');
  if (mult === 81) {
    field.classList.add('field-eazy');
  } if (mult === 144) {
    field.classList.add('field-medium');
  } if (mult === 225) {
    field.classList.add('field-hard');
  }

  const arr = await numberForCell(width, heigth, mine, diff);
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr[i].length; j += 1) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.classList.add('cell-on');

      const item = document.createElement('div');
      item.classList.add('item');
      item.classList.add(`item-${arr[i][j]}`);
      item.classList.add('item-on');
      item.innerText = `${arr[i][j]}`;

      cell.append(item);
      field.append(cell);
    }
  }
  BODY.append(field);
}

export default createField;
