import getRandomHexColor from './RandomHexColor.js';

const startColorSwitcherBtn = document.querySelector('[data-start]');
const stopColorSwitcherBtn = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body');

startColorSwitcherBtn.addEventListener('click', onLaunchesColorChange);
stopColorSwitcherBtn.addEventListener('click', onStopsColorChange);

let intervalID = null;

function onLaunchesColorChange() {
  bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
  startColorSwitcherBtn.setAttribute('disabled', '');
  startColorSwitcherBtn.classList.add('btn-disabled');
  stopColorSwitcherBtn.removeAttribute('disabled');
  stopColorSwitcherBtn.classList.remove('btn-disabled');

  intervalID = setInterval(() => {
    bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
  }, 1000);
}

function onStopsColorChange() {
  clearInterval(intervalID);
  startColorSwitcherBtn.removeAttribute('disabled');
  startColorSwitcherBtn.classList.remove('btn-disabled');
  stopColorSwitcherBtn.setAttribute('disabled', '');
  stopColorSwitcherBtn.classList.add('btn-disabled');
}
