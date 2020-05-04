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

for( key in persona){
    console.log(persona[key])
}