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

class book{

    constructor(tittle, author, year, gener){
        this.tittle = tittle;
        this.author = author;
        this.year = year;
        this.gener = gener;
    }

    showBook(){
        return `El libro ${this.tittle} del genero ${this.gener} escrito por ${this.author} fue publicado en ${this.year}.`;
    }

    showAuthor(){
        return this.author;
    }
}