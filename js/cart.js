<<<<<<< HEAD
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
=======
data = [];
const apiUrl = "https://raw.githubusercontent.com/Quincenero/proyecto-marco-espinoza/refs/heads/main/mercaderia.json";
fetch(apiUrl)
  .then(response => response.json())
  .then(data => { 
    /*console.log(data)*/
    
  crearTarjetasProductosInicio(data); 
  })
  .catch(error => console.error("Error al cargar los productos:", error));

const contenedorTarjetas = document.getElementById("productos-container");
// Función para agregar un producto al carrito
crearTarjetasProductosInicio(data);
/** Crea las tarjetas de productos */
>>>>>>> 5719184 (correcion en el llamado de APIs en cart.js)
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
<<<<<<< HEAD
}
=======
}
>>>>>>> 5719184 (correcion en el llamado de APIs en cart.js)
