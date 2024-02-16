let myName="melany";
let myLastName="catalan";
let myAge=18;
let myPet="tommy";
let petAge=6;

let nombreCompleto=myName+" " +myLastName;
let presentationText=`me llamo ${nombreCompleto} y mi edad es ${myAge} mi mascota ${myPet} tiene ${petAge}`;

console.log(presentationText)
//DIFICULTAD MEDIA
let sumAges=myAge+petAge;
let restAges=myAge-petAge;
let productAges=myAge%petAge;
let divisionAges=myAge/petAge;

let estudiantes=[
    {
        nombre:"Juana",
        apellido:"Vitabella",
        curso:"5to",
        horario:"mañana",
        nota:10,
    },
    {
        nombre:"paola",
        apellido:"pabon",
        curso:"7mo",
        horario:"tarde",
        nota:7,
    },
    {
        nombre:"pablo",
        apellido:"bustamante",
        curso:"5to",
        horario:"tarde",
        nota:6.5,
    },
    {
        nombre:"luca",
        apellido:"hannu",
        curso:"1ero",
        horario:"mañana",
        nota:8.10,
    },
    {
        nombre:"yanan",
        apellido:"hessain",
        curso:"1ero",
        horario:"tarde",
        nota:10,
    },
]

estudiantes.forEach(estudiante => {
    console.log(estudiante.nombre);
    console.log(estudiante.apellido)
    console.log(estudiante.curso);
    console.log(estudiante.horario)
    console.log(estudiante.nota)
});

let pet = {
    nombre: "Fido",
    tipo: "Perro",
    edad: 5,
    color: "Marrón",
    raza: "Labrador"
};

console.table(pet);

console.log("Nombre:", pet.nombre);
console.log("Tipo:", pet.tipo);
console.log("Edad:", pet.edad);
console.log("Color:", pet.color);
console.log("Raza:", pet.raza);

let frutas = ["Manzana", "Banana", "Naranja", "Uva", "Pera"];

console.log(frutas);

frutas.forEach(function(fruta) {
    console.log(fruta);
});



let dameEdad=parseInt(prompt("dame una edad"))

if (dameEdad>=18) {
    let IamAdult=dameEdad;
    console.log("soy un adulto "+IamAdult);

}

let numeros=[10,20,30,40,50];

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i])
}

let familias = [
    { nombre: "Juan", edad: 40, relacion: "Padre" },
    { nombre: "María", edad: 38, relacion: "Madre" },
    { nombre: "Pedro", edad: 20, relacion: "Hijo" },
    { nombre: "Ana", edad: 18, relacion: "Hija" },
    { nombre: "Luisa", edad: 70, relacion: "Abuela" }
]
console.log(familias);

familias.forEach(familia => {
    console.log(familia.nombre);
    console.log(familia.edad);
    console.log(familia.relacion);
});


let randomText = `${frutas[1]} ${numeros[3]} ${familia[4].nombre}`;
console.log(randomText);