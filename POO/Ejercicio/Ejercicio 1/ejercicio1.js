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

class Book {

    constructor(tittle, author, year, gener) {
        this.tittle = tittle;
        this.author = author;
        this.year = year;
        this.gener = gener;
    }

    bookInfo() {
        return `El libro ${this.tittle} del genero ${this.gener} escrito por ${this.author} fue publicado en ${this.year}.`;
    }

    showAuthor() {
        return this.author;
    }

    showGener() {
        return this.gener;
    }
}

let books = [];
let cant = parseInt(prompt('Cuantos libros deseas registrar?'));

while (books.length < cant) {
    let titulo = prompt('Ingresa el titulo del libro:').toLowerCase();
    let autor = prompt('Ingresa el autor del libro:').toLowerCase();
    let salio = prompt('Ingresa el año de publicación del libro:');
    let genero = prompt('Ingresa el genero al que pertenece:').toLowerCase();

    if (titulo != '' &&
        autor != '' &&
        !isNaN(salio) &&
        salio.length == 4 &&
        (genero == 'terror' || genero == 'fantasia' || genero == 'aventura')) {
            books.push(new Book(titulo, autor, salio, genero));
    }
}

// Muestra el catalogo de libros
const showAllbooks = () => {
    console.log(books);
}

// Muestra los autores disponibles
const showAllauthors = () => {
    let autores = [];

    for (const libro of books) {
        autores.push(libro.showAuthor());
    }

    console.log(autores.sort());
}

// Busqueda por las categorias disponibles.
const showGenero = () => {
    const genero = prompt('Introduce el genero que desea buscar: ');

    for (const libro of books) {
        if (libro.showGener() == genero) {
            console.log(libro.bookInfo());
        }
    }
}

showAllbooks();
showAllauthors();
showGenero();