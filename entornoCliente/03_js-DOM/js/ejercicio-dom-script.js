/**
 * Ejercicio se pregunta al usuario en un prompt su edad. si es mayor de 18 años se le presenta un párrafo con Lorem Ipsum. Si es menor o igual a 18 años se le presenta un texto en que diga: “usted tiene que aprender latín” y además a continuación un link a la página web de lenguas preferida, por ejemplo:
https://scholalatina.it/es/scholae-latinae-cursos-de-latin/

El contenedor para los elementos preexistentes es un < div>, y dentro del < div> hay un < h1> con el título “Acción formativa en lenguas”
 */

function ejercicionDOM() {
  let edad;
  edad = prompt('Cuantos años tienes?');
  const enlace = document.createElement('a');
  enlace.href = 'https://scholalatina.it/es/scholae-latinae-cursos-de-latin/';
  enlace.textContent =
    'https://scholalatina.it/es/scholae-latinae-cursos-de-latin/';
  enlace.target = '_blank';

  const parrafo = document.createElement('p');
  parrafo.textContent = 'lorem ipsum y demas';

  if (edad <= 18) {
    parrafo.textContent = 'Tienes que aprender latin';

    document.querySelector('div').append(parrafo, enlace);
    return;
  }

  document.querySelector('div').append(parrafo);
}

const btnInit = document.getElementById('comenzar');
btnInit.addEventListener('click', ejercicionDOM);
