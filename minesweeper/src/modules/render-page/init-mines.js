let itemsField = [];

function plusOne(width, heigth, w, h) {
  if (w >= 0 && w <= width - 1 && h >= 0 && h <= heigth - 1) {
    if (itemsField[w][h] !== 10) {
      itemsField[w][h] += 1;
    }
  }
}

async function initMineField(width, heigth, mine, mult) {
  let count = 0;
  for (let i = 0; i < width; i += 1) {
    const line = [];

    for (let j = 0; j < heigth; j += 1) {
      if (Math.random() < mult && count <= mine - 1) {
        line.push(10);
        count += 1;
      } else {
        line.push(0);
      }
    }
    itemsField.push(line);
  }
  if (count !== mine) {
    itemsField = [];
    initMineField(width, heigth, mine, mult);
  }
}

async function countNumber(width, heigth) {
  for (let i = 0; i < width; i += 1) {
    for (let j = 0; j < heigth; j += 1) {
      if (itemsField[i][j] === 10) {
        plusOne(width, heigth, i, j - 1);
        plusOne(width, heigth, i, j + 1);
        plusOne(width, heigth, i - 1, j);
        plusOne(width, heigth, i + 1, j);
        plusOne(width, heigth, i - 1, j - 1);
        plusOne(width, heigth, i - 1, j + 1);
        plusOne(width, heigth, i + 1, j - 1);
        plusOne(width, heigth, i + 1, j + 1);
      }
    }
  }
}

async function numberForCell(width, heigth, mine, diff) {
  await initMineField(width, heigth, mine, diff);
  await countNumber(width, heigth);
  return itemsField;
}

export default numberForCell;
