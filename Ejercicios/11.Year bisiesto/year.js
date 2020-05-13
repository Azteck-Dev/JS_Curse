/*
Crear un programa que calcule si un año es biciesto u no.
*/

class Comprobation {

    constructor(year){
        this.year = year;
    }

    consult() {
        if((this.year % 4 == 0 && year % 100 != 0) || this.year % 400 == 0) {
            return `El año ${this.year} es biciesto.`;
        }
        else{
            return `El año ${this.year} no es biciesto.`;
        }
    }
}

const year = parseInt(prompt('Ingresa un año por favor.'));
const consulta = new Comprobation(year);

const mensaje = document.getElementById('mensaje');

mensaje.textContent = consulta.consult();