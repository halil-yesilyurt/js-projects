const form = document.querySelector('.form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const input = document.querySelectorAll('input');

function formError(input, message) {
  const formControl = input.parentElement;
  const errorMsg = formControl.querySelector('small');
  formControl.classList.add('error');
  errorMsg.innerText = message;
}

function formSuccess(input) {
  const formControl = input.parentElement;
  formControl.classList.add('success');
}

// Check for valid email address with Regex
function isValidEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    re.test(email.value.trim()) ? formSuccess(email) : formError(email, "Email is not valid");
}

// Check for lengths of the inputs
function checkLength(input, min,max){
    if(input.value.length<min){
        formError(input, `${getFieldName(input)} must be at least ${min} characters`)
    }else if(input.value.length>max){
        formError(input, `${getFieldName(input)} must be less than ${max} characters`)
    }else{
        formSuccess(input);
    }
} 

// Check for required fields
function checkRequired(input) {
  input.forEach((e) => {
    e.value.trim() === "" ? formError(e, `${getFieldName(e)} is required`) : formSuccess(e);
  });
}

// Check for passwords match
function checkPassowrdsMatch(pass1, pass2){
    if(pass1.value !== pass2.value){
        formError(pass2, "Passwords do not match");
    }
}

// Get field name and capitalize
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

form.addEventListener('submit', function (e) {
  e.preventDefault();


  checkLength(username,3,20);
  checkLength(password,8,25);
  isValidEmail(email);
  checkPassowrdsMatch(password,password2);
  checkRequired([username, email, password, password2]);
  //   input.forEach((e) => {
  //     if (e.value === '') {
  //       formError(e, `${e.id} is required.`);
  //       console.log(e);
  //     } else {
  //       formSuccess();
  //     }
  //   });

  //  if(username.value === ""){
  //     formError(username, "Error message");
  //  }else{
  //     formSuccess();
  //  }
});
