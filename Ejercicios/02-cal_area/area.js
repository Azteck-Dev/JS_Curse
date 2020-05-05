/*
Escribe un programa que pueda calcular el area de 3 figuras geometricas, triangulo, rectangulo y circulo. En primer lugar pregunta de qe figura se quiere calcular el area, despues solicita los daros que necesites para calcularlo.
    triangulo = b*h/2
    rectangulo = b*h
    circulo = pi * r2(pi por radio al cuadrado)
*/ 

let figura = prompt('Figuras disponibles,Triaungulo, Rectangulo y Circulo.    De que figura quiere calcular el area:');

if(figura == 'triangulo' || figura == 'Triangulo'){
    let base = prompt('Introduzca la base: ');
    let altura = prompt('Introduzca la altura: ');
    // formula b*h/2.
    let area = base*altura/2;

    console.log(`El area del Triangulo con base ${base} cm2 y altura ${altura} cm2 es: ${area}cm2.`)
}
else if(figura == 'rectangulo' || figura == 'Rectangulo'){
    let base = prompt('Introduzca la base: ');
    let altura = prompt('Introduzca la altura: ');
    // formula b*h.
    let area = base*altura;

    console.log(`El area de Rectangulo con base ${base} cm2 y altura ${altura} cm2 es de ${area} cm2.`)
}
else if(figura == 'circulo' || figura == 'Circulo'){
    let radio = prompt('Introduzca el radio del circulo: ');
    let radio2 = radio * radio; 
    let pi = Math.PI;
    // formula pi*radio^2.
    let area = pi * radio2;

    console.log(`El area del circulo con un radio de ${radio} es de ${area}.`)

    
}
else{
    console.log(`"${figura}" no es una de las opciones disponibles por favor introduzca una figura valida de las siguientes.`);

    console.log('Triangulo');
    console.log('Rectangulo');
    console.log('Circulo');
}