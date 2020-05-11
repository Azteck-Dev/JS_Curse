/*
Solicita un numero e imprime todos los numeros pares e impares desde 1 hasta ese numero con el mensaje "es par" o "es impar"
    Si el numero es 5 el resultado sera:
        1 - es impar
        2 - es par
        3 - es impar
        4 - es par
        5 - es impar

    Formula x/2 = 0 es numero par
*/

class Par_impar {

    constructor(num) {
        this.num = num;
    }

    par_impar() {
        for (let i = 1; i <= this.num; i++) {
            if (i % 2 == 0) {
                console.log(`El numero ${i} es par`);
            } else {
                console.log(`El numero ${i} es impar`);
            }
        }
    }
}


const num = parseInt(prompt('Introduce un numero:'));
const orden = new Par_impar(num);

orden.par_impar();