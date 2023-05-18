async function createSetings() {
  const BODY = document.querySelector('body');

  const settings = document.createElement('div');
  settings.classList.add('settings');

  function createButton(name) {
    const button = document.createElement('button');
    button.classList.add('button');
    button.id = name;
    button.textContent = name.toUpperCase();
    settings.append(button);
  }

  createButton('new-game');
  createButton('settings');
  BODY.append(settings);
}

export default createSetings;
