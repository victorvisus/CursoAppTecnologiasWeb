//Ejercicio 1: Seleccionar por ID y Cambiar Texto
//Problema: Selecciona el encabezado < h1> 
// con el ID tituloPrincipal y cambia su texto a «DOM Manipulado con Éxito».
//let titulo = document.getElementById("tituloPrincipal");
//titulo.textContent = "Dom Manipulado con Éxito";
// Seleccionamos el H1 usando su ID
const titulo = document.getElementById('tituloPrincipal');

// Verificamos si el elemento existe antes de intentar
// modificarlo (buena práctica)
if (titulo) {
    // Cambiamos el contenido de texto del elemento
    titulo.textContent = "DOM Manipulado con Éxito";
    console.log("Texto del título cambiado.");
} else {
    console.log("Elemento con ID 'tituloPrincipal' no encontrado.");
}
//Ejercicio 2: Seleccionar por ID y Cambiar Estilo
//Problema: Selecciona el párrafo con ID parrafoIntro 
// y cambia su color de fondo a lightblue.

const parrafo = document.getElementById('parrafoIntro');
parrafo ? (parrafo.style.backgroundColor = "lightblue")
    && console.log("Color de fondo cambiado") :
    console.log("NO es posible cambiar")

// Ejercicio 3: Seleccionar el Primer Elemento por
// Clase con querySelector
// Problema: Selecciona el primer div que tenga 
// la clase caja y añade un borde rojo de 2px.
const elementoPorClase = document.querySelector("div.caja");
if (elementoPorClase) {
    elementoPorClase.style.border = "2px solid red"
    console.log("Cambio a border rojo dos píxeles exitoso ")
}
else {
    console.log("No es posible cambiar, porque no se recupera un div con clase caja")
}

//Ejercicio 4: Seleccionar Todos los Elementos por Clase con querySelectorAll
//Problema: Selecciona todos los elementos < li> que 
// tengan la clase item y cambia el color de su texto a blue.
const elementosPorClase = document.querySelectorAll("li.item");
if (elementosPorClase.length > 0) { // elementosPorClase es array
    /*for (let ppp=0; ppp<elementosPorClase.length; ppp++){
        console.log("elementosPorClase: -> "+elementosPorClase[ppp])
        console.log("El tipo buscado es: -> " + typeof elementosPorClase[ppp])
        if (typeof elementosPorClase[ppp]==="object")
            elementosPorClase[ppp].style.color = "blue"
        else
            console.log("No hay elemento de tipo <li> y que sea clase item")
    }*/

    elementosPorClase.forEach(cadaElemento => {
        if (!cadaElemento) {
            console.log("No hay elemento de tipo <li> y que sea clase item")
        }
        else {
            cadaElemento.style.color = "blue";
        }
    })/**/
}
else {
    console.log("No se encuentra un array de elementos de tipo <li> y que sea clase item")
}
/*
Ejercicio 5: Seleccionar por Etiqueta y Cambiar Atributo con querySelector
Problema: Selecciona la imagen (<img>) con ID imagenDemo (usando querySelector con el ID) y cambia su atributo src a «nueva_imagen.png» y su alt a «Nueva Imagen Cargada».    
*/
const imgagenDemo = document.querySelector("#imagenDemo")
if (imgagenDemo) {
    imgagenDemo.src = "/nueva_imagen.png"
    imgagenDemo.alt = "Nueva imagen cargada"
    console.log("imagen cambianda con éxito")
}
else {
    console.log("No se encuentra esa imagen")
}

/*Ejercicio 6: Seleccionar por Selector CSS Complejo (Descendiente)
Problema: Selecciona el párrafo (<p>) que está dentro del div que tiene la clase importante y añade la clase CSS resaltado.*/
// Usamos un selector descendiente: '.importante p' selecciona un <p> dentro de un elemento con clase 'importante'
const parrafoImportante = document.querySelector('.importante p');

if (parrafoImportante) {
    // Usamos classList.add() para añadir una clase CSS sin borrar las existentes. Se entiende que esa clase existe como estilo dado por el usuario.
    parrafoImportante.classList.add('resaltado');
    console.log("Clase 'resaltado' añadida al párrafo dentro del div importante.");
} else {
    console.log("Párrafo dentro de '.importante' no encontrado.");
}
/*
Ejercicio 7: Usar getElementById para Obtener Valor de Input y Mostrarlo

Problema: Crea una función mostrarEntrada (que se llama al hacer clic en el botón con ID botonMostrar). Dentro de la función, obtén el valor escrito en el input con ID entradaUsuario y muéstralo en el párrafo con ID textoMostrado.
*/
function mostrarEntrada() {
    const inputUsuario = document.getElementById('entradaUsuario')
    const parrafoAModificar = document.getElementById('textoMostrado')
    parrafoAModificar.textContent = inputUsuario.value // para capturar el texto de un input se usa value, no textContent.
}
/*
Ejercicio 8: Seleccionar un Elemento Específico de una Lista con querySelector

Problema: Selecciona el segundo elemento <li> de la lista (<ul> con ID listaItems) usando querySelector y un selector CSS específico (:nth-child) y cambia su innerHTML para que diga «Elemento 2 – Modificado!».
*/
const elemento2Li = document.querySelector("#listaItems :nth-child(2)")
elemento2Li.innerHTML = "Elemento 2 - Modificado!"

/*
Ejercicio 9: Combinar querySelectorAll y getElementById

Problema: Selecciona la lista <ul> con ID listaItems usando getElementById. Luego, dentro de esa lista, selecciona todos los <li> que tengan la clase importante usando querySelectorAll (aplicado sobre el elemento de la lista, no sobre document) y añade un borde verde.
*/

const listaUL = document.getElementById("listaItems")
if (!listaUL) {
    console.log("la lista no ordenada con id 'listaItems' no se encuentra")
}
else {
    const elementosLI = listaUL.querySelectorAll(".importante")
    if (elementosLI.length === 0) { //al ser array, mejor comprobar por longitud
        console.log("Esta lista no ordenada carece de elementos etiquetados con clase 'importante'")
    }
    else {
        elementosLI.forEach(cadaElemento => { cadaElemento.style.border = "3px dotted green"; cadaElemento.style.width = "fit-content" })
    }
}
/*
Ejercicio 10: Usar querySelector para una Función Ligada a un Botón

Problema: Crea la función cambiarTexto (asociada al botón con ID botonCambiar). Dentro de ella, usa querySelector para encontrar el primer párrafo (p) que sea hermano adyacente (+) del botón (asumiendo que está justo después, o busca el párrafo dentro del div padre) y cambia su texto a «Texto cambiado por el botón». (Nota: Una forma más robusta sería darle un ID/clase al párrafo a cambiar, pero este ejercicio practica selectores). Vamos a hacerlo buscando el párrafo dentro del div padre del botón.
*/
function cambiarTexto() {
    const botonAdyacente = document.querySelector("#botonCambiar")
    // modo con id, que no es el propósito
    //const parrafoCambiado = document.querySelector("#parrafo-a-cambiar")
    //parrafoCambiado.textContent = "Texto cambiado por el botón versión 2"
    
    if (botonAdyacente.previousElementSibling) {
        botonAdyacente.previousElementSibling.textContent = "Texto cambiado por el botón"
        console.log("Se ha encontrado el hermano anterior al botón, que es en este caso un párrafo")
    }
    else {
        console.log("No se halla un hermano anterior")
        if (botonAdyacente.nextElementSibling) {
            botonAdyacente.nextElementSibling.textContent = "Texto cambiado por el botón"
            console.log("Se ha encontrado el hermano anterior al botón, que es en este caso un párrafo")
        }
        else{
            console.log("Se ha encontrado el hermano siguiente al botón, que es en este caso un párrafo")
        }
    }
}

/**
 * La siguiente función se ejecuta desencadenada por click del ratón
 * sobre botón y simplemente verficia que un elemento ancestro o el propio
 * tiene la clase indicada .contenedor
 */
// Busca el contenedor padre con la clase '.contenedor' al hacer clic en un botón. Al usar querySelector encuentra el primer elemento que coincide con el selector, que aquí es un button.
document.querySelector('button').addEventListener('click', function(e) {
  const container = e.target.closest('.contenedor');
  if (container) {
    console.log('Encontrado:', container);
  }
  else{
      console.log('Elemento contenedor NO Encontrado:');
  }
});