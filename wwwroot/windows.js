
const RegisterextbuttonFor = document.querySelector(".forgotten-password-window").querySelector(".close-button");
const RegisterextbuttonReg = document.querySelector("#register-window").querySelector(".close-button");
const RegisterWindow = document.querySelector("#register-window");
const RegisterButton = document.querySelector(".register-button");

const ForgottenButton = document.querySelector(".forgot-password");
const ForgotPassWin = document.querySelector("#forgotten-password-window");


RegisterButton.addEventListener("click", 
    function() {

    RegisterWindow.showModal();
    
});
RegisterextbuttonReg.addEventListener("click", function() {

    RegisterWindow.close();
    
});


ForgottenButton.addEventListener("click", 
    function() {
  
    ForgotPassWin.showModal();

});

RegisterextbuttonFor.addEventListener("click", function() {

    ForgotPassWin.close();
});
