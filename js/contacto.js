document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formulario");
  const messageBox = document.getElementById("form-message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Limpiar mensajes anteriores
    document.querySelectorAll(".error").forEach(span => span.textContent = "");
    messageBox.textContent = "";
    messageBox.className = "form-message";

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const producto = document.getElementById("producto").value;
    const message = document.getElementById("message").value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let hasErrors = false;

    if (!name) {
      document.getElementById("error-name").textContent = "El nombre es obligatorio.";
      hasErrors = true;
    }

    if (!email) {
      document.getElementById("error-email").textContent = "El correo es obligatorio.";
      hasErrors = true;
    } else if (!emailRegex.test(email)) {
      document.getElementById("error-email").textContent = "El formato del correo es correo@correo.com";
      hasErrors = true;
    }

    if (!producto) {
      document.getElementById("error-producto").textContent = "Seleccioná un producto.";
      hasErrors = true;
    }

    if (!message) {
      document.getElementById("error-message").textContent = "Escribí tu consulta.";
      hasErrors = true;
    }

    if (!hasErrors) {
      messageBox.textContent = "✅ Formulario enviado correctamente.";
      messageBox.classList.add("success");

      form.reset();
    }
  });
});
