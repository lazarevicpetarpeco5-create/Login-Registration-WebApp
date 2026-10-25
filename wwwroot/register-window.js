
const Registerextbutton = document.querySelector(".close-button");
const RegisterWindow = document.querySelector("#register-window");
const RegisterButton = document.querySelector(".register-button");


RegisterButton.addEventListener("click", function() {

    RegisterWindow.showModal();

});

Registerextbutton.addEventListener("click", function() {

    RegisterWindow.close();

});
