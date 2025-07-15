const contenedorTarjetas = document.getElementById("cart-container");
const cantidadElement = document.getElementById("cantidad");
const precioElement = document.getElementById("precio");
const carritoVacioElement = document.getElementById("carrito-vacio");
const totalesContainer = document.getElementById("totales");
const keyLocalStorage = "mercaderia"

/** Crea las tarjetas de productos teniendo en cuenta lo guardado en localstorage */
function crearTarjetasProductosCarrito() {
  contenedorTarjetas.innerHTML = "";
  const productos = JSON.parse(localStorage.getItem(keyLocalstorage));
  if (productos && productos.length > 0) {
    productos.forEach((producto) => {
      const nuevoMercaderia = document.createElement("div");
      nuevoMercaderia.classList = "tarjeta-producto";
      nuevoMercaderia.innerHTML = `
   
    <img src="${producto.img}" alt="${producto.nombre}">
    <h3>${producto.nombre}</h3>
    <span>$${producto.precio}</span>
    <span>$${producto.precio*producto.cantidad}</span>

    <div>
    <button>-</button>
    <span class="cantidad">${producto.cantidad}</span>
    <button>+</button>
    </div>
    `;
      contenedorTarjetas.appendChild(nuevoMercaderia);
      nuevoMercaderia
        .getElementsByTagName("button")[0]
        .addEventListener("click", (e) => {
          const cantidadElement = e.target.parentElement.getElementsByClassName("cantidad")[0];
          cantidadElement.innerText = restarAlCarrito(producto);
          actualizarTotales();
          crearTarjetasProductosCarrito();
         
        });
      nuevoMercaderia
        .getElementsByTagName("button")[1]
        .addEventListener("click", (e) => {
          const cantidadElement = e.target.parentElement.getElementsByClassName("cantidad")[0];
          cantidadElement.innerText = agregarAlCarrito(producto);
          actualizarTotales();
          crearTarjetasProductosCarrito();
        });
    });
  }
  revisarMensajeVacio();
  actualizarTotales();
  actualizarNumeroCarrito();
}

crearTarjetasProductosCarrito();

/** Actualiza el total de precio y unidades de la página del carrito */
function actualizarTotales() {
  const productos = JSON.parse(localStorage.getItem(keyLocalstorage));
  let cantidad = 0;
  let precio = 0;
  if (productos && productos.length > 0) {
    productos.forEach((producto) => {
      cantidad += producto.cantidad;
      precio += producto.precio * producto.cantidad;
    });
  }
  cantidadElement.innerText = cantidad;
  precioElement.innerText = precio;
  if(precio === 0) {
    reiniciarCarrito();
    revisarMensajeVacio();
   
  }
   
}

document.getElementById("reiniciar").addEventListener("click", () => {
  contenedorTarjetas.innerHTML = "";
  reiniciarCarrito();
  revisarMensajeVacio();
  actualizarTotales();
});

/** Muestra o esconde el mensaje de que no hay nada en el carrito */
function revisarMensajeVacio() {
  const productos = JSON.parse(localStorage.getItem(keyLocalstorage));
  const hayProductos = productos && productos.length > 0;

  carritoVacioElement.classList.toggle("escondido", hayProductos);     // ocultar mensaje si hay productos
  totalesContainer.classList.toggle("escondido", !hayProductos);       // mostrar totales si hay productos
}

document.addEventListener("DOMContentLoaded", () => {
  const usuario = JSON.parse(localStorage.getItem("usuarioLogueado"));

  if (!usuario) {
    Swal.fire({
      icon: 'warning',
      title: 'Acceso denegado',
      text: 'Debés iniciar sesión para acceder al carrito.',
      confirmButtonText: 'Iniciar sesión'
    }).then(() => {
      window.location.href = "login.html";
    });
  }
});
function reiniciarCarrito() {
  localStorage.removeItem(keyLocalstorage);
  cantidadElement.innerText = 0;
  precioElement.innerText = 0;
}
