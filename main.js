const calcularTotal = () => {
    const nombre = prompt("Ingrese su nombre");

    if (nombre.length > 0) {
    alert("Bienvenido/a " + nombre);
    } else {
    alert("Ingrese un nombre válido");
    }

    let cantidad = parseInt(prompt("Ingrese la cantidad de latas de Monster"));
    let precioUnitario = parseFloat(prompt("Ingrese el precio unitario"));

    do {
        if (cantidad <= 0 || precioUnitario <= 0) {
        alert("Por favor, ingresa valores válidos.");
        cantidad = parseInt(prompt("Ingrese la cantidad de latas de Monster"));
        precioUnitario = parseFloat(prompt("Ingrese el precio unitario"));
        }
    } while (cantidad <= 0 || precioUnitario <= 0);

    let subtotal = 0;
    let descuento = 0;

    for (let i = 1; i <= cantidad; i++) {
        subtotal += precioUnitario;
    }

    if (cantidad >= 5) {
        descuento = subtotal * 0.1;
        subtotal -= descuento;
    }

    const total = subtotal;

    alert(
    `${nombre}, este es el detalle de tu compra:\n` +
        `Subtotal: $${subtotal + descuento}\n` +
        `Descuento: $${descuento}\n` +
        `Total a pagar: $${total}`
    );
    };
    
    calcularTotal();
