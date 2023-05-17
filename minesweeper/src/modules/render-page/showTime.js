let timeOfGame = 0;

async function showTime() {
  const time = document.querySelector('.time');
  timeOfGame += 1;
  time.textContent = timeOfGame;
  // clearTimeout(timeOfGame === 5);
  setTimeout(() => {
    showTime();
  }, 1000);
}

export default showTime;
