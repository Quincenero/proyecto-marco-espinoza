const btnSignIn = document.getElementById("sign-in");
    btnSignUp = document.getElementById("sign-up");
    containerFormRegister = document.querySelector(".register");
    containerFormLogin = document.querySelector(".login");
//Ocultar u llamar ventanas

btnSignIn.addEventListener("click", e=>{
    containerFormRegister.classList.add("hide");
    containerFormLogin.classList.remove("hide")
})

btnSignUp.addEventListener("click", e=>{
    containerFormLogin.classList.add("hide");
    containerFormRegister.classList.remove("hide")
})

