// URL de API de prueba que devuelve datos de usuarios
/* const url = 'https://jsonplaceholder.typicode.com/users/1';
fetch(url)
  .then((response) => {
    console.log('Respuesta recibida:', response);
    return response.json(); // Convertir a JSON
  })
  .then((data) => {
    console.log('Datos del usuario:', data);
    console.log('Nombre:', data.name);
    console.log('Email:', data.email);
  })
  .catch((error) => {
    error.log('Error al obtener datos:', error);
  }); */

// Otra forma de escribirlo
/* fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log('Datos del usuario:', data);
    console.log('Nombre:', data.name);
    console.log('Email:', data.email);
  })
  .catch((error) => {
    error.log('Error al obtener datos:', error);
  }); */

async function obtenerCita() {
  console.log(
    '\n// funcion obtenerCita ///////////////////////////////////////////////////////',
  );
  try {
    //ruta de la api
    const response = await fetch('https://type.fit/api/quotes');

    //comprobamos si la respuesta es valida
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    //obtenemos los datos
    const data = await response.json();

    console.log('\n//mostramos un dato');
    console.log('cita: ' + data[0].text + ' autor: ' + data[0].author);

    console.log('\n//mostramos todos los datos');
    let cont = 1;
    data.forEach((e) => {
      console.log(`%c cita ${cont}: ${e.text} %c autor: ${e.author}`);
      cont++;
    });
  } catch (error) {
    console.error('Fallo en la petición fetch:', error.message);
  } finally {
    console.log(
      '\n// fin de la funcion obtenerCita /////////////////////////////////////////////',
    );
  }
}
obtenerCita();
