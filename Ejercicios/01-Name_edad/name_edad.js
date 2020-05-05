/*
Solicitar un nombre, la edad y muestra por consola el mensaje "Hola_______, tienes______anos y el ano que viene tendras_____anos"
Realizar el ejercicio con promt(mensaje) y haciendo uso de los template strings.
*/ 

let name = prompt('Cual es tu nombre: ');
let age = prompt('Escriba su edad: ');
// parseInt() me permite convertir un string a numerico.
// let age = parseInt(promt('Escribe tu edad: '));


console.log(`Hola ${name}, tienes ${age} años y el año que viene tendras ${++age} años`);