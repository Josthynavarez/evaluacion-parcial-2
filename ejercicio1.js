const producto1 ={
    nombre: "Laptop",
    precio: 800,
    stock: true
};

const producto2 ={
    nombre: "Mouse",
    precio: 25,
    stock: false
};

console.log(producto1);
console.log(producto2);

const precioOriginal = 100;
const descuento = 0.15;
const ahorro = precioOriginal * descuento;
const precioFinal = precioOriginal - ahorro;

console.log("Precio final con descuento:", precioFinal);
console.log("Dinero ahorrado:", ahorro);
