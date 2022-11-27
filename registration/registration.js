const button = document.querySelector('.submit-btn');
const myForm = document.querySelector('#form');
const first_name = document.querySelector('#fname');
const last_name = document.querySelector('#lname');
const emailInput = document.querySelector('#email');
const phone_number = document.querySelector('#number');
const password_input = document.querySelector('#password');
const message = document.querySelector('#msg');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    var errorr = [];
    var illegalChars = /[\W_]/
    if(first_name.value === '' && last_name.value === '') {
        errorr.push('Please enter all fields');

        setTimeout(() => message.remove(), 5000);
    }

    if (password_input.value.length < 6) {
        errorr.push('Password must be more than six characters');
    }

    if (password_input.value.length >= 20) {
        errorr.push('Password must be less than 20 characters');
    }

    if (phone_number.value.length < 6) {
        errorr.push('Phone number must be more than six digits');
    }

    if (phone_number.value.length > 11) {
        errorr.push('Phone number must not be more than 11 digits');
    }

    if(errorr.length > 0) {
        e.preventDefault();
        message.classList.add('error');
        message.innerHTML = errorr.join(', ')
    } else {
        console.log('Successful');
    }
}
    