function calcularPrecio(base, descuento) {
    let precioFinal = base;
    if (descuento) {
        precioFinal = base - base * descuento;
    }
    return precioFinal.toFixed(2);
}
 
console.log(calcularPrecio(100, 0.2));
console.log(calcularPrecio(100, 0.6));

//El error está en que el descuento se está aplicando como un porcentaje decimal y el descuento debería ser 0.6 para representar un 60%. 