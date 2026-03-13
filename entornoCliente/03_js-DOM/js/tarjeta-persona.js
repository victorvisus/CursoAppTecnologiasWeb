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

btnAddEmpleado.addEventListener('click', (event) => {
  event.preventDefault(); //para que no se recargue la pagina

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
  const container = document.getElementById('empleados');

  const emplContainer = document.createElement('section');
  emplContainer.className = 'empleado container-content';

  const emplHeader = document.createElement('header');
  emplHeader.className = 'empleado-info';
  const nombreTitulo = document.createElement('h2');
  nombreTitulo.textContent = _persona.nombre;

  emplHeader.append(nombreTitulo);
  emplContainer.append(emplHeader);
  container.append(emplContainer);
}
