window.onload = () => {
  resetState();
};

const countDisplay = document.getElementById('count__display');

const decrementButton = document.getElementById('decrement__button');
const resetButton = document.getElementById('reset__button');
const incrementButton = document.getElementById('increment__button');

let count = 0;

function saveToLocalStorate(value) {
  localStorage.setItem('count', count);
}

function getFromLocalStorage(item) {
  return localStorage.getItem(item);
}

decrementButton.onclick = () => {
  --count;

  saveToLocalStorate(count);

  countDisplay.innerText = getFromLocalStorage('count');
};

resetButton.onclick = () => {
  resetState();
};

incrementButton.onclick = () => {
  ++count;

  saveToLocalStorate(count);

  countDisplay.innerText = getFromLocalStorage('count');
};

function resetState() {
  count = getFromLocalStorage('count');

  countDisplay.innerText = count;
}
