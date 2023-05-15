import initMinePosition from './init-mines';
import imgMine from '../../assets/image/bomb2.png';

const BODY = document.querySelector('body');

async function createField(width, heigth, mine) {
  const cells = width * heigth;
  const field = document.createElement('div');
  field.classList.add('field');
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

      item.classList.add('item-mine');
      item.append(image);
    }

    cell.append(item);
    field.append(cell);
  }

  BODY.append(field);
}

export default createField;
