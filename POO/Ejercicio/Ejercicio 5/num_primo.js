/*
Escribir un programa que pida un numero entero mayor que 1 y que escriba si es un numero primo o no(Un numero primo es aquel que solo es divisible por si mismo y la unidad).
*/


class Primo {

    constructor(num) {
        this.num = num;
    }

    calculo() {
        if (this.num % 2 == 0) {
            console.log(`El numero ${this.num} no es un numero primo.`);
        } else if (this.num > 1) {
            console.log(`El numero ${this.num} es un numero primo.`)
        }
    }

}


const num = prompt('Ingresa el numero que desea comprobar');
const resultado = new Primo(num);

if (!isNaN(num) && num > 1) {
    resultado.calculo();
} else if (num == 1 || num == 0) {
    console.log('Ingresa un numero mayor a 0 o 1 para iniciar el programa');
} else {
    console.log('Ingresa solo numeros para poder iniciar el programa.');
}