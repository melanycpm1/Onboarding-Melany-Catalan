//dificultad basica

//1
function agregar() {
    console.log(100 * 20);
}
//2
agregar();


//3
function agregar(parametro1, parametro2) {
    console.log(parametro1 * parametro2);
}

agregar(100, 20);
//4

function agregar(parametro1, parametro2) {
    console.log(parametro1 * parametro2);
}

let numero1 = 100;
let numero2 = 20;

agregar(numero1, numero2);
//5
function agregar(parametro1, parametro2) {
    console.log(parametro1 * parametro2);
}

numero1 = 100;
numero2 = 20;

agregar(numero1, numero2);


//6

let agregar = function(parametro1, parametro2) {
    let resultado = parametro1 * parametro2;
    return resultado;
};

numero1 = 100;
numero2 = 20;

let resultadoMultiplicacion = agregar(numero1, numero2);
console.log(resultadoMultiplicacion);


//dificultad media

function saludar(nombre) {
    console.log(`¡Hola, ${nombre}! Bienvenido.`);
}
saludar("juan");


//2
let multiplicar = function(nume1, nume2) {
    return nume1 * nume2;
};
let resultadoRecibido = multiplicar(5, 7);
console.log("El resultado de la multiplicación es:", resultadoRecibido);
    
//3

function area(parametro1,parametro2) {
    return parametro1*parametro2/2
}

//4
function perimetro(lado1, lado2, lado3) {
    return lado1 + lado2 + lado3;
}
//5
function precioTotal(precio, cantidad) {
    let precioTotal = precio * cantidad;
    if (cantidad >= 20) {
        precioTotal *= 0.8; 
    } else if (cantidad >= 10) {
        precioTotal *= 0.9;
    }
    return precioTotal;
}

//6
function isAnAdult(edad) {
    if (edad >= 18) {
        return "Eres mayor de edad";
    } else {
        return "No eres adulto";
    }
}

//7
function calcularImpuesto(ingresoAnual) {
    let impuesto;
    if (ingresoAnual <= 10000) {
        impuesto = ingresoAnual * 0.1; 
    } else if (ingresoAnual <= 20000) {
        impuesto = ingresoAnual * 0.15; 
    } else {
        impuesto = ingresoAnual * 0.2; 
    }
    return impuesto;
}

//8
function verificarDia(numeroDia) {
    switch (numeroDia) {
        case 1:
            return "Es un día hábil";
        case 2:
            return "Es un día hábil";
        case 3:
            return "Es un día hábil";
        case 4:
            return "Es un día hábil";
        case 5:
            return "Es un día hábil";
        case 6:
            return "Es un día hábil";
        case 7:
            return "Es fin de semana";
        default:
            return "Día no válido";
    }
}
//9
