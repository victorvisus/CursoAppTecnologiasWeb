// URL de API de prueba que devuelve datos de usuarios
/*
const url = "https://jsonplaceholder.typicode.com/users/1";

fetch(url).
then(response => {
    //console.log("Respuesta recibida:", response);
    if (!response.ok){
        throw new Error("Error de petición con código status: " + response.status)
    }
    return response.json(); // Convertir a JSON
}).
then(data => {
        //console.log("Datos del usuario:", data);
        console.log("Nombre:", data.name);
        console.log("Email:", data.email);
}).
catch (error => {
            console.log("Error al obtener datos:", error);
});
*/

const url = "https://jsonplaceholder.typicode.com/users/1";
/*
async function obtenerDatos() {
    const respuesta = await fetch(url)
    const datos = await respuesta.json(); // Convertir a JSON
    console.log("A la espera de mostrar Nombre e Email")
    console.log("Nombre:", datos.name);
    console.log("Email:", datos.email);
    return datos;
}
obtenerDatos()
*/

/*
async function obtenerDatos() {
    const respuesta = await fetch(url)
    console.log("A la espera de mostrar Nombre e Email")
    //PONER UN TIMEOUT DE MODO QUE SI PASAN MÁS DE CINCO SEGUNDOS SE DE UN 
    //MENSAJE DE ERROR Y NO SE CONTINÚE CON EL RESTO DEL PROGRAMA
    let datos;
    setTimeout(() => {
        datos = respuesta.json(); // Convertir a JSON
        console.log("Nombre:", datos.name);
        console.log("Email:", datos.email);
        return datos;
    }, 10000);
    // contamos el tiempo desde el inicio de toma de los datos
    let contador = 0
    const intervalo = setInterval(function () {
        contador++;
        console.log("Segundo: " + contador);
        // Detener después de 5 segundos
        if (contador >= 5 && datos===undefined) {
            clearInterval(intervalo);
            console.log("Tiempo terminado!");
            throw new Error("tiempo agotado para la solicitud de Nombre e Email")
        }
    }, 1000);
}
obtenerDatos()
*/
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
/*
const miPromesa = new Promise((resolve, reject) => {
  // Simulamos una operación que toma tiempo
  console.log('🔄 La Promise está pendiente...')
  
  setTimeout(() => {
    const exito = false // Cambia esto a false para ver el rechazo
    
    if (exito) {
      console.log('✅ Resolviendo la Promise...')
      resolve('¡Operación exitosa!') // Cumplimos la promesa
    } else {
      console.log('❌ Rechazando la Promise...')
      reject('Algo salió mal') // Rechazamos la promesa
      // console.log(reject.toString) // Esto no informa
    }
  }, 6000)
})

console.log('Promise creada:', miPromesa)

// Consumir la Promise, resolve está ligado al then (primero), y reject ligado al catch
miPromesa
  .then(resultado => console.log('Resultado:', resultado))
  .catch(error => console.log('Error:', error))
*/
// Creación de la Promesa
/*
function crearPromesa(exito) {
  return new Promise((resolve, reject) => {
    console.log('⏳ Procesando...')
    
    setTimeout(() => {
      if (exito) {
        resolve('¡Todo salió bien! 🎉')
      } else {
        reject('UNA CALAMIDAD 💥')
      }
    }, 4000)
  })
}
*/
// Consumiendo la promesa exitosa
/*crearPromesa(true)
  .then((resultado) => {
    console.log('✅ Éxito:', resultado)
    return resultado.toUpperCase() // Puedes transformar el valor
  })
  .then((resultadoMayusculas) => {
    console.log('📝 Transformado:', resultadoMayusculas)
    // -> 📝 Transformado: ¡TODO SALIÓ BIEN! 🎉
  })
  .catch((error) => {
    // Esto nunca se ejecutará porque la promesa se resuelve exitosamente
    console.log('❌ Error:', error)
  })
console.log("*************************")
// Probando con error (después de 2 segundos)
crearPromesa(false)
  .then((resultado) => {
    console.log('✅ Éxito:', resultado)
  })
  .catch((error) => {
    console.log('❌ Error capturado:', error)
    // -> 🔴 Error capturado: UNA CALAMIDAD 💥
  })
*/
const usuario = { nombre:"Juan", id:1234 }

const pedidos = [{ id: 0, idUsuario: 1234, cantidad: 2, precio: 10 },
{ id: 1, idUsuario: 20, cantidad: 4, precio: 5 },
{ id: 2, idUsuario: 1234, cantidad: 1, precio: 20 },
{ id: 3, idUsuario: 20, cantidad: 4, precio: 5 }];

function obtenerPedidos(_id) {
    let pedidosDeEseUsuario = new Array()
    console.log(pedidos)
    pedidos.forEach((element) => {
        if (element.idUsuario === _id) {
            console.log("Dentro del if del forEach para pedidos: " + element)
            pedidosDeEseUsuario.push({ id: element.id, idUsuario: element.idUsuario, cantidad: element.cantidad, precio: element.precio })
        }
    });
    return pedidosDeEseUsuario[0]
}
console.log("*----* ->" + obtenerPedidos(1234))

function obtenerDetalles(_id) {
    return pedidos[_id]
}
//console.log(obtenerDetalles(3))

function calcularTotal(_detalles) {
    return _detalles.cantidad * _detalles.precio
}
//console.log("El total es: " + calcularTotal(pedidos[3]))

function obtenerUsuario(indice) {
    return new Promise((resolve, reject) => {
        console.log('⏳ Procesando...')
        console.log("indice recibido en obtenerUsuario: -> " + indice)
        console.log("id de usuario: -> " + usuario.id)
        // SE responsabiliza de comprobar que el id de usuario === indice
        if (indice === usuario.id) {
            resolve('Se ha podido obtener la info de usuario 🎉')
        } else {
            reject('No ha sido posible obtener la info de usuario 💥')
        }

    })
}

/*
obtenerUsuario(1234)
    .then(usuarioId => {
        console.log('Usuario:', usuario.nombre)
        return obtenerPedidos(usuarioId) // Devolvemos la siguiente Promise
    })
    .then(pedidos => {
        console.log('Pedidos:', pedidos)
        return obtenerDetalles(pedidos[0].id) // Devolvemos la siguiente Promise
    })
    .then(detalles => {
        console.log('Detalles:', detalles)
        return calcularTotal(detalles) // Devolvemos la siguiente Promise
    })
    .then(total => {
        console.log('Total:', total)
        // ¡Terminamos! Sin pirámides, sin anidamiento
    })
    .catch(error => {
        // Un solo .catch() maneja TODOS los errores de toda la cadena
        console.log('❌ Error en cualquier paso:', error)
    })
// para que lo anterior tenga sentido debe exisitr el objeto usuario, y el array de pedidos
// siendo cada pedido un objeto
*/