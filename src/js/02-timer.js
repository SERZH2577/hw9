import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
import convertMs from './convertMs';

let intervalID = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  dateFormat: 'Y-m-d, H:i',
  minuteIncrement: 1,
  onClose() {
    if (
      inputEl.value === '' ||
      new Date(inputEl.value).getTime() <= Date.now()
    ) {
      startBtnEl.setAttribute('disabled', '');
      startBtnEl.classList.add('btn-disabled');

      Notiflix.Notify.failure('Введите дату и время больше текущей');
    } else {
      startBtnEl.removeAttribute('disabled');
      startBtnEl.classList.remove('btn-disabled');

      Notiflix.Notify.success('Дата и время заданы правильно');
    }
  },
};

const inputEl = document.querySelector('#datetime-picker');
const startBtnEl = document.querySelector('[data-start]');
const daysRef = document.querySelector('[data-days]');
const hoursRef = document.querySelector('[data-hours]');
const minutesRef = document.querySelector('[data-minutes]');
const secondsRef = document.querySelector('[data-seconds]');

startBtnEl.addEventListener('click', onStartingCountdownTimer);
startBtnEl.setAttribute('disabled', '');

flatpickr(inputEl, options);

function onStartingCountdownTimer() {
  startBtnEl.setAttribute('disabled', '');
  startBtnEl.classList.add('btn-disabled');
  inputEl.setAttribute('disabled', '');

  intervalID = setInterval(() => {
    const inputValue = new Date(inputEl.value).getTime();
    const timeDifference = inputValue - Date.now();
    const timerTime = convertMs(timeDifference);

    if (timeDifference < 1000) {
      clearInterval(intervalID);
      secondsRef.innerHTML = timerTime.seconds;
      inputEl.removeAttribute('disabled');
    } else {
      convertMs(timeDifference);

      daysRef.innerHTML = timerTime.days;
      hoursRef.innerHTML = timerTime.hours;
      minutesRef.innerHTML = timerTime.minutes;
      secondsRef.innerHTML = timerTime.seconds;
    }
  }, 1000);
}
