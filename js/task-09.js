function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const colorName = document.querySelector('.color');
const bodyColor = document.querySelector('body');

changeColorBtn.addEventListener('click', () => {
  const newColor = getRandomHexColor();

  colorName.textContent = newColor;

  bodyColor.style.backgroundColor = newColor;
});
