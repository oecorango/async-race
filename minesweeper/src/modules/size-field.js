let widthField = 10;
let heigthField = 10;
let mineField = 10;
let selectField = 'eazy';

async function resizeMines() {
  const resizetMines = document.getElementById('resize-mines');
  const resultMines = document.querySelector('.all-mines');

  resizetMines.value = mineField;
  resultMines.textContent = resizetMines.value;

  function chageSize() {
    mineField = this.value;
    resultMines.textContent = this.value;
  }

  resizetMines.addEventListener('change', chageSize);
}

async function onChange() {
  const option = document.getElementById('size');
  option.children[0].removeAttribute('selected', '');
  option.children[1].removeAttribute('selected', '');
  option.children[2].removeAttribute('selected', '');
  if (selectField === 'eazy') {
    option.children[0].setAttribute('selected', '');
  }
  if (selectField === 'medium') {
    option.children[1].setAttribute('selected', '');
  }
  if (selectField === 'hard') {
    option.children[2].setAttribute('selected', '');
  }

  function chageSize() {
    if (this.value === 'eazy') {
      selectField = 'eazy';
      widthField = 10;
      heigthField = 10;
    }
    if (this.value === 'medium') {
      selectField = 'medium';
      widthField = 15;
      heigthField = 15;
    }
    if (this.value === 'hard') {
      selectField = 'hard';
      widthField = 25;
      heigthField = 25;
    }

    option.value = selectField;
  }

  option.addEventListener('change', chageSize);
}

export {
  widthField, heigthField, mineField, onChange, resizeMines,
};
