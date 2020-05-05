/*
Los bucles son usados cuando queremos que un trozo de codigo se repita, existen bucles determinasdos e indeterminados. 
    -Los determinados se usan cuando especificamos el numero de veces que se va a repetir.
    -Los indeterminados se usan cuando no sabemos el numero de veces que se van a reoetir,

Sintaxys:

    bucle{
        //codigo a jecutar;
    }

*/

 /*
 bucle WHILE , es un bucle indeterminado ya que no se sabe cuantas vueltas dara durante su ejecucion, su sintaxys se compone de una unica parte.

    while(condicion){
        //codigo a jecutar;
    }
DO WHILE es igualmente un bucle indeterminado su sintaxys se compone de 2 partes, codigo a jecutar y codigo de salida. Su principal diferencia es que este se ejecutara almenos una vez se cumpla o no la condicion, y despues sera necesario que se siga cumpliendo para repetir el bucle.

    do{
        //codigo a jecutar;
    }
    while(condicion);
  */

  let pass = '';

/* while(pass != 'hola'){
     pass = prompt('Introduzca su password: ');
  }

  console.log('Fin del bucle');*/

  do{
      pass = prompt('Ingrese su password: ');
  }
  while(pass != 'hola')