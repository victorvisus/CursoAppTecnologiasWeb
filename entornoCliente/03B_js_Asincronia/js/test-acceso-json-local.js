const url = './dat.json';

// El fetch siempre debe ir dentro de una función o ser disparado por un evento
async function cargarDatos() {
  console.log('funcion cargarDatos');
  try {
    // La ruta es relativa al HTML que carga este script
    const response = await fetch(url);

    // Comprobamos si la respuesta es válida (status 200)
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const data = await response.json();

    // poner aqui un timeout de modo que si pasan más de 5 segs, se de un msg de error y no se continue con el programa

    console.log('Datos obtenidos en cargarDatos:', data);
    return data;
  } catch (error) {
    console.error('Fallo en la petición fetch:', error);
  }
}
function printData(data) {
  console.log('funcion printData');
  console.log('A la espera de los datos...');
  console.log('Datos impresos con printData:', data);
  console.log('----------------------------------------------------');
}
// Ejecución
printData(cargarDatos()); //lanza la funcion printData pidiendo los datos
//cargarDatos().then(printData); //lanza la funcion printData cuando obtiene los datos
