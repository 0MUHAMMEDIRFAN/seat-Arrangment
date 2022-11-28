const button = document.querySelector('.submit-btn');
const myForm = document.querySelector('#form');
const first_name = document.querySelector('#fname');
const last_name = document.querySelector('#lname');
const emailInput = document.querySelector('#email');
const phone_number = document.querySelector('#number');
const password_input = document.querySelector('#password');
const message = document.querySelector('#msg');
const student= document.querySelector("#student")
const faculty= document.querySelector("#faculty")

student.addEventListener("click" , changeStudent);
faculty.addEventListener("click" , changeFaculty);
myForm.addEventListener('submit', onSubmit);


function changeFaculty(){
    faculty.classList.add("clicked")
    student.classList.remove("clicked")
    
}

function changeStudent(){
    faculty.classList.remove("clicked")
    student.classList.add("clicked")
}

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
    