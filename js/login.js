import {validarCampo, emailRegex, passwordRegex, estadoValidacionCampos, enviarFormulario} from "./register.js"

const formLogin = document.querySelector(".form-login");
const inputPass = document.querySelector('.form-login input[type="password"]');
const inputEmail = document.querySelector('.form-login input[type="email"]');
const alertaErrorLogin = document.querySelector('.form-login .alerta-error');
const alertaExitoLogin = document.querySelector('.form-login .alerta-exito');

document.addEventListener("DOMContentLoaded", () => {
  formLogin.addEventListener("submit", (e) => {
    estadoValidacionCampos.userName = true;
    e.preventDefault();
    enviarFormulario(formLogin,alertaErrorLogin,alertaExitoLogin);
  });

  
  inputEmail.addEventListener("input", () => {
    validarCampo(emailRegex,inputEmail,"No es un email valido");
  });

  inputPass.addEventListener("input", () => {
    validarCampo(passwordRegex,inputPass,"La contraseña tiene que ser de 8 a 16 caracteres");
  });
});