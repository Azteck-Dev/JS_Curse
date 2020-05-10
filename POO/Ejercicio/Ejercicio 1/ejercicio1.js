/*
Crear una clase libro
La clase libro tendra titulo, autor, año y genero.
Crear un método que devuelva toda la informacion del libro 
Pide 3 libros y guardalos en un array
Los libros se introduciran  al arrancar el programa pidiendo los datos con prompt.
Validar que los campos no se introduscan vacios.
Validar que el año sea un numero y tenga 4 digitos.
Validar que el genero sea: Aventura, terror o fantasia.
Crea una funcion que muestre todos los libros.
Crea una funcion que muestre los autores ordenados alfabeticamente.
Crear una funcion que pida genero y muestre la informacion de los libros que pertenezcan a ese genero usando el metodo que devuelca la informacion.
*/ 

class Libros{

    constructor(titulo, autor, year, genero){
        
        this.titulo = titulo;
        this.autor = autor;
        this.year = year;
        this.genero = genero;
    }
    // Me regresa la informacion del libro.
    bookInfo(){
        return `${this.titulo} es un libro de ${this.genero} escrito por ${this.autor} publicado en ${this.ano}.`;
    }
    // Retornar informacion de los autores disponibles
    getAutor(){
        return this.autor;
    }
}

let libro = [];

while(books.length < 1) {
    let tittle = prompt('Introduce el titulo del libro:');
    let autor = prompt('Introduce el escritor del libro:');
    let year = prompt('Introduce el año depublicacion del libro:');
    let genero = prompt('Introduce el genero del libro:').toLowerCase();

    if(
        tittle != '' &&
        autor != '' &&
        !isNaN(year) &&
        year.length == 4 &&
        genero != '' && 
        (genero == 'aventura' || genero == 'terror' || genero == 'fantasia')) {

            libro.push(new Libros(tittle, autor, year, genero));
    }
}


const showBooks = () =>{
    console.log(libro);
}

showBooks();