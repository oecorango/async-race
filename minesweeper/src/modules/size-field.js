let widthField = 10;
let heigthField = 10;
let mineField = 10;
let selectField = 'eazy';

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
      mineField = 10;
    }
    if (this.value === 'medium') {
      selectField = 'medium';
      widthField = 15;
      heigthField = 15;
      mineField = 15;
    }
    if (this.value === 'hard') {
      selectField = 'hard';
      widthField = 25;
      heigthField = 25;
      mineField = 25;
    }

    option.value = selectField;
  }

  option.addEventListener('change', chageSize);
}

export {
  widthField, heigthField, mineField, onChange,
};
