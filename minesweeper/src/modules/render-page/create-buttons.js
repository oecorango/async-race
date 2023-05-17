const BODY = document.querySelector('body');

const settings = document.createElement('div');
settings.classList.add('settings');

function createButton(name) {
  const button = document.createElement('button');
  button.classList.add('button');
  button.id = name;
  button.innerText = name;

  settings.append(button);
}

async function createSetings() {
  createButton('new-game');
  createButton('sounds');
  createButton('difficulty');
  BODY.append(settings);
}

export default createSetings;
