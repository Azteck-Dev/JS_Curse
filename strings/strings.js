/*
 Un metodo es tolo que la cadena puede hacer por ser cadenas
 porpiedades son las caracteristicas de la cade por ser cadenas

	cadena.metodo([parametro])
	cadena.propiedad
*/

let cadena = "Hola Mundo";



/* --------- Propiedades --------- */

// length: es una propiedad que nos devuelve la longitudad de una cadena(los espacios son contados)

console.log(cadena.length);


/* --------- Metodos --------- */

// toUpperCase(): Devuelve la cadena de texto en mayusculas
console.log(cadena.toUpperCase());

// toLowerCase(): Devuelve la cadena de texto en minusculas
console.log(cadena.toLowerCase());

// indexOf(string):  Devuelve la posicion en la que se encuentra el string, si no es encontrado devolvera -1.
console.log(cadena.indexOf('u'));

// replace(valor a buscar, valor nuevo): Remplaza el fragmento de la cadena que le digamos y pone el valor nuevo.
console.log(cadena.replace('Mundo', 'Udemy'));

//substring(inicio[,fin]): Extrae los caracteres desde el inicio hasta el final, si no se incute un final  siempre se extraera hasta el final.
console.log(cadena.substring(3, 6)); 
//3 indica los caracteres desde que se iniciara la subtraccion, y 7 indica el final de la subtraccion.

// slice(inicio[,fin]): Igual que substring pero admite valores negativos , si no se indican valores negativos empezara desde el final al principio.
console.log(cadena.slice(0,-5));

// trim(): Elimina los espacion al principio y al final de una cadena de strings

let cadena2 = '  Hola Udemy esto es un metodo trim  ';
console.log(cadena2,',Sin trim()');
console.log(cadena2.trim(),'con trim()');


/* ES6 */

// startsWith(valor[,inicio]): Nos sirve para saber si la cadena empieza con ese valor, devolviedo false o true segun sea el caso.
console.log(cadena.startsWith('H'));

// endsWith(valor[,longitud]): Hace lo mismo que startsWith pero este nos muestra el final de la cadena, devolviendo true o false segun sea el caso.
console.log(cadena.endsWith('Mundo'));

// includes(valor[.inicio]): Hace lo mismo que indexOf pero este devuelve true o false
console.log(cadena.includes('n'));

// repeat(valor): Nos sirve para repetir un string el numero de veces que le indiquemos.
let cadena3 = 'Hola ';
console.log(cadena3.repeat(3));
console.log('r'.repeat(3));

/* Template Strings */ 

let name = 'Juan';
let last = 'Lopez';
let age = 22;
// metodo normal
console.log("Hola " + name + " " + last + ".Tienes : " + age + " años.");

// usando template strings
console.log(`Hola ${name} ${last}. Tienes : ${age} años.`);
console.log(`Hola proximamente cumpliras ${age}.`);





