import Notiflix from 'notiflix';

const formRef = document.querySelector('.form');
const inputDelayRef = document.querySelector('[name="delay"]');
const inputStepRef = document.querySelector('[name="step"]');
const inputAmountRef = document.querySelector('[name="amount"]');
const btnRef = document.querySelector('.btn-promise');

btnRef.addEventListener('click', onFoo);

let sum = Number(inputDelayRef.value);
let numberOfActions = 0;
let intervalId = null;

function onFoo(e) {
  e.preventDefault();

  if (
    inputDelayRef.value !== '' &&
    inputStepRef.value !== '' &&
    inputAmountRef.value !== ''
  ) {
    btnRef.setAttribute('disabled', '');

    setTimeout(() => {
      numberOfActions += 1;
      createPromise(numberOfActions, inputDelayRef.value);

      intervalId = setInterval(() => {
        numberOfActions += 1;
        createPromise(numberOfActions, inputStepRef.value);

        if (numberOfActions >= Number(inputAmountRef.value)) {
          clearInterval(intervalId);
          numberOfActions = 0;
          sum = 0;
          btnRef.removeAttribute('disabled');
        }
      }, inputStepRef.value);
    }, inputDelayRef.value);
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.5;

  new Promise((resolve, reject) => {
    if (shouldResolve) {
      return resolve(
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${(sum += Number(delay))}ms`
        )
      );
    }

    return reject(
      Notiflix.Notify.failure(
        `❌ Rejected promise ${position} in ${(sum += Number(delay))}ms`
      )
    );
  })
    .then(result => result)
    .catch(error => error);
}
