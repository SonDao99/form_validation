const email = document.querySelector('#email');
const emailError = document.querySelector('#emailError'); 

email.addEventListener('input', () => {
    if (email.validity.valid) {
        emailError.textContent = '';
        email.className = '';
    } else {
        emailShowError();
    }
})

function emailShowError() {
    if (email.validity.valueMissing) {
        emailError.textContent = 'Please enter an e-mail address.';
    } else if (email.validity.typeMismatch) {
        emailError.textContent = 'Please enter a valid e-mail address.';
    }
    email.className = 'errorBorder';
}

const country = document.querySelector('#country');
const countryError = document.querySelector('#countryError');

country.addEventListener('input', () => {
    if (country.validity.valid) {
        countryError.textContent = '';
        country.className = '';
    } else {
        countryShowError();
    }
})

function countryShowError() {
    if (country.validity.valueMissing) {
        countryError.textContent = 'Please enter a country name.';
    } else {
        countryError.textContent = 'Country names can only consist of upper or lowercase letters.';
    }
    country.className = 'errorBorder';
}

const password = document.querySelector('#password');
const passwordError = document.querySelector('#passwordError');

password.addEventListener('input', () => {
    if (password.validity.valid) {
        passwordError.textContent = '';
        password.className = ''
    } else {
        passwordShowError();
    }
})

function passwordShowError() {
    if (password.validity.valueMissing) {
        passwordError.textContent = 'Please enter a password.';
    } else {
        passwordError.textContent = 'The password has to be 8 characters long.'
    }

    password.className = 'errorBorder';
}

const confirmPass = document.querySelector('#confirmPass');
const confirmPassError = document.querySelector('#confirmPassError');

confirmPass.addEventListener('input', () => {
    if (confirmPass.validity.valueMissing) {
        confirmPassError.textContent = 'Please re-enter the password';
        confirmPass.className = 'errorBorder';
    } else if (confirmPass.validity.tooShort) {
        confirmPassError.textContent = 'The password is at least 8 characters long';
        confirmPass.className = 'errorBorder';
    } else if (confirmPass.validity.valid && confirmPass.value === password.value) {
        confirmPassError.textContent = '';
        confirmPass.className = '';
    } else {
        confirmPassError.textContent = 'The 2 passwords have to be the same';
        confirmPass.className = 'errorBorder';
    }
})

const submit = document.querySelector('#submit');
submit.addEventListener('click', () => {
    if (email.value.trim() !== '' && country.value.trim() !== '' && password.value.trim() !== '' && confirmPass.value.trim() !== '') {
        if (emailError.textContent === '' && countryError.textContent === '' && passwordError.textContent === '' && confirmPassError.textContent === '') {
            alert("High five! You've submitted the form!");
        }
    } else if (email.value.trim() !== '' || country.value.trim() !== '' || password.value.trim() !== '' || confirmPass.value.trim() !== '') {
        alert('Please fill out all the required fields.');
    }
})