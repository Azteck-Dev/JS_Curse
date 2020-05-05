/*
Escriba un programa que pida un numero mayor entero que 0 y calcule su factorial. El factorial es el resultado de multiplicar ese numero por sus anteriores hasta la unidad.
        !5 = (5)(4)(3)(2)(1) = 120
*/

let num = prompt('Ingrese un numero:');
let resultado = 1;

for(let i=num;i>0;i--){
        resultado *= i;
}

console.log(`El factorial de ${num} es ${resultado}`);