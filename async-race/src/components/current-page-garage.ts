export function currentPageGarage(): number {
  const currentPage: HTMLElement | null = document.querySelector('.current_garage-page');
  const numberOfPage = currentPage?.innerText.split('#')[1];

  return Number(numberOfPage);
}
