/*
Se utiliza cuando una condicion sera true o false, al igual que if, su ejecucion puede terner una o varias
sentencias, en este caso iran separadas por coas y entre parentesis.

(condicion) ? true:|false:
(condicion) ? 
    (primera sentencia, 
    segunda sentencia)
    :
    (primera sentencia,
    segunda sentencia)
*/ 

let num = 2;

// (x % y == 0), sacar modulo sobre 2 y si es igual a 0 es par.

if(num % 2 == 0){
    console.log(`${num} es par`);
}
else{
    console.log(`${num} es inpar`);
}

(num % 2 == 0) ? console.log(` ${num} es par`) : console.log(` ${num} es inpar`);

(num % 2 == 0) ?
    (
        console.log(`${num} es par`),
        console.log(`${num} es par 2`)
    )
    :
    (
        console.log(`${num} es inpar`),
        console.log(`${num} es inpar`)
    )