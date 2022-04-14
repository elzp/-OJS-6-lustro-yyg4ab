import './style.css';

const input = document.querySelector('.text-input');
const mirror = document.querySelector('.mirror');

function mirrorString(string) {
  if (typeof string !== 'string') return '';
  const arrOfString = [];

  string.split('').forEach((item) => arrOfString.unshift(item));
  return arrOfString.join('');
}

input.addEventListener('input', (event) => {
  mirror.innerText = mirrorString(event.target.value) || '';
});
