let mercaderia = [];
fetch("./mercaderia.json")
  .then(response => response.json())
  .then(data => { 
    mercaderia = data;
    crearTarjetasProductosInicio(mercaderia); 
  })

const contenedorTarjetas = document.getElementById("productos-container");

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
    nuevoMercaderia.getElementsByTagName("button")[0].addEventListener("click",() => agregarAlCarrito(producto))
  });
}
crearTarjetasProductosInicio(mercaderia);