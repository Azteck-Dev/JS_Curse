/*
Arrays - Métodos II
*/

/*
.from(iterable) => convierte en array el elemento iterable.(Un elemento iterable es todo aquel elemento que se puede recorrer, un string por ejemplo).

let word = 'Hola mundo';

console.log(Array.from(word));
console.log(word.split(' '));
*/

/*
.sort([callback]) => Ordena los elementos de un arrays alfabeticamente(valor unicoide), si se le pasa un callback los ordena en funcion del algoritmo que le pasemos.('callback' es una funcion utilizada por otra función).

let letters = ['b', 'z', 'f', 'a', 'r'];
let numbers = [4, 88, 3, 1, 6, 10, 35];

console.log(letters);
console.log(letters.sort());

//Cabe aclarar que solo funciona con caracteres tipo strings. Para que funcione ennumero es necesario parasarle el callback 
console.log(numbers.sort());
console.log(numbers.sort((a, b) => a - b));

funcion menorMayor(a, b) {
    if(a-b < 0) return -1;
    if(a-b > 0) return 1;
    if(a == b) return 0;
}

funcion mayorMenor(a, b) {
    if(b-a < 0) return -1;
    if(b-a > 0) return 1;
    if(b == a) return 0;
}
*/

/*
    .forEach(callback(currentValue, [index])) => ejecuta la función indicada una vez por cada elemento del array.

    const number = [1,34,45,23,18];

    number.forEach((elemento) => console.log(elemento));
    number.forEach((elemento, index) => console.log(`${elemento} esta en la  posición ${index}`));
*/

/*
.some(callback) => Comprueba si al menos un elemento del array cumple la condición.
.every(callback) => Comprueba si todos los elementos del array cumplen la condición.

    let words = ['html', 'css', 'js', 'php', 'mysql'];

    console.log(words.some(words => words.length > 3));
    console.log(words.every(words => words.length > 2));
*/

/*
.map(callback) => Transforma todos los elementos del array y devuelve un nuevo array.

    const numbers = [2,7,3,9,22,18];
    const frases = ['hola', 'adios'];

    numbers.map((numero) => console.log(numero*2));
    frases.map((palabra) => console.log(palabra+' Mesach'));
*/

/*
.filter(callback) => Filtra todos los elementos del array que cumplan la condicion y devuelve un nuevo array.
    const numbers = [2,7,3,9,22,18];
    const filtro = numbers.filter((numero) => numero > 8);

    console.log(filtro);
*/

//.reduce(callback) => Reduce todos los elementos del array a un unico valor.
    const numbers = [2,7,3,9,22,18,4];

    console.log(numbers.reduce((a,b) => a+b));


    const users = [
        {
            user: 'user1',
            online: true
        },
        {
            user: 'user2',
            online: true
        },
        {
            user: 'user3',
            online: false
        },
        {
            user: 'user4',
            online: true
        },
        {
            user: 'user5',
            online: true
        },
        {
            user: 'user6',
            online: false
        }
    ];

const UsOnline = users.reduce((cont, user) => {
    if(user.online)
        cont++;
        return cont; 
},0);

console.log(`Hay ${UsOnline} usuarios conectados.`)