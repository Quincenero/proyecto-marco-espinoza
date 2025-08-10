const apiUrl = "https://raw.githubusercontent.com/Quincenero/proyecto-marco-espinoza/refs/heads/main/mercaderia.json";

fetch(apiUrl)
  .then(response => response.json())
  .then(productos => { 
    /*console.log(data)*/
    
  crearTarjetasProductosInicio(productos); 
  })
  .catch(error => console.error("Error al cargar los productos:", error));

const contenedorTarjetas = document.getElementById("productos-container");
// Función para agregar un producto al carrito
crearTarjetasProductosInicio(productos);

/** Crea las tarjetas de productos */

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
    nuevoMercaderia.querySelector("button").addEventListener("click", () => agregarAlCarrito(producto));  
  });
}

