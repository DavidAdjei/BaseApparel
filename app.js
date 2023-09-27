const button = document.querySelector('.button');
const emailInput = document.querySelector('.email');
const warningMessage = document.querySelector('.error__message');
const warning = document.querySelector('.warning');

function checkEmail(email) {
  if (email.trim() === '') {
    return false;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function clickButton(event) {
  event.preventDefault();
  const emailValue = emailInput.value.trim();
  if (!checkEmail(emailValue)) {
    emailInput.classList.add('error');
    warning.classList.remove('hide');
    warningMessage.classList.remove('hide');
  } else {
    emailInput.classList.remove('error');
    warning.classList.add('hide');
    warningMessage.classList.add('hide');
    alert('Valid Email: ' + emailValue)
  }
}

button.addEventListener('click', clickButton);

emailInput.addEventListener('input', () => {
  emailInput.classList.remove('error');
  warning.classList.add('hide');
  warningMessage.classList.add('hide');
});

var form = document.querySelector("#form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
});
