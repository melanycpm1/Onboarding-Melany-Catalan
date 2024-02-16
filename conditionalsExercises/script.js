//Nivel de dificultad: bajo


//ejercicio 1
let numero1 = 4;
let numero2 = 5;

if (numero1 > numero2) {
    console.log(numero1);
} else {
    console.log(numero2);
}

//ejercicio 2

if (numero1 > numero2) {
    console.log(numero1);
} else if (numero2 > numero1) {
    console.log(numero2);
} else {
    console.log("Los números son iguales");
}

//ejercicio 3

if (numero1 === numero2) {
    console.log("Los números son iguales");
} else {
    console.log("Los números son diferentes");
}

//ejercicio 4

let fecha1 = "2018-9-2";
let fecha2 = "2023-7-5";

if (fecha1 > fecha2) {
    console.log(`La fecha ${fecha1} es mayor que la fecha ${fecha2}`);
} else if (fecha2 > fecha1) {
    console.log(`La fecha ${fecha2} es mayor que la fecha ${fecha1}`);
} else {
    console.log("Las fechas son iguales");
}

//ejercicio 5
fecha1 = "2023-7-5";
fecha2 = "2018-9-2";

if (fecha1 > fecha2) {
    console.log(`La fecha ${fecha1} es mayor que la fecha ${fecha2}`);
} else if (fecha2 > fecha1) {
    console.log(`La fecha ${fecha2} es mayor que la fecha ${fecha1}`);
} else {
    console.log("Las fechas son iguales");
}


//ejercicio 6 
numero1 = 5;
numero2 = 7;
let numero3 = 9;

if (numero1 > numero2 && numero1 > numero3) {
    console.log(`El número ${numero1} es el más grande`);
} else if (numero2 > numero1 && numero2 > numero3) {
    console.log(`El número ${numero2} es el más grande`);
} else if (numero3 > numero1 && numero3 > numero2) {
    console.log(`El número ${numero3} es el más grande`);
} else {
    console.log("Hay números iguales o todos son iguales");
}

//Nivel de dificultad: Medio;

let color = prompt("Ingrese un color (rojo, azul o verde):").toLowerCase();

switch (color) {
    case rojo:
        console.log("El color de la pasión");
        break;

    case azul:
        console.log("El color del mar");
        break;

    case verde:
        console.log("El color de la naturaleza");
        break;

    default:
        console.log("color no reconocido");
        break;
}

//ejercicio 2
let num1 = parseInt(prompt("Ingrese el primer valor numérico (del 1 al 100):"));
let num2 = parseInt(prompt("Ingrese el segundo valor numérico (del 1 al 100):"));
let operacion = prompt("Ingrese la operación a realizar (suma, resta, multiplicación, división):").toLowerCase();

switch (operacion) {
    case "suma":
        console.log(`La suma de ${num1} y ${num2} es: ${num1 + num2}`);
        break;
    case "resta":
        console.log(`La resta de ${num1} y ${num2} es: ${num1 - num2}`);
        break;
    case "multiplicación":
        console.log(`La multiplicación de ${num1} y ${num2} es: ${num1 * num2}`);
        break;
    case "división":
        console.log(`La división de ${num1} entre ${num2} es: ${num1 / num2}`);
        break;
    default:
        console.log("Operación no reconocida");
}


//persona 3

let persona1 = {
    nombre: "Juan",
    edad: 39,
    altura: 1.69
};

let persona2 = {
    nombre: "Rosa",
    edad: 45,
    altura: 1.65
};

if (persona1.altura > persona2.altura && persona1.edad > persona2.edad) {
    console.log(`${persona1.nombre} es más alto y mayor que ${persona2.nombre}`);
} else if (persona1.altura < persona2.altura && persona1.edad < persona2.edad) {
    console.log(`${persona2.nombre} es más alto y mayor que ${persona1.nombre}`);
} else if (persona1.altura > persona2.altura) {
    console.log(`${persona1.nombre} es más alto que ${persona2.nombre} pero ${persona2.nombre} es mayor`);
} else if (persona1.altura < persona2.altura) {
    console.log(`${persona2.nombre} es más alto que ${persona1.nombre} pero ${persona1.nombre} es mayor`);
} else if (persona1.edad > persona2.edad) {
    console.log(`${persona1.nombre} es mayor que ${persona2.nombre} pero ${persona2.nombre} es más alto`);
} else if (persona1.edad < persona2.edad) {
    console.log(`${persona2.nombre} es mayor que ${persona1.nombre} pero ${persona1.nombre} es más alto`);
} else {
    console.log(`Ambas personas tienen la misma altura y edad`);
}

//ejerciocio 4

let nombre = prompt("Ingrese su nombre:");
let edad = parseInt(prompt("Ingrese su edad:"));
let altura = parseFloat(prompt("Ingrese su altura en metros (por ejemplo, 1.75):"));
let vision = parseFloat(prompt("Ingrese su visión (por ejemplo, 8/10):"));

if (edad >= 18 && altura > 1.10 && vision >= 8) {
    console.log("Estás calificado para conducir");
} else {
    console.log("No estás calificado para conducir");
}

//ejercicio 5

let edad2 = parseInt(prompt("Ingrese su edad:"));

if (edad2 >= 0 && edad2 <= 12) {
    alert("Usted es infantil");
} else if (edad2 >= 13 && edad2 <= 18) {
    alert("Usted es adolescente");
} else if (edad2 >= 19 && edad2 <= 45) {
    alert("Usted es joven mayor");
} else if (edad2 > 45 && edad2 <= 100) {
    alert("Usted es una persona mayor");
} else if (edad2 > 100) {
    alert("¿Es realmente tan viejo?");
} else {
    alert("Edad ingresada no válida");
}

//ejercicio 6

let numero = parseInt(prompt("Ingrese un número del 1 al 3:"));

if (numero >= 1 && numero <= 3) {
    switch (numero) {
        case 1:
            alert(`El número ingresado es ${numero}`);
            break;
        case 2:
            alert(`El doble del número ingresado es ${numero * 2}`);
            break;
        case 3:
            alert(`Tres veces el número ingresado es ${numero * 3}`);
            break;
    }
} else {
    alert("Ese valor no está permitido");
}

//Nivel de dificultad: alto

let nombreCliente = prompt("Ingrese su nombre:");
let paseCliente = prompt("¿Tiene un pase? (vip o normal)").toLowerCase();
let entradaCliente = prompt("¿Tiene entrada? (sí o no)").toLowerCase();
if (nombreCliente.toLowerCase() === "melany") {
    console.log("¡Bienvenido, melany!");
}
if (paseCliente === "vip") {
    console.log("¡Bienvenido, cliente VIP!");
    let usarBillete = prompt("¿Quieres usar tu billete? (sí o no)").toLowerCase();
    if (usarBillete === "sí") {
        console.log("¡Bienvenido, gracias por usar tu billete!");
    } else {
        console.log("Hasta luego.");
    }
} 

if (entradaCliente === "sí") {
    let usarBillete = prompt("¿Quieres usar tu billete? (sí o no)").toLowerCase();
    if (usarBillete === "sí") {
        console.log("¡Bienvenido, gracias por usar tu billete!");
    } else {
        console.log("Hasta luego.");
    }
}

if (nombreCliente.toLowerCase() !== "melany" && paseCliente !== "vip" && entradaCliente !== "sí") {
    let comprar = prompt("¿Quieres comprar? (sí o no)").toLowerCase();
    if (comprar === "sí") {
        let dineroDisponible = parseInt(prompt("¿Cuánto dinero tienes disponible?"));
        if (dineroDisponible > 1000) {
            console.log("¡Venta exitosa! ¡Bienvenido!");
        } else {
            console.log("Lo siento, no tienes suficiente dinero para comprar.");
        }
    } else {
        console.log("Hasta luego.");
    }
}

