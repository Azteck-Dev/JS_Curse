/*
Tipos de condicionales:
	Simples -> Solo comprueban una cosa.
	Compuestos -> Comprueban una cosa y su caso contrario.
	Multiples -> Controlan varios casos.

	Sintaxys:
		Condicion Simple
			if(Condicion)//Codigo a ejecutarse

			if(condicion){
				//Codigo 1
				//Codigo 2
			}
		Condicion Compuesta
			if(condicion)//codigo a ejevcutar
			else //codigo a ejecutar en caso contrario
*/ 

/* ---------- Condicional Simple ---------- */ 
let num = 5;

if(num > 0){
	console.log(`${num} es mayor que 0`);
}


/*----------  Condicional Compuesto  ----------*/

if(num > 0){
	console.log(`${num} es mayor que 0.`);
}
else{
	console.log(`${num} es menor que 0`);
}

/*----------  Condicional Multiple  ----------*/
if(num > 0){
	console.log(`${num} es mayor que 0.`);
}
else if(num < 0){
	console.log(`${num} es menor que 0`);
}
else{
	console.log(`${num} es igual a 0`);
}


/*----------  Operadores logicos  ----------*/
/*
&& and
|| or
*/ 

let num1 = 0;
let num2 = 5;

// al usar (&&) se requiere que ambas condiciones se cumplan
// al usar (||) solo se requiere que una de las condicionales se cumplan
if(num1 > 0 || num2 > 0)
{
	console.log(`${num1} y ${num2} son mayores que 0`);
}



let word = 'holis que tal';

if(word.length > 7){
	console.log(`${word} tiene mas de 7 letras`);
}
else if(word.length < 10){
	console.log(`${word} tiene menos de 10 letras`);
}
else{
	console.log(`${word} tiene 4 letras`);
}


let respuesta = false;

if(respuesta){
	console.log('repuesta es verdad');
}

if(!repuesta){
	console.log('repuesta es falso');
}