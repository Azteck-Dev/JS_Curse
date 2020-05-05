/*
Ciclo For es un bucle determinado ya que hay que especificar cuantas vueltas dara durante su ejecucion. Su sintaxys se compone de 3 partes.
    -Iniciacion de variable
    -Numero de vueltas
    -Incremento o decremeto

    Sintaxys:
        for(i=0; i<=3; i++){
            // codigo a ejecutar
        }

    1ra vuelta i=0, i<=3? - 0 -i++
    2da vuelta i=1, i<=3? - 1 -i++
    3ra vuelta i=2, i<=3? - 2 -i++
    4ta vuelta i=3, i<=3? - 3 -i++
    5ta vuelta i=4, i<=4? - fin del bucle.

*/
let numb = [21,23,56,77,33,23];

for(let i=0;i<numb.length;i++){
    console.log(`i vale ${i} y el valor de esa posicion en el array es ${numb[i]}`);
}

/*
 Palabras reservadas para bucles :
    -break
    -continue
*/
let nombre = ['Mesach', 'Liliana', 'Areli', 'Diana'];

for(let i=0; i<nombre.length; i++){
    if(nombre[i] == 'Areli'){
        // break rompe el bucle al llegar al parametro establecido en el if
        // contunue es similar con la diferencia que unicamente omite el indice indicado en el if
    }
}
/*
Bucle FOR OF / FOR IN
Simplifica el bucle for tradicional sin tener que darle un numero de vueltas ni realizar un incremento.

Sintaxys:
    let names = ['Paco', 'Jose', 'Paula', 'Maria'];

    for(let name of names){                 for(let name in names){
        console.log(name);                      console.log(name);
    }                                       }

    1ra vuelta : Paco                       1ra vuelta: 0
    2da vuelta : Jose                       2da vuelta: 1
    3ra vuelta : Paula                      3ra vuelta: 2
    4ta vuelta : Maria                      4ta vuelta: 3
*/

let names = ['Paco', 'Jose', 'Paula', 'Maria'];

for(let name of names){
    console.log(name);
}

for(let nam in names){
    console.log(nam);
}