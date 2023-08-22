const form = document.querySelector('.form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const errorMsg = document.querySelectorAll('small');
const input = document.querySelectorAll('input');

function formError(input, message) {
  const formControl = input.parentElement;
  formControl.classList.add('error');
  console.log(message);
  errorMsg.innerText = message;
  console.log(errorMsg);
}

function formSuccess() {
  const formControl = input.parentElement;
  formControl.classList.add('sucsess');
}

// Check for valid email address
function isValidEmail(email) {
  return String(email)
    .toLowerCase()
    .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  input.forEach((e) => {
    if (e.value === '') {
      formError(e, `${e.id} is required.`);
      console.log(e);
    } else {
      formSuccess();
    }
  });

  //  if(username.value === ""){
  //     formError(username, "Error message");
  //  }else{
  //     formSuccess();
  //  }
});
