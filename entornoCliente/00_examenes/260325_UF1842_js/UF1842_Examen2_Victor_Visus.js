/** EJERCICIO 1
 * Crear una función en Javascript tal que cuando uno cualquiera de los tres radio-buttons se selecciona se muestre un mensaje, tipo alert, diciendo que opción se seleccionó.
 * Indicación: hacer uso de las funciones tipo getElementsByXXX(…) o querySelectorXXX(…), que se consideren adecuadas así como de la adecuada estructura de control en bucle para gestionar la tarea pedida. El evento desencadenante y el nombre de su acción pueden implementarse en cada elemento o bien en un script separado.
 * */

/** EJERCICIO 2
 * 2. Añadir entre body y /body un elemento input de tipo texto (type=”text”) con valor inicial a cadena vacía (“”) de modo que al pasar el ratón (no al hacer click) sobre el contenido de cualquiera de los tres radio-buttons anteriores actualice el contenido de ese input con el contenido textual de dicho radio-button (Opcion1, etc). Indicación: implementar el método addEventListener(…) que captura la escucha y desencadena la acción.
 *
 * */
const opcion = document.querySelectorAll('input[type="radio"]'); //Ejercicio 1
const cajaTexto = document.querySelector('input[name="valor-opcion"]'); //Ejercicio 2

for (let i = 0; i < opcion.length; i++) {
  //Ejercicio 1
  opcion[i].addEventListener('change', () => {
    alert(`Has seleccionado la opcion ${opcion[i].value}`);
  });
  //Ejercicio 2
  opcion[i].addEventListener('mouseenter', () => {
    cajaTexto.value = opcion[i].value;

    //Ejercicio 3
    escanearNodos(document.body);
  });
}

/**
 * 3. Muestra a través de mensajes de consola la totalidad de los Nodos (no sólo los elementos, sino también comentarios y textos) contenidos en el código html del ejercicio 2 antes  y después de haber ejecutado el código Javascript  del mismo ejercicio.
 * */

function escanearNodos(nodoPadre) {
  console.log(nodoPadre);
  for (let i = 0; i < nodoPadre.childNodes.length; i++) {
    escanearNodos(nodoPadre.childNodes[i]);
  }
}
const nodoPadre = document.body;
escanearNodos(nodoPadre);

/**
 * 4. Completar esta función asíncrona para devolver el nombre (name) del personaje de la serie: “Rick and Morty”:
 * */

async function obtenerPersonaje() {
  try {
    const response = await fetch('https://rickandmortyapi.com/api/character/1');
    const data = await response.json();
    console.log(data.name);
  } catch (error) {
    console.error('Error: Personaje no encontrado', error);
  }
}
obtenerPersonaje();

/**
 * 5. Crear la clase Personaje que se basa en la anterior API y se compone de los atributos: nombre (el nombre del personaje) y url. Modificar la plantilla del ejercicio 4 para que sea un método de dicha clase capaz de crear o actualizar un objeto con el nombre del personaje (primer nivel del API) y la url del primer episodio.
 */

class Personaje {
  constructor(name = null, url = null) {
    this.name = name;
    this.url = url;
  }
  async obtenerPersonaje() {
    try {
      const response = await fetch(this.url);
      const data = await response.json();

      this.name = data.name;
      this.url = data.episode[0];
    } catch (error) {
      console.error('Error: Personaje no encontrado', error);
    }
  }
}
const rick = new Personaje(null, 'https://rickandmortyapi.com/api/character/1');
rick.obtenerPersonaje().then(() => {
  console.log(rick);
});
