/*
Escribe un programa que pueda calcular el area de 3 figuras geometricas, triangulo, rectangulo y circulo. En primer lugar pregunta de qe figura se quiere calcular el area, despues solicita los daros que necesites para calcularlo.
    triangulo = b*h/2
    rectangulo = b*h
    circulo = pi * r2(pi por radio al cuadrado)
*/

class Calc {

    constructor(base, heigth, radius) {
        this.base = base;
        this.heigth = heigth;
        this.radius = radius;
    }

    area_triangle() {
        return `${this.base*this.heigth/2}`;
    }

    area_rectangle() {
        return `${this.base*this.heigth}`;
    }

    area_cirlce() {
        const PI = Math.PI;
        let radio = Math.pow(this.radius, 2);
        return `${PI*radio}`;
    }
}

let figura = prompt('Ingresa la figura de la que deseas calcular su area.\n(Triangulo, Rectangulo o Circulo.)').toLowerCase();

switch (figura) {
    case 'triangulo':
        base = parseInt(prompt('Ingresa la base: '));
        heigth = parseInt(prompt('Ingresa la altura: '));
        const triangulo = new Calc(base, heigth);

        console.log(`El aréa del triangulo es de ${triangulo.area_triangle()} cm2.`);
        document.write(`El aréa del triangulo es de ${triangulo.area_triangle()} cm2.`);
        break;
    case 'rectangulo':
        base = parseInt(prompt('Ingresa la base: '));
        heigth = parseInt(prompt('Ingresa la altura: '));
        const rectangulo = new Calc(base, heigth);

        console.log(`EL aréa del rectangulo es de ${rectangulo.area_rectangle()} cm2`);
        document.write(`El aréa del rectangulo es de ${rectangulo.area_rectangle()} cm2.`);
        break;
    case 'circulo':
        radius = parseInt(prompt('Ingresa el radio del circulo: '));
        const circulo = new Calc(null, null, radius);

        console.log(`El aréa del circulo es de ${circulo.area_cirlce()} cm3`);
        document.write(`El aréa del circulo es de ${circulo.area_cirlce()} cm2.`);
        break;
    default:
        console.log(`No podemos sacar el area del ${figura}, pronto podremos esta atento :)`);
}