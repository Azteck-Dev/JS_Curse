/*
Los arrays son estructuras que nos permiten almacenar varios datos y agruparlos. Se pueden llenar con cualquier dato valido en JS y deben ir separados por comas, se pueden mesclar tipos de datos pero no es recomendable.
Se declaran con corchetes [], y pueden ser declarados vacios o con un contenido pre-establecido, se pueden agregar elementos u eliminar en cualquier momento.

Sintaxys:
    let array = [];
    let array = [1, 2, 3, 4, 5];
    posiciones-> 0, 1, 2, 3, 4 siempre iniciando desde 0.

los elementos de un array pueden ser identificados por su indice(su ubicacion en la lista)
*/ 

let numeros = [1, 2, 3, 4, 5];
let words = ['hola','esto','es','Udemy'];
let booleanos = [true, false, true, false];

// array completo
console.log(numeros);

/*
 array por indice, al indicar un indice el resto del array queda invalido ademas que si utilizamos lo siguiente console.log(numeros[0] + numeros[2]) a el valor contenido en los indices seria tomado como una operacionaritmetica 
*/
console.log(numeros[1] + numeros[2]);

/*
En el caso de los string estos solo seria concatenados uno detras del otro en el orden en que sean llamdos segun su indice.
*/ 
console.log(`La palabra "${words[0]}" tiene ${words[0].length} letras`);

console.log(`Igual se puede presentar valores verdaderos u falsos ${booleanos[2]}`);

console.log(booleanos);

/*
Arrays - Propiedad
    .length -> devuelve el numero de pociciones que tiene un array 
*/ 
console.log(`Propiedad .length del array "numeros" = ${numeros.length}`);
/*
Arrays - Metodos
    Array.isArray(variable a evaluar) -> Devuelve true si la variable es un array.
*/ 
let numb = 4;
console.log(`La variable "numb" es un array? ${Array.isArray(numb)}`);
console.log(`La variable "numeros" es un array? ${Array.isArray(numeros)}`);
/* 
Eliminar elementos de un Array
    .shift() -> Elimina el primer elemento del array y devuelve ese elemento.
    .pop()   -> Elimina el ultimo elemento del array y devuelve ese elemento.
Los elementos elimnados pueden ser guardados en una variable.
*/ 
console.log(`Array sin uso de metodo = ${numeros}`);
numeros.shift();

console.log(`Array despues de el metodo shift() = ${numeros}`);

let numeros2 = [1,2,3,4,5];

console.log(`Array sin uso de metodo = ${numeros2}`);
numeros2.pop();

console.log(`Array despues del metodo pop() = ${numeros2}`);

let numer = [1,2,3,4,5];

console.log(`Valor de variable numer: ${numer}`);

let del_item = numer.shift();

console.log(`Valor de variable numer despues de shift : ${numer}`);
console.log(`Esto es el elemento eliminado y guardado en una variable : ${del_item}`);

/*
Añadir elementos al array
    .push(elemento1, elemento2, ...) -> agrega uno  o mas elementos al dinal del array y devuelve la  nueva longitud
    .unshift(elemento1, elemento2, ...) -> agrega unp o mas elementos al cominezp del array y devuelve la nueva longitud.
Al igual que con shift se puede guardar la nueva longitud en una variable.
*/ 
let nu = [1, 2, 3, 4, 5];

console.log(`Array nu : ${nu}`);
nu.push(1);

console.log(`Array nu con push : ${nu}`);
nu.unshift(7);

console.log(`Array nu con unshift : ${nu}`);

// ,indexOf() -> devuelve el primer indice del elemento que coincida con el valor especificadom o -1 si ninguno es encontrado.
console.log(nu.indexOf(7));

// .lastindexOf() -> Devuelve el ultimo indice del elemento que coincide con el valor especificado, o -1 si no es encontrado.
console.log(nu.lastIndexOf(1));

//  .reverse() -> invierte el orden de los elementos del array
console.log(nu.reverse());

//  .join('Separador') -> Devuelve un string con el separador que indiquemos(por defecto son comas).
    console.log(nu);
    console.log(nu.join(' '));

/* 
    .splice(a, b, items) -> Cambia el contenido de un array.
        a - indice de inicio desde donde se eliminaran los elementos si no hay el elementp (b) elimnara hasta el fin del array
        b - Numero de elementos que seran eliminados desde la posicion indicada por (a).
        items- Elementos a agregar en el caso que se agregen.
*/  

console.log(nu);
// nu.splice(3); elimina desde la pocicion 3 hasta el final del array
// nu.splice(2,2); elimina desde la pocicion 2 los valores que indiquemos 
// nu.splice(2,2,10,23,54); de esta forma eliminamos 2 parametros y agregamos 3 nuevos.
nu.splice(2,0,10,22,15); // de esta forma solo agregamos elementos y no eliminamos ningun elemento y solo se agregan mas
console.log(nu);

/*
 .slice(a,b) -> Extrae elementos  de un array desde el indice hasta el indice 'b'. Si no existe 'b' lo hsce desde el princio hasta el final, si no exite 'a' ni 'b' hace una copia del original.
*/
// let NewNu = nu.slice();

// console.log(nu);
// console.log(NewNu);

// let NewNu = nu.slice(2);

// console.log(nu);
// console.log(NewNu);

let NewNu = nu.slice(0,4);

console.log(nu);
console.log(NewNu);