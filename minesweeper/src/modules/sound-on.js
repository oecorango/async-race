let onSound = true;

async function playSound() {
  const btn = document.querySelector('.button__sound');

  const change = () => {
    btn.classList.toggle('button__sound_off');
    if (onSound === true) {
      onSound = false;
    } else onSound = true;
  };

  btn.addEventListener('click', () => change());
}

export function isOnSound() {
  return onSound;
}

export default playSound;
