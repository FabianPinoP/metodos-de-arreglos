const carrito = [];

function agregarProducto() {
  const productoInput = document.getElementById("producto");
  const precioInput = document.getElementById("precio");
  const producto = productoInput.value.trim();
  const precio = parseFloat(precioInput.value);

  if (producto !== "" && !isNaN(precio) && precio > 0) {
    carrito.push({ producto, precio });
    mostrarCarrito();
    productoInput.value = "";
    precioInput.value = "";
  }
}

function mostrarCarrito() {
  const carritoElement = document.getElementById("carrito");
  const totalElement = document.getElementById("total");

  carritoElement.innerHTML = "";
  carrito.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${item.producto} - $${item.precio.toFixed(
      2
    )}`;
    carritoElement.appendChild(li);
  });

  const total = carrito.reduce(
    (accumulator, item) => accumulator + item.precio,
    0
  );
  totalElement.textContent = total.toFixed(2);
}
