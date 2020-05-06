/*
Solicitar al usuario una palabra y mostrar por consola el número de consonantes, vocales y longitud de la palabra.
*/

let word = prompt('Introduce una pálabra: ');
let vocales = 0;
let consonantes = 0;
let caracteres = word.length;

for(let letra of word){
    
    if(letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u'){
        vocales++
    }
    else{
        consonantes++
    }
}

console.log(`La palabra ${word}`)
console.log(`tiene ${vocales} vocales.`);
console.log(`y ${consonantes} consonantes.`);
console.log(`ademas se compone por ${caracteres} caracteres`);
