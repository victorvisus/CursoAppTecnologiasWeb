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

  //creo los nodos, excepto el nombre
  for (let i = 0; i < _personaKeys.length; i++) {
    if (i !== 0)
      makeNodos(
        emplSectionContainer,
        _personaKeys[i],
        _persona[_personaKeys[i]],
      );
  }

  //boton eliminar
  const btnDel = makeBtn({
    textContent: 'Despedir Empleado',
    className: 'btn-del',
  });
  btnDel.onclick = delEmployee; //le agrega funcionalidad
  // falta agregar el btn a la tarjeta
  emplSectionContainer.append(btnDel);
}

/**
 * Crea los nodos
 *
 * @param {*} _container
 * @param {*} _itemKey
 * @param {*} _itemValue
 */
function makeNodos(_container, _itemKey, _itemValue) {
  console.log(
    `Creando ${_itemKey}, con ${_itemValue}, dentro de ${_container}`,
  );

  //Crea el div.empleado-info
  const divItem = document.createElement('div');
  divItem.className = 'empleado-info item';
  divItem.role = 'group';
  //agrega el div.item
  _container.append(divItem); //al section le agrego el div
  console.log(divItem);

  //Creo un elemento h3 para poner el titulo de cada item, en cada momento
  const h3Item = document.createElement('h3');
  h3Item.textContent = _itemKey; //pongo el titulo
  divItem.append(h3Item); //al primer div.empleado-item le agrego el h3

  // cReo un elemento p para poner el valor de cada item
  const pItem = document.createElement('p');
  pItem.textContent = _itemValue; //pongo la profesion
  divItem.append(pItem); //al primer div.empleado-item le agrego el p
  console.log('creadas h3 y p');

  console.log('Creado Profesion', divItem);
}

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
