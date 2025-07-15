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
    validarCampo(passwordRegex,inputPass,"La contraseña tiene que ser de 6 a 16 caracteres");
  });
});

const usuarioLogueado = {
  
  email: "marco@email.com",
  password: "12345678",
  nombre: "Marco",
};

localStorage.setItem("usuarioLogueado", JSON.stringify(usuarioLogueado));

// Validar si el usuario está registrado
function validarUsuarioRegistrado() {
  const usuario = JSON.parse(localStorage.getItem("usuarioLogueado"));
  if (!usuario) {
    Swal.fire({
      icon: 'warning',
      title: 'Acceso restringido',
      text: 'Por favor, registrate para acceder a esta sección.',
      confirmButtonText: 'Ir al registro'
    }).then(() => {
      window.location.href = "registro.html";
    });
    return false;
  }
  return true;
}
validarUsuarioRegistrado()