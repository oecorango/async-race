import { isOnSound } from '../sound-on';

async function createSetings(mine) {
  const main = document.querySelector('main');

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

  const input = document.createElement('input');
  input.id = 'resize-mines';
  input.type = 'range';
  input.value = mine;
  input.setAttribute('min', '10');
  input.setAttribute('max', '99');

  const nightTheme = document.createElement('button');
  nightTheme.classList.add('button');
  nightTheme.classList.add('button__night-theme');

  const sound = document.createElement('button');
  sound.classList.add('button');
  sound.classList.add('button__sound');
  if (!isOnSound()) {
    sound.classList.add('button__sound_off');
  }

  const count = document.createElement('p');
  count.classList.add('all-mines');
  count.textContent = input.value;

  settings.append(button, select, input, count, nightTheme, sound);
  main.append(settings);
}

export default createSetings;
