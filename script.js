let carrito = [];

const botonesAgregar = document.querySelectorAll('.add-to-cart-btn');
const listaCart = document.getElementById('cart-list');
const totalCart = document.getElementById('cart-total');

botonesAgregar.forEach(boton => {
    boton.addEventListener('click', (e) => {
        const id = e.target.getAttribute('data-id');
        const nombre = e.target.getAttribute('data-name');
        const precio = parseFloat(e.target.getAttribute('data-price'));

        const existe = carrito.find(item => item.id === id);

        if (existe) {
            existe.cantidad++;
        } else {
            carrito.push({ id, nombre, precio, cantidad: 1 });
        }

        actualizarInterfazCarrito();
    });
});

function actualizarInterfazCarrito() {
    listaCart.innerHTML = '';

    if (carrito.length === 0) {
        listaCart.innerHTML = '<p>El carrito está vacío.</p>';
        totalCart.textContent = '0.00';
        return;
    }

    let totalAcumulado = 0;

    carrito.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nombre} x${item.cantidad} - $${item.precio * item.cantidad}`;
        li.style.color = "#333";
        li.style.padding = "5px 0";
        listaCart.appendChild(li);
        
        totalAcumulado += item.precio * item.cantidad;
    });

    totalCart.textContent = totalAcumulado.toFixed(2);
}
