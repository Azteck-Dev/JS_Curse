/*
Spreed Operator es un operador de extencion cuya sinanxis es (...)
*/

const numbers = [-12, 13, 4, 7, 1, 34];

console.log(...numbers);

/*---------  Enviar elementos en un array a una funcion. ---------*/

const addNumber = (a, b, c) => {
    console.log(a + b + c);
}

let numbToadd = [1, 2, 3];

addNumber(...numbToadd);
//Es usado para que la funcion reconosca los valores que contiene el array y estos ocupen las pociciones a, b, y c respectovamanete.


/*--------- Agregar un Array a otro Array. ---------*/

let users = ['Mesach', 'Diana', 'Areli', 'Liliana'];
let newUsers = ['Arlette', 'Nayra', 'Silvia', 'Carlos'];

users.push(...newUsers);
console.log(users);

/*--------- Copiar arrays ---------*/

let array1 = [1, 2, 3, 4];
let array2 = [...array1];

console.log(array2);

/*--------- Concatenar Arrays ---------*/
let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7];

let conactenarArray = arr1.concat(array2);
let conactenarArray2 = [...arr1, ...arr2];

/*--------- Enviar un numero indefinido de argumentos a una funcion (parametros REST) ---------*/
let parametro;
const restParam = (...parametro) => {
    console.log(parametro);
}

restParam(1, 2, 3, 4, 5);

/*--------- Libreria Math ---------*/
const numb = [-12, 13, 4, 7, 1, 34];

console.log(Math.max(...numb));
console.log(Math.min(...numb));

/*--------- Eliminar elemntos duplicados ---------*/

const letras = [12, 34, 2, 6, 2, 7, 4, 5, 12, 7];

console.log([...new Set(letras)]);