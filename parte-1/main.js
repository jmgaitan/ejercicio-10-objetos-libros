
class Libro {
    constructor(nombre,autor) {
        this.autor = autor;
        this.nombre = nombre;
        this.mostrarDatosEnConsola = function(){
            return console.log(parceartext()) 
        }
        this.mostrarDatosEnAlerta = function(){
            return alert(this.parceartext(this.Libro));
        }
        this.parceartext = function (this.libro){
           return text = (nombre +', de '+ autor)
        }
        };
    }


let unLibro = new Libro ('Ángeles y Demonios', 'Dan Brown');

console.log(unLibro)

// unLibro.mostrarDatosEnConsola()
unLibro.mostrarDatosEnAlerta()