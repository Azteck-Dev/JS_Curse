/*
Crea 3 matrices. El primero tendra 5 números y el segundo se llamará pares y el tercero impares, ambos afectados vacíos. Después de multiplicar cada uno de los números del primer conjunto por un número aleatorio entre 1 y 10, si el resultado es par, guardar ese número en el conjunto de pares y si es impar en el conjunto de impares. Muestra por consola: -la multiplicación que se produce junto con su resultado con el formato 2 x 3 = 6 -el conjunto de pares e impares
*/

const numeros = [1,7,9,12,23];
let pares = [];
let impares = [];

for(const numero of numeros){
    const random = Math.round(Math.random() * 10 + 1);    
    let resultado = numero * random;

    console.log(`${numero} x ${random} = ${numero * random}`);

    if(resultado % 2 == 0){
        pares.push(resultado);
    }
    else{
        impares.push(resultado);
    }
}

console.log(`De los cuales los siguientes son pares: ${pares.join(', ')}.`);
console.log(`De los cuales los siguientes son impares: ${impares.join(', ')}.`);