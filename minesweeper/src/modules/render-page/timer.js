function timeOfGame() {
  let time = 0;
  setTimeout(() => {
    time += 1;
  }, 1000);
  return time;
}

export default timeOfGame;
