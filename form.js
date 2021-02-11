const firstName = document.getElementById('firstName');
const form = document.querySelector('form');
const firstNameError = document.querySelector('.firstNameError')
const lastName = document.getElementById('lastName');
const lastNameError = document.querySelector('.lastNameError')
const email = document.getElementById('email');
const emailError = document.querySelector('.emailError');
const password = document.getElementById('password');
const passwordError = document.querySelector('.passwordError')
const input = document.querySelectorAll('input');
const error = document.querySelector('.error');
const inputWrapper = document.querySelector('.inputWrapper');
const successMessage = document.querySelector('.successMessage');
const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 


// regex email check
checkEmail = () => {
    if (pattern.test(email.value)) {
        return true;
    } else {
        emptyInput(email, emailError);
        return false;
    }
};  


//check if user input field is filled with text
function checkInput(inputID, errorClass) {
    if (inputID.value.trim() == '') {
        emptyInput(inputID, errorClass)
    }   
};

//error alert to be shown if input field is empty
function emptyInput(inputID, errorClass) {
    inputID.classList.remove('successBorder')
    errorClass.classList.remove('hideContent')
    inputID.classList.add('errorBorder')
}


//clear the error message when the user retypes new info
input.forEach(field => {
    field.addEventListener('keydown', e => {
        if (field.classList.contains('errorBorder') || email.classList.contains('errorBorder')) {
            field.classList.remove('errorBorder');
            field.nextElementSibling.classList.add('hideContent');
        }
    })
});



form.addEventListener('submit', e  => {
    e.preventDefault();

    checkInput(firstName, firstNameError);
    checkInput(lastName, lastNameError);
    checkInput(email, emailError)
    checkInput(password, passwordError);
    checkEmail();      

    if (firstName.value !== '' && 
        lastName.value !== '' &&
        email.value !== '' &&
        password.value !== '' &&
        checkEmail() == true) {
        inputWrapper.classList.add('hideContent');
        successMessage.classList.remove('hideContent');        
    } else {
        console.log(false)        
    };

});





















