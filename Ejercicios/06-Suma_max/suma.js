/*
 Escribe un programa que permite ir introduciendo una serie indeterminada de números mientras su suma no supera 50. Cuando esto ocurre, se debe mostrar el total acumulado y el contador de cuantos números se han introducido.
*/ 

let suma = 0;
let count = 0;

while(suma <= 50){
    suma += parseInt(prompt('Ingrese un numero para incluir en la suma.'));
    count++
}

console.log(`La suma total es de: ${suma}`);
console.log(`El total de numeros introducidos es: ${count}`);