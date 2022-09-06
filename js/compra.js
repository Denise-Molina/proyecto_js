//finalizar compra cartel

const finalizarCompra = document.getElementById('finalizar-compra');

finalizarCompra.addEventListener('click', () => {
    swal.fire({
        title: '¿Quiere finalizar la compra?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Si',
        denyButtonText: `No`,
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                icon: 'success',
                title: 'Compra confirmada!',
                text: 'Sus entradas serán enviadas a su correo electrónico',
            })
            tr = document.querySelectorAll("tr");
            carrito = [];
            tbody.innerHTML = '';
            carritoTotal();
        } else if (result.isDenied) {
            Swal.fire({
                icon: 'error',
                title: 'No se guardaron los cambios'
            })
        }
    })
})
