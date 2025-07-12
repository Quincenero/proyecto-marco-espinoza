let mercaderia = [];
const contenedorTarjetas = document.getElementById("productos-container");

// ⏯️ Ejecuta todo después de cargar el HTML
document.addEventListener("DOMContentLoaded", () => {
  fetch("https://raw.githubusercontent.com/Quincenero/proyecto-marco-espinoza/main/mercaderia.json") // Ruta raw desde GitHub
  .then(response => response.json())
  .then(data => { 
    mercaderia = data;
    crearTarjetasProductosInicio(mercaderia); 
  })
    .catch(error => console.error("Error al cargar mercadería:", error));
});
/** Crea las tarjetas de productos teniendo en cuenta la lista en mercaderia.js */
function crearTarjetasProductosInicio(productos){
  productos.forEach(producto => {
    const nuevoMercaderia = document.createElement("div");
    nuevoMercaderia.classList = "tarjeta-producto";
    nuevoMercaderia.innerHTML = 
    `
        <img src="${producto.img}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p class="precio">$${producto.precio}</p>
        <button>Agregar al carrito</button>
    `
    contenedorTarjetas.appendChild(nuevoMercaderia);
    // Agregar el evento al botón de agregar al carrito
    // Se usa el índice del producto para identificarlo al agregarlo al carrito
    nuevoMercaderia.querySelector("button").addEventListener("click", () => agregarAlCarrito(producto));  
  });
}
