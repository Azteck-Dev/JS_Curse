/*
	Estructuras Switch

Sintaxis simple:

	switch(evaluacion){
		case 1:
			//codigo
			break;
		case 2:
			//codigo
			break;
		default:
			//codigo
	}

Sintaxis multiple:
	switch(evaluacion){
		case 1: 			Con esto puedo ejecutar codigo
		case 2: 			si se cumplen los siguientes
		case 3: 			casos.
			//codigo
			break;
		default:
			//codigo
	}
*/ 

let num = 4;

/*----------  Sintaxis simple  ----------*/

switch(num){
	case 1:
		console.log('La variable tiene el valor de 1.');
		break;
	case 2:
		console.log('La variable tiene el valor de 2');
		break;
	default:
		console.log('La variable tiene el valor de 3');
}

/*----------  Sintaxis multiple  ----------*/

switch(num){
	case 1:
	case 3:
	case 5:
		console.log(`El numero ${num} es impar`);
		break;
	case 2:
	case 4:
	case 6:
		console.log(`El numero ${num} es par`);

}

/*----------  Sintanxis multiple encadenada  ----------
Me permite establecer una serie de caso en la cual se 
evalua los casos dependiendo de la informacion ingresada
el ciclo iniciara desde el valor que corresponda sin 
importar el orden en que fue escrito el codigo.
*/
let numb = 6;
let output = 'Salida: ';

switch (numb) {
  case 6:
    output += '¿Y ';
  case 1:
    output += 'Cuál ';
    output += 'Es ';
  case 2:
    output += 'Tu ';
  case 3:
    output += 'Nombre';
  case 4:
    output += '?';
    console.log(output);
    break;
  case 5:
    console.log('!');
    console.log(output);
    break;
  default:
    console.log('Por favor, selecciona un valor del 1 al 6.');
}
