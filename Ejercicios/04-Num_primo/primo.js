/*
Escribir un programa que pida un numero entero mayor que 1 y que escriba si es un numero primo o no(Un numero primo es aquel que solo es divisible por si mismo y la unidad).
*/ 

let num = prompt('Introduzca un numero:');
let divisor = 0;

if(num == 1){
    console.log('El numero no es valido.')
}
else{
    for(let i=2; i<num; i++){
        if(num % i == 0){
            console.log(`El numero ${num} no es primo`);
            divisor++
            break;
        }   
    }
}

if(divisor == 0){
    console.log(`El numero ${num} es primo`);
}
