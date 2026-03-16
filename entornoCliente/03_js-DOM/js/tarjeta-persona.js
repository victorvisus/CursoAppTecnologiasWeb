/**
 * Crear un formulario que:
 * 1. Recoja los datos de una persona
  const persona = {
    nombre: "Ana García",
    profesion: "Desarrolladora Web",
    email: "ana.garcia@ejemplo.com",
    telefono: "+34 612 345 678",
    ubicacion: "Madrid, España"
  };
 * 2. Genere un objeto persona
 * 3. "Pueble" con los datos de ese objeto un div, article section o algo que simule una trarjeta en html
 */
const btnAddEmpleado = document.getElementById('add-empleado');

btnAddEmpleado.addEventListener('click', (_event) => {
  _event.preventDefault(); //para que no se recargue la pagina

  const empl = crearEmpleado();
  crearHTML(empl);
});

function crearEmpleado() {
  const persona = {
    nombre: document.getElementById('name-id').value,
    profesion: document.getElementById('profesion-id').value,
    email: document.getElementById('email-id').value,
    telefono: document.getElementById('telefono-id').value,
    ubicacion: document.getElementById('ubicacion-id').value,
  };
  return persona;
}

function crearHTML(_persona) {
  console.log(_persona);
  const _personaKeys = Object.keys(_persona);
  console.log(_personaKeys);

  const container = document.getElementById('empleados');

  const emplSectionContainer = document.createElement('section');
  emplSectionContainer.className = 'empleado container-content';
  container.append(emplSectionContainer); //agrego el section al container article

  //header.empleado.container-content
  const emplHeader = document.createElement('header');
  emplHeader.className = 'empleado-info';
  const nombreTitulo = document.createElement('h2');
  nombreTitulo.textContent = _persona.nombre;

  emplHeader.append(nombreTitulo); //al header le agrego el h2.
  emplSectionContainer.append(emplHeader); //al section le agrego el header

  //div.empleado-info
  const emplInfo = document.createElement('div');
  emplInfo.className = 'empleado-info';
  emplInfo.role = 'group';
  //agrega 4 veces el div.empleado-info
  for (let i = 0; i < 4; i++) {
    emplSectionContainer.append(emplInfo.cloneNode(true)); //al section le agrego el div
  }
  //Seleccion y guarda en const cada uno de los div.empleado-info
  const divFirst = document.querySelector(
    '.empleado:last-child div.empleado-info:nth-child(2)',
  ); //divFirst
  const divSecond = document.querySelector(
    '.empleado:last-child div.empleado-info:nth-child(3)',
  ); //divFirst
  const divThirst = document.querySelector(
    '.empleado:last-child div.empleado-info:nth-child(4)',
  ); //divFirst
  const divFourth = document.querySelector(
    '.empleado:last-child div.empleado-info:nth-child(5)',
  ); //divFirst

  console.log(`Primer div:
    ${divFirst}`); //imprimo los divFirst);
  console.log(`Second div:
     ${divSecond}`); //imprimo los divSecond);
  console.log(`Thirst div:
     ${divThirst}`); //imprimo los divThirst);
  console.log(`Fourth div:
     ${divFourth}`); //imprimo los divFourth);

  //Creo un elemento h3 para poner el titulo de cada item, en cada momento
  let h3Item = document.createElement('h3');
  let pItem = document.createElement('p');
  console.log('creadas variables h3 y p');

  //Empleado Profesión
  h3Item.textContent = _personaKeys[1]; //pongo el titulo
  pItem.textContent = _persona.profesion; //pongo la profesion
  divFirst.append(h3Item); //al primer div.empleado-item le agrego el h3 y el p
  divFirst.append(pItem); //al primer div.empleado-item le agrego el p
  console.log('Creado Profesion', divFirst);

  //boton eliminar
  const btnDel = makeBtn({
    textContent: 'Despedir Empleado',
    className: 'btn-del',
  });
  btnDel.onclick = delEmployee; //le agrega funcionalidad
  // falta agregar el btn a la tarjeta
  emplSectionContainer.append(btnDel);
}

function makeNodos(_itemKey, _itemValue) {}
/**
 * Construyendo un boton, tiene uno parametros por default, que son el texto del boton y su clase
 * @param {*} param0.textContent, default 'Eliminar'
 * @param {*} param0.className, default 'btn-del'
 * @returns
 */
function makeBtn({ textContent = 'Eliminar', className = 'btn-del' } = {}) {
  const newBtn = document.createElement('button');
  newBtn.textContent = textContent;
  newBtn.className = className;
  return newBtn;
}

/**
 * Funcion para eliminar un empleado
 */
function delEmployee() {
  this.parentElement.remove();
  alert('Fallecido');
}
