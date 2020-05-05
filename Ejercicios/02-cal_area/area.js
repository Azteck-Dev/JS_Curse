/*
Escribe un programa que pueda calcular el area de 3 figuras geometricas, triangulo, rectangulo y circulo. En primer lugar pregunta de qe figura se quiere calcular el area, despues solicita los daros que necesites para calcularlo.
    triangulo = b*h/2
    rectangulo = b*h
    circulo = pi * r2(pi por radio al cuadrado)
*/ 

let figura = prompt('Introdusca la figura de la que quiere clacular el area: Traingulo, Rectangulo o Circulo.');

let base;
let altura;
let radio;

switch(figura){
    case 'triangulo':
        base = prompt('Ingrese la base del triangulo: ');
        altura = prompt('Ingrese la altura del triangulo: ');
        console.log(`El area del triangulo es: ${(base*altura)/2}cm2.`);
        break;
    case 'rectangulo':
        base = prompt('Ingrese la base del rectangulo:');
        altura = prompt('Ingrese la altura del rectangulo: ');
        console.log(`El area del rectangulo es: ${base*altura}cm2`);
        break;
    case 'circulo':
        // la funcion Math.pow me permite usar un exponente en un numero
        radio = prompt('Ingrese el radio del circulo: ');
        console.log(`El area del circulo es: ${Math.PI*Math.pow(radio,2)}`);
        break;
    default: console.log('Por favor introduzca alguna de las figuras validas.');
}


/*  ----------------------- Esta fue mi solucion para el ejercicio ----------------------- */ 

// let figura = prompt('Figuras disponibles,Triaungulo, Rectangulo y Circulo.    De que figura quiere calcular el area:');

// if(figura == 'triangulo' || figura == 'Triangulo'){
//     let base = prompt('Introduzca la base: ');
//     let altura = prompt('Introduzca la altura: ');
//     // formula b*h/2.
//     let area = base*altura/2;

//     console.log(`El area del Triangulo con base ${base} cm2 y altura ${altura} cm2 es: ${area}cm2.`)
// }
// else if(figura == 'rectangulo' || figura == 'Rectangulo'){
//     let base = prompt('Introduzca la base: ');
//     let altura = prompt('Introduzca la altura: ');
//     // formula b*h.
//     let area = base*altura;

//     console.log(`El area de Rectangulo con base ${base} cm2 y altura ${altura} cm2 es de ${area} cm2.`)
// }
// else if(figura == 'circulo' || figura == 'Circulo'){
//     let radio = prompt('Introduzca el radio del circulo: ');
//     let radio2 = radio * radio; 
//     let pi = Math.PI;
//     // formula pi*radio^2.
//     let area = pi * radio2;

//     console.log(`El area del circulo con un radio de ${radio} es de ${area}.`)

    
// }
// else{
//     console.log(`"${figura}" no es una de las opciones disponibles por favor introduzca una figura valida de las siguientes.`);

//     console.log('Triangulo');
//     console.log('Rectangulo');
//     console.log('Circulo');
// }