
class Libro {
    constructor(nombre, autor) {
        this.nombre = nombre;
        this.autor = autor;
    }

    mostrarDatosEnConsola() {
        console.log(this.parcearText());
    }

    mostrarDatosEnAlerta() {
        alert(this.parcearText());
    }

    parcearText() {
        return `${this.nombre}, de ${this.autor}`;
    }

    getTitulo() {
        return this.nombre;
    }

    mostrarDatos(text = 'console') {
        if ( text === 'alert') {
            return this.mostrarDatosEnAlerta();
        } else if (text === 'console' || text =='') {
            return this.mostrarDatosEnConsola();
        }
            
    }
}

let unLibro = new Libro ('Ángeles y Demonios', 'Dan Brown');

console.log(unLibro)

// unLibro.mostrarDatosEnConsola()
unLibro.mostrarDatosEnAlerta()
let nuevolibro = new Libro('Fuego y Sangre', 'George R. R. Martin');
// let tituloDelNuevoLibro = nuevolibro.getTitulo();
// alert(tituloDelNuevoLibro);
// punto 6
nuevolibro.mostrarDatos('alert');
nuevolibro.mostrarDatos('console');
nuevolibro.mostrarDatos();


