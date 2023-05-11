const BODY = document.querySelector('body');
const field = document.createElement('div');

field.classList.add('field');

async function createField() {
  for (let i = 0; i < 100; i += 1) {
    const sell = document.createElement('div');
    sell.classList.add('cell');

    const item = document.createElement('div');
    item.classList.add('item');

    sell.append(item);
    field.append(sell);
  }
  BODY.append(field);
}

export default createField;
