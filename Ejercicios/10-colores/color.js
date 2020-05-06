/*
 Dado un conjunto que contiene ["azul", "amarillo", "rojo", "verde", "rosa"] determinar si un color especificado por el usuario a través de un mensaje se encuentra dentro del conjunto o no.
*/

const colores = ["azul", "amarillo", "rojo", "verde", "rosa"];
const userColor = prompt(`Introduce un color.`);

for(let color of colores){
    if(color == 'azul' || color == 'amarillo' || color == 'rojo' || color == 'verde' || color == 'rosa'){
        console.log(`El color ${userColor} si se encuentra en la lista.`);
    }
    else{
        console.log(`El color ${userColor} no se encuentra en la lista`);
    }
}

