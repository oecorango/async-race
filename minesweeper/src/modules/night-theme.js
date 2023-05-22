import sunCat from '../assets/image/sun/cat.gif';
import nightCat from '../assets/image/night/cat1.gif';

async function changeTheme() {
  const button = document.querySelector('.button__night-theme');

  const change = () => {
    const body = document.querySelector('.body');
    const field = document.querySelector('.field');
    const imgCat = document.querySelector('.cat');
    const header = document.querySelector('.header__text');

    body.classList.toggle('body_night');
    field.classList.toggle('field_night');
    header.classList.toggle('header__text_night');

    if (imgCat.src === sunCat) {
      imgCat.src = nightCat;
    } else {
      imgCat.src = sunCat;
    }
  };

  button.addEventListener('click', () => change());
}

export default changeTheme;
