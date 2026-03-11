/**
 * Galería Dinámica:
 * • Crear un HTML con un contenedor para la galería.
 * *• Añadir un input para URL de imagen y botón "Agregar".
 * *• Implementar función que cree elementos '<img>' dinámicamente.
 * *• Cada imagen debe tener un botón "Eliminar".
 */

function delImg() {
  this.parentElement.remove();
  alert('Imagen eliminada');
}

function addImg(url, caption) {
  const container = document.querySelector('#gallery');

  const fig = document.createElement('figure');
  fig.className = 'gallery-item';

  const img = document.createElement('img');
  img.src = url;
  img.alt = caption;
  img.title = caption;
  img.loading = 'lazy';
  img.onerror = function () {
    console.error('Error al cargar la imagen');
    alert('Error al cargar la imagen');
  };

  const cap = document.createElement('figcaption');
  const h3 = document.createElement('h3');
  h3.textContent = caption;

  //boton eliminar
  const btnDel = document.createElement('button');
  btnDel.textContent = 'Eliminar';
  btnDel.className = 'btn-del';

  btnDel.onclick = delImg; //le agrega funcionalidad

  cap.append(h3);
  fig.append(img, cap);
  fig.prepend(btnDel);
  container.append(fig);
}

const btnAdd = document.querySelector("input[type='button']");
btnAdd.addEventListener('click', () => {
  //captura el valor del input y lo guarda en una variable para enviarlo a la funcion
  const url = document.querySelector("input[name='link-img']").value;
  const caption = document.querySelector("input[name='caption']").value;

  addImg(url, caption);
});
