const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', checkData);

function checkData(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('please fill all empty fields');
  }

  const dataSubmitted = { email: email.value, password: password.value };

  console.log(dataSubmitted);
  event.currentTarget.reset();
}
