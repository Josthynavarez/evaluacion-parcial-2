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

function clasificarEdad(edad){
    if(edad <18){
        console.log("Menor de edad");
    }else if (edad <= 65) {
        console.log ("Adulto");
    }else{
        console.log("Adulto mayor");
    }
}
clasificarEdad(25);

let sumaTotal = 0;
for (let i = 1; i <= 20; i ++){
    if (i % 2 === 0){
        console.log(i + "Es par");
    }else{
        console.log(i +"Es impar");
    }
    sumaTotal += i;
}
console.log ("LA suma total es:", sumaTotal);
