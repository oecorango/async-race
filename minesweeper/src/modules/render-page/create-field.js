import initMinePosition from './init-mines';
import imgMine from '../../assets/image/mine.png';

const BODY = document.querySelector('body');

async function createField(width, heigth, mine) {
  BODY.classList.add('body');
  const main = document.querySelector('.main');
  const cells = width * heigth;
  const field = document.createElement('div');
  if (BODY.classList.contains('body_night')) {
    field.classList.add('field');
    field.classList.add('field_night');
  } else {
    field.classList.add('field');
  }
  if (cells === 100) {
    field.classList.add('field-eazy');
  } if (cells === 225) {
    field.classList.add('field-medium');
  } if (cells === 625) {
    field.classList.add('field-hard');
  }

  const indexMine = await initMinePosition(width, heigth, mine);

  for (let i = 0; i < cells; i += 1) {
    const cell = document.createElement('div');
    cell.classList.add('cell');

    const item = document.createElement('div');
    item.classList.add('item');

    if (indexMine.includes(i)) {
      const image = new Image();
      image.src = imgMine;
      image.classList.add('item-mine__image');

      item.classList.add('item-mine');
      item.append(image);
    }

    cell.append(item);
    field.append(cell);
  }

  main.append(field);
}

export default createField;
