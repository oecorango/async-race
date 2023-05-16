async function deleteField() {
  const BODY = document.querySelector('body');

  const header = document.querySelector('.header');
  const score = document.querySelector('.score');
  const field = document.querySelector('.field');
  const settings = document.querySelector('.settings');
  BODY.removeChild(header);
  BODY.removeChild(score);
  BODY.removeChild(field);
  BODY.removeChild(settings);
}

export default deleteField;
