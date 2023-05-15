async function initMinePosition(width, heigth, mineCount) {
  const cells = width * heigth;
  const mine = [...Array(cells).keys()]
    .sort(() => Math.random() - 0.5)
    .slice(0, mineCount);
  return mine;
}

export default initMinePosition;
