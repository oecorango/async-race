const BODY = document.querySelector('body');

const settings = document.createElement('div');
settings.classList.add('settings');

export async function createButton(name) {
  const button = document.createElement('button');
  button.classList.add('button');
  button.id = name;
  button.innerText = name;

  settings.append(button);
}

function createSetings() {
  createButton('new-game');
  createButton('sounds');
  createButton('difficulty');
  BODY.append(settings);
}

export default createSetings;
