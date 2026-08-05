//Ejercicio 2
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

//Ejercicio 3
const precioOriginal = 100;
const descuento = 0.15;
const ahorro = precioOriginal * descuento;
const precioFinal = precioOriginal - ahorro;

console.log("Precio final con descuento:", precioFinal);
console.log("Dinero ahorrado:", ahorro);

//Ejercicio 4
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

//ejercicio 5
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

//ejercicio 6
function obterMayor (num1, num2){
    if (num1 > num2){
        return num1;
    }else{
        return num2;
    }
}
console.log("El numero mayor es:", obterMayor(50,85));

