/*
function obtenerCita() {
  fetch("https://type.fit/api/quotes") //NO ESTá operativa, dará errores
    .then(response => response.json())
    .then(data => {
      document.getElementById('cita').textContent = data.content;
      document.getElementById('autor').textContent = data.author;
    })
    //.catch( () => {throw new Error("no es posible recuperar citas")});
}
obtenerCita()
*/
/*
const url2 = "https://type.fit/api/quotes";

async function obtenerCita2() {
    const respuesta = await fetch(url2)
    const datos = await respuesta.json(); // Convertir a JSON
    datos.forEach(element => {
        console.log(element.author)
        console.log(element.text)
    });
//    console.log(datos[0].author)
//    console.log(datos[0].text)
    return datos;
}
obtenerCita2()
*/
// ejemplo para acceder a la cotización de BTC
// Función asíncrona para obtener el precio de BTC
/*async function obtenerPrecioBitcoin() {
    const url = 'https://api.coingecko.com';
    try {
        const respuesta = await fetch(url);
        // Comprobar si la respuesta es correcta
        //if (!respuesta.ok) {
          //  throw new Error('Error en la red');
        //}
        const datos = await respuesta.json();
        console.log(datos)
        // Extraer el precio del JSON recibido
        //const precioUSD = datos.bitcoin.usd;
        //console.log(`El precio actual de Bitcoin es: $${precioUSD} USD`);
        // Aquí puedes actualizar tu interfaz HTML, por ejemplo:
        //document.getElementById('precio').innerText = `$${precioUSD}`;
        return datos;

    } catch (error) {
        console.error('Hubo un problema con la petición Fetch:', error.message);
        // una vez constatado el error, podría probar con otra API
        return null
    }
}
obtenerPrecioBitcoin()
*/
/*
async function obtenerClima(ciudad) {
  const btnCargar = document.getElementById("btnCargar");
  const ak = "213e22279a6694343103dd5a85fb4517" //AK para OpenWeather
//  https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
  //const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}`);
  const datos = await response.json();
  document.getElementById('temperatura').textContent = datos.main.temp;
}
*/
// PARA PROBAR CON API-KEYS:
/*
const API_KEY = "676ed88a3350ca4146896afab0d093d0"
const url_base = "https://api.openweathermap.org/data/2.5/weather?q="
const url_ciudad_appid = "London,uk&APPID="
const url_completa = url_base + url_ciudad_appid + API_KEY
//console.log(url_completa)

async function obtenerTodosLosDatos() {
    const objetoMeteot= {longitud:0,latitud:0}
    try {
            const response = await fetch(url_completa);
            const datos = await response.json();
            objetoMeteot.latitud = datos.coord.lat;
            objetoMeteot.longitud = datos.coord.lon;
            //console.log(objetoMeteot)
            return objetoMeteot // ABSOLUTAMENTE NECESARIO SI objetoMeteot es local
    } catch (error) {
        console.error('Error en alguna de las APIs:', error);
    }
}

console.log("objetoMeteot.longitud " , await obtenerTodosLosDatos())
*/
//Ejemplo de código: modificación de objeto dentro de una promesa y la devolución del objeto modificado. La ventaja es que usuario es global y no requeriría return.
/*
const usuario = { nombre: "Ana", activo: false };
async function actualizarUsuario(user) {
  // Modificar
  user.activo = true;
  user.ultimoAcceso = Date.now();
  return user; // Retorna el objeto directamente
}
// Uso. Al usar then se hace lo equivalente a un await
await actualizarUsuario(usuario);
console.log(usuario);*/
// URL de la API (Jikan API - pública, sin clave)
const apiUrl = 'https://api.jikan.moe';
fetch(apiUrl)
  .then(response => {
    // Verificar si la respuesta es correcta
    if (!response.ok) {
      throw new Error('Error en la red: ' + response.status);
    }
    return response.json(); // Convertir a JSON
  })
  .then(data => {
    // La API devuelve un objeto, extraemos el título (valor)
    // del objeto 'data' -> 'data' (del resultado) -> 'title'
    const tituloAnime = data.title;
    const tipoAnime = data.type;

    // Salida por consola: Clave y Valor
    console.log("--- RESULTADO API ---");
    console.log("Clave: title -> Valor:", tituloAnime);
    console.log("Clave: type -> Valor:", tipoAnime);
  })
  .catch(error => {
    console.error('Hubo un problema con la petición fetch:', error);
  });