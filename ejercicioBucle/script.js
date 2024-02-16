//1
let numero = parseInt(prompt("Ingrese un número entre 1 y 100:"));

if (numero >= 1 && numero <= 100) {
    for (let i = numero; i >= 0; i--) {
        console.log(i);
    }
} else {
    console.log("El número ingresado no está dentro del rango permitido.");
}
//2
let numero2 = parseInt(prompt("Ingrese un número entre 1 y 10:"));

if (numero2 >= 1 && numero2 <= 10) {
    for (let i = 1; i <= 10; i++) {
        let multiplicacion = i * numero2;
        console.log(`${i} x ${numero2} = ${multiplicacion}`);
    }
} else {
    console.error("El número ingresado está fuera del rango permitido.");
}
//3


let suma = 0;
console.log("Ingrese números para sumar. Ingrese 0 para finalizar.");

while (true) {
    let num = parseInt(prompt("Ingrese un número:"));
    if (num === 0 || isNaN(num)) {
        break;
    }
    suma += num;
}
console.log("La suma de los números ingresados es:", suma);
//4

suma = 0;

console.log("Ingrese números para sumar. Ingrese 0 para finalizar.");

do {
    let num = parseInt(prompt("Ingrese un número:"));

    suma += num;
    
} while (num !== 0);

console.log(`La suma de los números ingresados es: ${suma}`);
//5
let persona = {
    nombre: "Juan",
    apellido: "González",
    origen: "España",
    estudios: "Ingeniería",
    edad: 30,
};

console.log("Claves de las propiedades del objeto:");
for (let clave in persona) {
    console.log(clave);
}
//nivel medio

let unNumero = parseInt(prompt("Ingrese un número:"));

console.log(`Los divisores de ${unNumero} son:`);

for (let i = 1; i <= unNumero; i++) {
    if (unNumero % i === 0) {
        console.log(i);
    }
}

//
function Campana() {
    console.log("Ding Dong");
    return "Ding Dong";
}

let veces = parseInt(prompt("Ingrese un número:"));

let repeticiones = veces;
let resultado = "";

while (repeticiones > 0) {
    resultado += Campana() + ", ";
    repeticiones--;
}
console.log(resultado.slice(0, -2));
//
const colores = ["Rojo", "Verde", "Azul", "Violeta", "Marrón", "Negro", "Blanco"];

for (const color of colores) {
    console.log(color);
}


