const inputText = document.querySelector('#validation-input');

inputText.addEventListener('blur', () => {
  if (inputText.value.length !== Number(inputText.dataset.length)) {
    inputText.classList.add('invalid');
  } else {
    inputText.classList.remove('invalid');
    inputText.classList.add('valid');
  }
});
