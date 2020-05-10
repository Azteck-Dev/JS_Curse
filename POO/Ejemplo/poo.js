
class Persona{

    constructor(nombre, apellido, edad, ciudad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.ciudad = ciudad;

        this.datos = `Me llamo ${nombre} ${apellido}, tengo ${edad} años y naci en la ${ciudad}.`;
    }

    // cuando se esta fuera del constructos se tiene que hacer referencia al parametro del objeto.
    saludar(){
        return `Hola soy ${this.nombre} ${this.apellido} y sere un hokage deveras!`;
    }
    presentar(){
        return `Hola soy ${this.nombre} ${this.apellido} y tengo ${edad} años.`;
    }
}

const Naruto = new Persona('Naruto', 'Uzumaki', 17, 'Aldea oculta de la lluvia');
const himawari = new Persona('Himawari', 'Uzumaki', 7);
const sasuke = new Persona('Sasuke', 'Uchiha', 17, 'Aldea oculta de la Hoja');

console.log(Naruto.datos);
console.log(himawari.saludar());
console.log(sasuke.datos);