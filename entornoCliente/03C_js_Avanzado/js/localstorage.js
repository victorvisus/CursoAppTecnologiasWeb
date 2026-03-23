// localStorage y sessionStorage ---------------------------------
// localStorage es un almacenamiento local del navegador
// sessionStorage es un almacenamiento local del navegador

//Comprobar que el navegador es compatible
if (typeof Storage !== 'undefined') {
  console.log('El navegador soporta el almacenamiento local');
} else {
  console.log('El navegador no soporta el almacenamiento local');
}

// localStorage.setItem('clave', 'valor');    //guarda el valor
// localStorage.getItem('clave');    //devuelve el valor
// localStorage.removeItem('clave');    //borra la clave
// delete localStorage.clave;    //borra la clave
// localStorage.clear();    //borra todo el almacenamiento local
// localStorage.key(index);    //devuelve la clave del index, de 0 a localStorage.length
// localStorage.length;    //propiedad que devuelve el numero de claves

/*
Acerca de LocalStorage:
https://es.javascript.info/localstorage
Además javascript.info es guía de referencia completa y reconocida para JS.

*/

// Guardar y obtener un dato
localStorage.setItem('Nombre', 'Miguel Antonio');
console.log(`El nombre es: ${localStorage.getItem('Nombre')}`);

// A través de un form capturar el nombre de un usuario, con un boton, y gruardarlo y mostrarlo desde localstorage
const btnSubmit = document.getElementById('btn-submit');
btnSubmit.addEventListener('click', (_event) => {
  _event.preventDefault(); //para que no se recargue la pagina

  const usr = {
    fname: document.getElementById('fname').value,
    lname: document.getElementById('lname').value,
  };

  let nameUsr = usr.fname + ' ' + usr.lname;
  localStorage.setItem('usr', nameUsr);

  let nameLocal = localStorage.getItem('usr');
  console.log(nameLocal);

  alert(localStorage.getItem('usr'));

  const print = document.createElement('p');
  print.textContent = `El nombre de usuario es: ${localStorage.getItem('usr')}`;
  document.body.append(print);
});
