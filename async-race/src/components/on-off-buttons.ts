export function onOffButton(btn: HTMLButtonElement): void {
  if (btn.hasAttribute('disabled')) {
    btn.removeAttribute('disabled');
  } else btn.setAttribute('disabled', 'disabled');
}
