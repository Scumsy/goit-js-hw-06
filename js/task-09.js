function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector('.change-color');
changeColorBtn.addEventListener('click', () => {
  const newColor = getRandomHexColor();
  const colorName = document.querySelector('.color');
  colorName.textContent = newColor;
  const bodyColor = document.querySelector('body');
  bodyColor.style.backgroundColor = newColor;
});
