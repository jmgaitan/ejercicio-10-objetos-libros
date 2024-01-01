/* Parte 2:

Copiar de la parte 1 el constructor Libro del archivo JS. Cerrar el proyecto anterior para evitar confusiones y abrir la carpeta con la 2da parte en VSCode. 
Abrir el HTML directamente en el browser, con y sin Live Server, para ver cómo se comporta.


7 - Pegar en el JS el constructor Libro de la parte anterior. Modificar el constructor Libro para que reciba todos estos parámetros:
titulo, autor, precio, isbn, paginas, idioma, foto, sinopsis.


*/ 
class Libreria {
  constructor(libros) {
      this.libros = libros;
  }

  cargarElementoConLibros(id_destino) {
      const destino = document.getElementById(id_destino);
      let htmlLibros = '';

      this.libros.forEach(libro => {
          htmlLibros += libro.getHtmlArticle();
      });

      destino.innerHTML = htmlLibros;
  }
}
class Libro {
    constructor(titulo, autor, precio, isbn, paginas, idioma, foto, sinopsis) {
        this.titulo = titulo;
        this.autor = autor;
        this.precio = precio;
        this.isbn = isbn;
        this.paginas = paginas;
        this.idioma = idioma;
        this.foto   = foto;
        this.sinopsis = sinopsis
    };
    //    10 - Crear en el constructor Libro el método getHtmlArticle() que retorne el HTML (un string) correspondiente a 
    // un <article> como los de prueba que están dentro del <section id="libros"> del HTML (En la carpeta img existe el archivo "foto.jpg" para utilizar para este objeto de prueba.),
    // pero utilizando los valores almacenados en sus propias propiedades para generar el contenido HTML.
      getHtmlArticle(){let sectionid = document.getElementById('libros');
      let newArticle = document.createElement('article');
      let h2title = document.createElement('h2');
      h2title.textContent = this.titulo;
      newArticle.appendChild(h2title);
      
      let h3title = document.createElement('h3');
      let spanh3 = document.createElement('span');
      spanh3.classList.add('de');
      spanh3.textContent = 'de ';
      // --------------------------------------------------------------------------------------------------
      let divArticleInfo = document.createElement('div')
      divArticleInfo.classList.add('informacion');
     // --------------------------------------------------------------------------------------------------
      let aDiv = document.createElement('a')
      aDiv.setAttribute('href','img/'+ this.foto);
      aDiv.setAttribute('title', 'Presioná para ver la imagen en tamaño grande');
      aDiv.setAttribute('target', '_blank');
      let imgDiv = document.createElement('img');
      imgDiv.setAttribute('src', 'img/' + this.foto)
      imgDiv.setAttribute('alt', 'portada de '+ this.titulo)
      aDiv.append(imgDiv)
      divArticleInfo.appendChild(aDiv);
     // --------------------------------------------------------------------------------------------------
     let pDivBuy = document.createElement('p');
     let spanPPrecio = document.createElement('span');
     spanPPrecio.textContent = 'Precio :';
     let spanPMonto = document.createElement('span');
     spanPMonto.textContent = this.precio;
     pDivBuy.appendChild(spanPPrecio);
     pDivBuy.appendChild(spanPMonto);
     divArticleInfo.appendChild(pDivBuy);
     // --------------------------------------------------------------------------------------------------
      let pdivISBN = document.createElement('p');
      let spanPIsbn = document.createElement('span');
      spanPIsbn.setAttribute('title', 'International Standard Book Number');
      spanPIsbn.textContent = 'ISBN:';
      let spanPClasificacion = document.createElement('span');
      spanPClasificacion.textContent = this.isbn;
      pdivISBN.appendChild(spanPIsbn);
      pdivISBN.appendChild(spanPClasificacion)
      divArticleInfo.appendChild(pdivISBN)
     // --------------------------------------------------------------------------------------------------
     let pdivPages = document.createElement('p');
     let spanPPages = document.createElement('span');
     spanPPages.textContent='Páginas:';
     let spanPPagesNum = document.createElement('span');
     spanPPagesNum.textContent= this.paginas;
     pdivPages.appendChild(spanPPages);
     pdivPages.appendChild(spanPPagesNum);
     divArticleInfo.appendChild(pdivPages)
    // --------------------------------------------------------------------------------------------------
    let pdivIdioma = document.createElement('p');
    let spanIdioma = document.createElement('span');
    spanIdioma.textContent = 'Idioma:';
    let spanIdi = document.createElement('span');
    spanIdi.textContent = this.idioma;

    pdivIdioma.appendChild(spanIdioma);
    pdivIdioma.appendChild(spanIdi);
    divArticleInfo.appendChild(pdivIdioma);
    // --------------------------------------------------------------------------------------------------
    // --------------------------------------------------------------------------------------------------
      // Primero, agrega el span al h3
      h3title.appendChild(spanh3);
      
      // Luego, agrega el texto del autor
      h3title.append(this.autor);
      
      
      newArticle.appendChild(h3title);
      newArticle.appendChild(divArticleInfo);
      // --------------------------------------------------------------------------------------------------
      // --------------------------------------------------------------------------------------------------
      let divArticleSinopsis = document.createElement('div')
      divArticleSinopsis.classList.add('sinopsis');
      // --------------------------------------------------------------------------------------------------
     let pSinopsis = document.createElement('p');
     pSinopsis.textContent = this.sinopsis
      
      
      divArticleSinopsis.appendChild(pSinopsis);
      newArticle.appendChild(divArticleSinopsis);
      // --------------------------------------------------------------------------------------------------
      let divArticleGradiente = document.createElement('div');
      divArticleGradiente.classList.add('gradiente-blanco');
      newArticle.appendChild(divArticleGradiente);
      // --------------------------------------------------------------------------------------------------
      sectionid.appendChild(newArticle);

    }

}    /*    8 - Utilizar los parámetros recibidos para asignárselos a propiedades del objeto que tengan el mismo nombre.
    
    9 - Crear un nuevo objeto con esta información de prueba:
        */
        let libro1 =new Libro ('Carrie','Stephen King', '$2.399', '9789871138999', '256',  'Español',  'foto.jpg',  'El legendario debut de Stephen King, sobre una marginada adolescente y la venganza que ejerce sobre sus compañeros de clase.')
        //    Visualizar en la consola si el objeto quedó bien construido, probando acceder a sus propiedades.
        console.log(libro1)
        let libro2 = new Libro('Sol de medianoche', 'Stephenie Meyer', '$4.399,00', '9789877387308', '800', 'Español', '677881.jpg', 'Cuando Edward Cullen y Bella Swan se conocieron en Crepúsculo; nació una historia de amor icónica. Pero hasta ahora; sus fans solo conocen la historia a través de Bella. Por fin los lectores podrán vivir la versión de Edward en la muy esperada novela Sol de medianoche. La inolvidable historia; contada a través de los ojos de Edward; toma un cariz nuevo y definitivamente oscuro. Conocer a Bella es lo más perturbador e intrigante que le ha sucedido en todos sus años como vampiro. A medida que se nos desvelan detalles fascinantes del pasado de Edward y la complejidad de sus pensamientos más íntimos; entenderemos por qué este es el conflicto interno que define su vida. ¿Cómo puede justificar los impulsos de su corazón si significan poner a Bella en peligro? En Sol de Medianoche; Stephenie Meyer nos transporta de nuevo a un mundo que ha cautivado a millones de lectores y nos trae una novela épica sobre los profundos placeres y las consecuencias devastadoras de un amor inmortal.');
        let libro3 = new Libro('Despierta', 'Lorena Pronsky', '$3.049,00', '9789501516227', '336', 'Español', '677866.jpg', 'La mayoría de las decisiones que tomamos en nuestra vida las hacemos estando dormidos. Casi arrastrados por un estado de inercia. Cuando reaccionamos; el paso ya está dado y el resto del tiempo nos quedamos ahí -atrapados- intentando hacer algo con eso que ni advertimos haber decidido. Hay cosas que no se deshacen. Querer intentarlo es verle la cara a la frustración. Por el contrario; se hace necesario un viaje a nuestro mundo interior. Si registramos lo que hacemos y sentimos; ganamos libertad y la posibilidad urgente de conocer nuestros deseos más profundos. ¿Quién soy? ¿Qué quiero? ¿Cómo lo quiero? Ser conscientes de lo que sentimos: decirlo; palparlo y nombrarlo son formas en las que logramos adueñarnos de nuestra vida. Cuanto antes despertemos a nuestro mundo interior; más sabias y honestas serán nuestras decisiones. Despierta es el paso hacia una existencia verdadera. Una invitación a conocernos y animarnos a pisar firme y fuerte. Siempre hacia donde nos guíen nuestros latidos. Sí. Los nuestros. Lorena Pronsky.');
        let libro4 = new Libro('Confianza ciega', 'John Katzenbach', '$4.399,00', '9789877801668', '592', 'Español', '678518.jpg', 'Cuando Maeve desaparece sin dejar rastro, su hija Sloane no se sorprende: si su madre tenía que desaparecer, solo podía ser en extrañas circunstancias. Sin embargo, esta vez es distinto: al cabo de unos días de la desaparición de su progenitora, Sloane recibe un paquete que esta misma le ha mandado, con varios miles de dólares, la escritura de su casa y un arma. También hay una nota con las siguientes palabras: "Vendelo todo. Quedate la pistola. Practica. Huye. Ahora". A solo dos semanas de graduarse como arquitecta y en medio de esta encrucijada personal, Sloane recibe la oferta de trabajo de un misterioso millonario que quiere construir seis memoriales para seis personas que murieron, de nuevo, en extrañas circunstancias. A medida que Sloane investiga esas muertes, el consejo de su madre se hace cada vez más presente. ¿En quién puede confiar ahora Sloane? ¿Tendrá tiempo de seguir las indicaciones de su madre cuando llegue al final del laberinto que ha ido creando su siniestro empleador?.');



        let htmlNuevosLibros = libro1.getHtmlArticle()+ libro2.getHtmlArticle()+libro3.getHtmlArticle()+libro4.getHtmlArticle();
        elemLibrosContainer.innerHTML += htmlNuevosLibros
        


    /*





11 - De forma dinámica, agregar al contenido existente en el <section> del DOM el contenido generado por getHtmlArticle() del objeto libro1 creado en el punto 9.

Si esto funciona adecuadamente en el browser deberían ahora figurar otro libro después de los dos ya existentes en el código HTML original.


12 - Instanciar 4 objetos Libro para crear 4 libros a partir de los datos de libros reales comentados en el archivo JS.

13 - Lograr que el siguiente código muestre todos los libros (existentes en el HTML + los generados de forma dinámica) en el <section> ubicado en el HTML:
  let htmlNuevosLibros = libro1.getHtmlArticle()
                       + libro2.getHtmlArticle()
                       + libro3.getHtmlArticle()
                       + libro4.getHtmlArticle()
  elemLibrosContainer.innerHTML += htmlNuevosLibros



14 - Eliminar todos los <article> que están de prueba en el <section> del HTML, dejando solo el <h1> existente.

Si todo funciona adecuadamente, JS debería cargar el <section> con todos los libros instanciados a partir del constructor Libro.


15 - Éxitos! 😄



----------------

## DESAFÍO ##

Parte 3:

16 - Con todo lo anterior, lograr que el siguiente código funcione:
let id_destino = 'libros';
// ... código ...
let libros = [libro1, libro2, libro3, libro4];
let libreria = new Libreria(libros);
libreria.cargarElementoConLibros(id_destino);

17 - Si eso funciona, se puede acortar a:
// ... código ...
(new Libreria([libro1, libro2, libro3, libro4])).cargarElementoConLibros('libros');
*/


