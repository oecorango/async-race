import { showTime } from './render-page/show-time';
import { isOnSound } from './sound-on';

async function rigthClick(width, mines) {
  const FIELD = document.querySelector('.field');
  const CELLS = [...FIELD.children];
  const countFlags = document.querySelector('.count-flags');

  const audio = new Audio();
  async function playAudio() {
    audio.src = './assets/flag.mp3';
    audio.play();
  }

  function pointCell(row, column) {
    const index = row * width + column;
    const cell = CELLS[index];

    if (!cell.classList.contains('cell-on')) {
      cell.classList.toggle('cell-off');
    }
  }

  function pointCellQuestion(row, column) {
    const index = row * width + column;
    const cell = CELLS[index];

    if (!cell.classList.contains('cell-on')) {
      cell.classList.remove('cell-off');
      cell.classList.add('cell-question');
    }
  }

  function removePointCell(row, column) {
    const index = row * width + column;
    const cell = CELLS[index];

    if (!cell.classList.contains('cell-on')) {
      cell.classList.remove('cell-off');
      cell.classList.remove('cell-question');
    }
  }

  let balanceFlags = mines;

  FIELD.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    const index = CELLS.indexOf(event.target);
    const row = Math.floor(index / width);
    const column = index % width;
    const isCell = event.target.classList.contains('cell');

    if (isCell) {
      if (!event.target.classList.contains('cell-off')
      && !event.target.classList.contains('cell-question')) {
        if (balanceFlags > 0) {
          balanceFlags -= 1;
          countFlags.textContent = `Flags: ${balanceFlags}`;
          if (isOnSound()) {
            playAudio();
          }
          pointCell(row, column);

          const time = document.querySelector('.time');
          if (time.textContent === 'Time: 0s') {
            showTime();
          }
        }
      } else if (event.target.classList.contains('cell-off')) {
        balanceFlags += 1;
        countFlags.textContent = `Flags: ${balanceFlags}`;

        pointCellQuestion(row, column);
      } else {
        removePointCell(row, column);
      }
    }
  });
}

export default rigthClick;
