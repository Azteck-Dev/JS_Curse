/*
Escriba un programa que pida un numero mayor entero que 0 y calcule su factorial. El factorial es el resultado de multiplicar ese numero por sus anteriores hasta la unidad.
        !5 = (5)(4)(3)(2)(1) = 120
*/

class Factorial{

    constructor(number) {
        this.number = number;
    }

    fact_result() {
        let start = 1;

        for (let i = this.number; i > 0; i--) {
            start *= i;
        }

        console.log(`EL factorial de ${this.number} es de ${start}.`)
    }
}


const number = parseInt(prompt('Ingresa el numero del que desea obtener el factorial:'));
const num = new Factorial(number);

num.fact_result();
