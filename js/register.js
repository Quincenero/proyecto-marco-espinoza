const formRegister = document.querySelector(".form-register");
const inputUser = document.querySelector('.form-register input[type="text"]');
const inputPass = document.querySelector('.form-register input[type="password"]');
const inputEmail = document.querySelector('.form-register input[type="email"]');
const alertaError = document.querySelector('.form-register .alerta-error');
const alertaExito = document.querySelector('.form-register .alerta-exito');

// EXPRESIONES REGULARES
const userNameRegex = /^[a-zA-Z0-9\_\-]{4,16}$/;
export const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
export const passwordRegex = /^.{6,16}$/;

export const estadoValidacionCampos = {
  userName: false,
  userEmail: false,
  userPassword: false,
};

document.addEventListener("DOMContentLoaded", () => {
  formRegister.addEventListener("submit", (e) => {
    e.preventDefault();
    enviarFormulario(formRegister,alertaError,alertaExito);
  });

  inputUser.addEventListener("input", () => {
    validarCampo(userNameRegex,inputUser,"El usuario tiene que tener de 4 a 16 caracteres y solo puede contener, letras y guión bajo.");
  });

  inputEmail.addEventListener("input", () => {
    validarCampo(emailRegex,inputEmail,"No es un email valido");
  });

  inputPass.addEventListener("input", () => {
    validarCampo(passwordRegex,inputPass,"La contraseña tiene que ser de 6 a 16 caracteres");
  });
});

export function validarCampo(regularExpresion, campo, mensaje) {
  const validarCampo= regularExpresion.test(campo.value);
  if (validarCampo) {
    eliminarAlerta(campo.parentElement.parentElement);
    estadoValidacionCampos[campo.name] = true;
    campo.parentElement.classList.remove("error");
    return;
  }
  estadoValidacionCampos[campo.name] = false;
  campo.parentElement.classList.add("error");
  mostrarAlerta(campo.parentElement.parentElement,mensaje);
}

function mostrarAlerta(referencia,mensaje) {
  eliminarAlerta(referencia);
  const alertaDiv = document.createElement("div");
  alertaDiv.classList.add("alerta");
  alertaDiv.textContent = mensaje;
  referencia.appendChild(alertaDiv);
}

function eliminarAlerta(referencia) {
  const alerta = referencia.querySelector(".alerta");

  if (alerta) {
    alerta.remove();
  }
}

export function enviarFormulario(form,alertaError,alertaExito) {
  //VALIDAMOS EL ENVIO DE NUESTRO FORMULARIO

  if (estadoValidacionCampos.userName && estadoValidacionCampos.userEmail && estadoValidacionCampos.userPassword) {
    /*ACTUALIZACION DEL CODIGO - RESETEAMOS A FALSE LAS PROPIEDADES DEL OBJETO*/
    estadoValidacionCampos.userName = false;
    estadoValidacionCampos.userEmail = false;
    estadoValidacionCampos.userPassword = false;

    form.reset();
    alertaExito.classList.add("alertaExito");
    alertaError.classList.remove("alertaError");
    setTimeout(() => {
      alertaExito.classList.remove("alertaExito");
    }, 3000); 
    return;
  }
  
  alertaExito.classList.remove("alertaExito");
  alertaError.classList.add("alertaError");

  setTimeout(() => {
    alertaError.classList.remove("alertaError");
  }, 3000);
}