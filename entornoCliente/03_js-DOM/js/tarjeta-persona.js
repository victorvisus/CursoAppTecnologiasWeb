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
console.log('Botón detectado:', btnAddEmpleado);

btnAddEmpleado.addEventListener('click', (_event) => {
  console.log('¡He hecho clic!');
  _event.preventDefault(); //para que no se recargue la pagina

  const empleado = crearEmpleado();
  console.log('Empleado creado:', empleado);
  init(empleado);
});

/**
 * Inicializa el proceso de guardar un empleado
 * Desbloquea el botón al finalizar el proceso
 * Muestra un mensaje de error si algo falla
 * Limpia el formulario si todo es ok
 * @param {_persona} - objeto con los datos del empleado
 * @return {void}
 */
async function init(_persona) {
  // Bloqueamos el botón o cambiamos el texto para feedback visual, simulo que los datos viajan a un servidor
  btnAddEmpleado.disabled = true;
  btnAddEmpleado.textContent = 'Guardando...';
  try {
    const empleadoConfirmado = await guardarEmpleadoServidor(_persona);

    //Crea la tarjeta con los datos del empleado
    makeCard(_persona);

    //Si todo es ok, limpiamos el formulario
    resetForm();
  } catch (error) {
    console.error(error);
    alert(error);
  } finally {
    alert('Empleado guardado');
    btnAddEmpleado.disabled = false;
    btnAddEmpleado.textContent = 'Agregar Empleado';
  }
}
/**
 * Crea un objeto persona con los valores recogidos en el formulario
 *
 * @return {Object} objeto persona con los valores de los input del formulario
 */
function crearEmpleado() {
  const persona = {
    pk_persona: generarId(),
    nombre: document.getElementById('name-id').value,
    profesion: document.getElementById('profesion-id').value,
    email: document.getElementById('email-id').value,
    telefono: document.getElementById('telefono-id').value,
    ubicacion: document.getElementById('ubicacion-id').value,
  };
  return persona;
}

/**
 * Crea una tarjeta con los datos de una persona
 *
 *
 * @param {Object} _persona - objeto con los datos de una persona
 * @return {void}
 */
function makeCard(_persona) {
  const personaKeys = Object.keys(_persona); //crea un array con las keys del objeto _persona

  //Selecciono el article, el container base que tiene todas las card
  const container = document.getElementById('empleados'); //selecciona el article

  //creo un section, el container-inner, la tarjeta
  const sectionCard = document.createElement('section'); //crea un section
  sectionCard.id = _persona.pk_persona;
  sectionCard.className = 'empleado card container-content'; //le agrega la clase
  container.append(sectionCard); //agrego el section al container article

  //mando crear el nodo del titulo con el nombre
  makeTitle(sectionCard, _persona[personaKeys[1]]);

  //mando crear los nodos, excepto el nombre, ya que lo he creado antes
  for (let i = 0; i < personaKeys.length; i++) {
    if (i !== 0 && i !== 1)
      makeNodos(sectionCard, personaKeys[i], _persona[personaKeys[i]]);
  }

  //agrego el boton eliminar
  const btnDel = makeBtn({
    textContent: 'Despedir Empleado',
    className: 'btn-del',
  });
  btnDel.onclick = delEmployee; //le agrega funcionalidad
  // falta agregar el btn a la tarjeta
  sectionCard.append(btnDel);
}

/**
 * Crea un header con un h2 que contiene el nombre de una persona
 * @param {_container} - contenedor padre
 * @param {_itemValue} - valor de la key del objeto persona
 * @return {void}
 */
function makeTitle(_container, _itemValue) {
  //header.empleado.container-content
  const titleHeader = document.createElement('header');
  titleHeader.className = 'empleado-info';
  const nombreTitulo = document.createElement('h2');
  nombreTitulo.textContent = _itemValue;

  titleHeader.append(nombreTitulo); //al header le agrego el h2.
  _container.append(titleHeader); //al section le agrego el header
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

/**
 * Resetea el formulario
 *
 * Elimina el contenido de los input del formulario
 * para que pueda ser rellenado de nuevo
 */
function resetForm() {
  //  document.getElementById('name-id').value = '';
  //  document.getElementById('profesion-id').value = '';
  //  document.getElementById('email-id').value = '';
  //  document.getElementById('telefono-id').value = '';
  // document.getElementById('ubicacion-id').value = '';

  //aplicar esto guardando dartos en un arrayu y recorriendo con un foreach para poner cada valor a 0
  const campos = [
    'name-id',
    'profesion-id',
    'email-id',
    'telefono-id',
    'ubicacion-id',
  ];
  campos.forEach((id) => {
    const e = document.getElementById(id);
    if (e) e.value = '';
  });
}

/**
 * Función que simula una petición de red
 */
function guardarEmpleadoServidor(empleado) {
  return new Promise((resolve, reject) => {
    console.log('⏳ Conectando con el servidor...');

    setTimeout(() => {
      // Simulación de error aleatorio (10% de probabilidad)
      if (Math.random() < 0.1) {
        reject(new Error('Error de conexión con la base de datos'));
      } else {
        console.log('✅ Empleado guardado con éxito');
        resolve(empleado);
      }
    }, 1500);
  });
}

/**
 * Devuelve un número aleatorio entre 1 y 10
 * @returns {number} Un número aleatorio entre 1 y 10
 */
function getRandomNumber() {
  const random = Math.random();
  const multiplied = random * 10;
  const rounded = Math.floor(multiplied);
  const result = rounded + 1;

  return result;
}

/**
 * Genera un identificador único para la cita en formato YYMMDDHHMMNN
 * @description El método genera un ID basado en la fecha y hora actual, formateado como YYMMDDHHMMNN
 * @returns {string} Identificador único en formato YYMMDDHHMMNN
 * @example "260305090001" para una cita en el 2026-03-05 a las 09:00 y el número 01
 */
function generarId() {
  const now = new Date(); // 1. Cogemos el momento exacto actual

  // 2. Extraemos el año y nos quedamos con los últimos 2 dígitos (ej: 2026 -> "26")
  const year = String(now.getFullYear()).slice(-2);
  // 3. Mes (se suma 1 porque en JS Enero es 0) y padStart para que siempre tenga 2 cifras (ej: "03")
  const month = String(now.getMonth() + 1).padStart(2, '0');
  // 4. Día, Hora y Minuto con el mismo formato de 2 cifras
  const day = String(now.getDate()).padStart(2, '0');
  const hour = String(now.getHours()).padStart(2, '0');
  const minute = String(now.getMinutes()).padStart(2, '0');

  // 5. Un número extra para evitar colisiones si se crean dos IDs en el mismo minuto
  const randomNumber = getRandomNumber();
  // 6. Lo unimos todo con "Template Strings" (las comillas invertidas)
  return `${year}${month}${day}${hour}${minute}${randomNumber}`;
}
