

const RegisterEmail = document.querySelector(".register-email");
const RegisterPassword = document.querySelector(".register-mailpass");
const RegisterForm = document.querySelector("#register-form");



RegisterForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const Email = RegisterEmail.value.trim();
    const Password = RegisterPassword.value;
    
    console.log("Registration submitted:", Email);


});
