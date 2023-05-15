const BODY = document.querySelector('body');

async function createTimer() {
  const hedder = document.createElement('h1');
  hedder.innerText = 'Minesweeper';

  const score = document.createElement('div');
  score.classList.add('score');

  const timer = document.createElement('div');
  timer.classList.add('time');
  timer.innerText = '000';

  const mine = document.createElement('div');
  mine.classList.add('sum-mine');
  mine.innerText = '15';

  score.append(timer, mine);
  BODY.append(hedder, score);
}

export default createTimer;
