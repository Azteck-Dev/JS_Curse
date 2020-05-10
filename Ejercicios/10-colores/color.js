/*
Dado un conjunto que contiene ["azul", "amarillo", "rojo", "verde", "rosa"] determinar si un color especificado por el usuario a través de un mensaje se encuentra dentro del conjunto o no.
*/

const colores = ["azul", "amarillo", "rojo", "verde", "rosa", "negro"];
const color = prompt(`Introduce un color.`);


if(colores.indexOf(color) != -1){
    console.log(`El color ${color} se encuentra en la lista.`);
}
else{
    console.log(`${color} no se encuentra en la lista.`)
}