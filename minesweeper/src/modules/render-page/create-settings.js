async function createSetings() {
  const BODY = document.querySelector('body');

  const settings = document.createElement('div');
  settings.classList.add('settings');

  const button = document.createElement('button');
  button.classList.add('button');
  button.id = 'new-game';
  button.textContent = 'New Game';
  settings.append(button);

  const select = document.createElement('select');
  select.classList.add('size');
  select.id = 'size';

  function createOption(name, size) {
    const option = document.createElement('option');
    option.value = name;
    option.textContent = size;

    select.append(option);
  }
  createOption('eazy', 'Size: 10 x 10');
  createOption('medium', 'Size: 15 x 15');
  createOption('hard', 'Size: 25 x 25');

  settings.append(button, select);
  BODY.append(settings);
}

export default createSetings;
