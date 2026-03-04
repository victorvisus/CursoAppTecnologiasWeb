/*
Ejercicio 1: Seleccionar por ID y Cambiar Texto
Problema: Selecciona el encabezado < h1> con el ID tituloPrincipal y cambia su texto a «DOM Manipulado con Éxito».
*/
function cambiarTexto() {
  // Obtener el elemento por su ID
  const titulo = document.getElementById('tituloPrincipal');
  //Verificamos si el elemento existe antes de intentar cambiar su texto
  if (titulo) {
    // Cambiar el texto del elemento
    titulo.textContent = 'DOM Manipulado con Éxito';
    console.log;
    ('Texto del título cambiado correctamente.');
  } else {
    console.error('Elemento con ID "tituloPrincipal" no encontrado.');
    return;
  }
}

/*
Ejercicio 2: Seleccionar por ID y Cambiar Estilo
Problema: Selecciona el párrafo con ID parrafoIntro y cambia su color de fondo a lightblue.
*/
function cambiarFondo() {
  const parrafo = document.getElementById('parrafoIntro');

  parrafo
    ? (parrafo.style.backgroundColor = 'lightblue') &&
      console.log('Color de fondo del párrafo cambiado a lightblue.')
    : console.error('Elemento con ID "parrafoIntro" no encontrado.');
}

/*
Ejercicio 3: Seleccionar el Primer Elemento por Clase con querySelector
Problema: Selecciona el primer div que tenga la clase caja y añade un borde rojo de 2px.
*/
function cambiarBorde() {
  const caja = document.querySelector('div.caja');

  if (caja) {
    caja.style.border = '2px solid red';
    console.log(
      'Borde rojo de 2px añadido al primer elemento con clase "caja".',
    );
  } else {
    console.error('No se encontró ningún elemento con la clase "caja".');
  }
}

/*
jercicio 4: Seleccionar Todos los Elementos por Clase con querySelectorAll
Problema: Selecciona todos los elementos <li> que tengan la clase item y cambia el color de su texto a blue.
*/
function cambiarColorItems() {
  const items = document.querySelectorAll('li.item');
  if (items.length > 0) {
    items.forEach((item) => {
      item.style.color = 'blue';
    });
    console.log(
      'Color de texto de los elementos con clase "item" cambiado a blue.',
    );
  } else {
    console.error('No se encontraron elementos con la clase "item".');
  }
}

/*
Ejercicio 5: Seleccionar por Etiqueta y Cambiar Atributo con querySelector
Problema: Selecciona la imagen (<img>) con ID imagenDemo (usando querySelector con el ID) y cambia su atributo src a «nueva_imagen.png» y su alt a «Nueva Imagen Cargada».
*/
function cambiarImagen() {
  alert('Función cambiarImagen pendiente por hacer');
}
