/* objeto math se utiliza para operaciones matematicas mas especificas y es un objeto estatico, por lo que hay que usar su nombre para poder ser utilizado.

	Propiedades:
		Math.E
		Math.Pi

	Metodos:
		Math.abs(x): Devuelve el valor absoluto de 'x'.
		Math.ceil(x): Devulve el entero mas mayor o igual que un numero.
		Math.floor(x): Devuelve el entero mas menor o igual que un numero.
		Math.pow(x, y): Devuelce la potencia de x elevada a la y.
		Math.random(): Genera un nuemero Pseudoaleatorio entre 0 y 1.
		Math.round(x): Devuelve el valor de un numero redondeado al entero mas cercano.
		Math.sing(x): Devuelve el signo de la x, que indica si x es positivo, negativo o cero.
		Math.sqrt(x): Devuelve la raiz cuadrada de x.
*/

console.log(Math.E);
console.log(Math.PI);


let num = 5.7;

console.log(Math.abs(num));
console.log(Math.ceil(num));
console.log(Math.floor(num));
console.log(Math.pow(2,3)); //Math.pow(base,exponente).
// console.log(Math.round(Math.random()*(max - min)+min));
console.log(Math.round(Math.random()*100)); //El numero aleatorio sera de entre 0 a 100.
console.log(Math.random()*(10 - 5)+5); //round no arroja un entero.
console.log(Math.sign(5));
console.log(Math.sqrt(9));
