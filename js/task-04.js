const counterDisplay = document.querySelector('#value');
let counterValue = 0;

function currentCount() {
  counterDisplay.textContent = counterValue;
}

const increment = document.querySelector('button[data-action="increment"]');

increment.addEventListener('click', () => {
  counterValue = counterValue + 1;
  return currentCount(counterValue);
});

const decrement = document.querySelector('button[data-action="decrement"]');
decrement.addEventListener('click', () => {
  counterValue = counterValue - 1;
  return currentCount(counterValue);
});
