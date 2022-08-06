const inputChange = document.querySelector('#font-size-control');
inputChange.value = 16;
inputChange.addEventListener('input', () => {
  const newFontSize = document.querySelector('#text');
  newFontSize.style.fontSize = `${inputChange.value}px`;
});
