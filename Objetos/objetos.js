const persona = {
    name: 'Carlos',
    age: 27,
    son: ['Juan', 'Maria', 'Roberto', 'Laura','Carlos']
}

// console.log(persona.name);
// console.log(persona.age);
// console.log(persona.son[0]);
// console.log(persona.son[1]);
// console.log(persona.son[2]);
// console.log(persona.son[3]);
// console.log(persona.son[4]);

// for( key in persona){
//     console.log(persona[key])
// }

// La forma de recorrer el array en un objeto es de la siguiente manera

// for(const son of persona.son){
//     console.log(son);
// }


console.log(`Hola ${persona.name} tienes ${persona.age} años, y tus hijos se llaman ${persona.son.join(', ')} `)
