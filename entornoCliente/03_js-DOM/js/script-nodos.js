//Agregar nuevos elementos al DOM

/*
-appendChid(): Añade al final.
-prepend(): Añade al principio.
-insertBefore(): Inserta antes de otro elemento.
-append(): Más moderno, puede añadir múltiples elementos.
*/
function crearNodo() {
  const newDiv = document.createElement('div');
  newDiv.id = 'nuevaDiv';
  newDiv.className = 'nuevaDiv';
  document.querySelector('#padre').appendChild(newDiv);
  console.log(` ${newDiv} #newDiv agregada`);

  const appendParagraph = document.createElement('p');
  appendParagraph.textContent =
    'Hola! Soy un Nuevo parrafo, añadido, al final junto a otros elementos, con append()';
  appendParagraph.id = 'appendParagraph';
  appendParagraph.className = 'parrafo-esp';
  appendParagraph.setAttribute(
    'data-info',
    'parrafo creado por js appendParagraph',
  );

  const prependParagraph = document.createElement('p');
  prependParagraph.textContent =
    'Hola! Soy un Nuevo parrafo, añadido, al principio, con prepend()';
  prependParagraph.id = 'prependParagraph';
  prependParagraph.className = 'parrafo-esp';
  prependParagraph.setAttribute(
    'data-info',
    'parrafo creado por js prependParagraph',
  );

  const newImage = document.createElement('img');
  newImage.src =
    './img/unrestricted___digital_grunge_texture_17_by_frozenstocks_d2bkgbk.jpg';
  newImage.alt = 'Imagen de prueba';
  newImage.width = 400;

  //con .append es más moderno y permite agregar varios elementos a la vez.
  newDiv.append(appendParagraph, newImage);
  newDiv.prepend(prependParagraph);
}
function insertBefore() {
  const newDiv = document.getElementById('nuevaDiv');
  const beforeParagraph = document.createElement('p');
  beforeParagraph.textContent =
    'Hola! Soy un Nuevo parrafo, añadido, al principio y antes del prependParagraph, con before()';
  beforeParagraph.id = 'beforeParagraph';
  beforeParagraph.className = 'parrafo-esp';
  beforeParagraph.setAttribute(
    'data-info',
    'parrafo creado por js beforeParagraph',
  );

  newDiv
    ? newDiv.insertBefore(beforeParagraph, prependParagraph)
    : alert('No se ha creado el newDiv, presiona el otro boton.');
}

const btnCrear = document.getElementById('btn-crear');
btnCrear.addEventListener('click', crearNodo);

const btnInsertBefore = document.getElementById('btn-insert-before');
btnInsertBefore.addEventListener('click', insertBefore);

// link a google, al principio del contenedor
const btnLinkGoogle = document.getElementById('btn-linkGoogle');
btnLinkGoogle.addEventListener('click', () => {
  const googleLink = document.createElement('a');
  googleLink.href = 'https://google.com';
  googleLink.target = '_blank';
  googleLink.textContent = 'Ir a Google';
  googleLink.style.color = 'red';
  googleLink.style.textDecoration = 'none';
  googleLink.style.fontWeight = 'bold';
  document.querySelector('#padre').prepend(googleLink);
});
