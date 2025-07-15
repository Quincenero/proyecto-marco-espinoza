document.getElementById("menuToggle").addEventListener("click", function() {
    var navLinks = document.getElementById("navLinks");
    navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
});
//cerrar sesión
document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("btnLogin");
  const usuario = JSON.parse(localStorage.getItem("usuarioLogueado"));

  if (usuario) {
    loginBtn.textContent = "Cerrar sesión";
  }

  loginBtn.addEventListener("click", (e) => {
    e.preventDefault(); // evita que el enlace recargue la página

    if (usuario) {
      localStorage.removeItem("usuarioLogueado");

      Swal.fire({
        icon: 'info',
        title: 'Sesión cerrada',
        text: 'Tu sesión fue cerrada correctamente.',
        confirmButtonText: 'Aceptar'
      }).then(() => {
        window.location.href = "index.html";
      });
    } else {
      window.location.href = "login.html";
    }
  });
});


// Mostrar saludo si el usuario está logueado
const usuario = JSON.parse(localStorage.getItem("usuarioLogueado"));
if (usuario) {
  const saludo = document.createElement("p");
  saludo.textContent = `Hola, ${usuario.nombre}`;
  document.querySelector(".menu-nav").appendChild(saludo);
}