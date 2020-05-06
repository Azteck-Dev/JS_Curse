/*
Dada un array de letras, solicita un número de DNI y calcula que letra le corresponde. El número no puede ser negativo ni tener más de 8 dígitos. La posición de la letra es el resultado del módulo del numero introducido entre 23.

    const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B ',' N ',' J ',' Z ',' S ',' Q ',' V ',' H ',' L ',' C ',' K ',' E ',' T '] ;
*/

const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B ',' N ',' J ',' Z ',' S ',' Q ',' V ',' H ',' L ',' C ',' K ',' E ',' T '] ;

const dni = prompt('Introduce tu DNI: ');

if(dni.length == 8 && parseInt(dni)>0){

    let modulo =  dni%23;

    console.log(`Tu DNI completo es ${dni}${letras[modulo]}`);
}
else if(dni.length < 8){
    
    console.log(`${dni} no es un numero valido por favor introduce al menos 8 dijitos`);
}
