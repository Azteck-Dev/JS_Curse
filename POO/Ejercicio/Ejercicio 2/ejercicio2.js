/*
Solicitar un nombre, la edad y muestra por consola el mensaje "Hola_______, tienes______anos y el ano que viene tendras_____anos"
Realizar el ejercicio con promt(mensaje) y haciendo uso de los template strings. y usando POO
*/ 

class Peopple{

    constructor(name, eage){
        this.name = name;
        this.eage = eage;
    }

    mensage(){
        let newAge = this.eage+1;

        return `Hola ${this.name} tienes ${this.eage} y el año que viene tendras ${newAge} años.`;
    }
}

const name = prompt('Cúal es tu nombre?');
const eage = parseInt(prompt('Cúal es tu edad?'));

const peopple_1 = new Peopple(name, eage);

console.log(peopple_1.mensage());