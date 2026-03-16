/*
function generarIds(prefijo = "user", numero = Math.random()) {
    return `${prefijo}-${numero}`
}
console.log(generarIds())
console.log(generarIds("invitado"))
console.log(generarIds("admin", "KC"))
*/
// PATRÓN DESTRUCTURING: Permite crear funciones
// de configuración donde todos los parámetros son 
// opcionales y tienen valores por defecto sensatos. 
// El `= {}` al final es crucial: proporciona un objeto
//  vacío por defecto, de modo que puedes llamar la función
//  sin argumentos. No se genera el objeto.
/*function configurar({
    url = "https://api.ejemplo.com",
    timeout = 5000,
    retries = 3
    }={}) {
        console.log(`URL: ${url}, Timeout: ${timeout}, Retries: ${retries}`);
    }

configurar(); // Usa todos los valores por defecto
configurar({ url: "https://otra-api.com", retries:2 }); // Solo cambia url
*/
/*
const Boton = ({
    texto = "Haz clic",
    color = "azul",
    tamaño = "mediano"
}) => {
    return `<button class="${color} ${tamaño}">${texto}</button>`
};
// lo anterior produce un elemento renderizable
function renderiza(elemento){
    console.log(elemento)
}
console.log(renderiza(Boton))*/



// Crea esta función con parámetros por defecto apropiados:
//Sistema de Notificaciones. Crea un sistema de notificaciones 
// con configuración flexible. Valores por defecto sugerido:
// Tipo: "info"
// Duración: 3000
// Posición: "abajo-derecha"
// Cerrable: true

/*
function mostrarNotificacion(tipo = "Info",
    mensaje, // Entrada por usuario obligatoria, no por defecto
    duracion = 3000,
    posicion="abajo-derecha",
    cerrable=true
    // Define los parámetros aquí
) {
    return `
      [${tipo.toUpperCase()}] ${mensaje}
      Duración: ${duracion}ms
      Posición: ${posicion}
      ${cerrable ? '(Cerrable)' : '(No cerrable)'}
    `;
}

// Debe funcionar así:
console.log(mostrarNotificacion("Operación exitosa"));
// Usar valores por defecto para todo excepto el mensaje

console.log(mostrarNotificacion("Error crítico", "error"));
// Cambiar tipo, resto por defecto

console.log(mostrarNotificacion("Guardando...", "info", 5000, "arriba-derecha", false));
// Configuración completa personalizada
*/

// saltar elementos
// usar con cuidado
/*
const numeros = [1,2,3,4,5,6,7,8]
const [pimero,,,,quinto,,,octavo] = numeros
console.log(quinto)*/

// "Copy-paste" en modo tradicional
/*let [a,b] = [103, 334] // const obliga a que los elementos individuales sean const
console.log([a,b])
// quiero que a sea b, y b sea a, necesito la variable auxiliar
let aux = b
b = a // todavía la antigua b está en aux
a = aux
console.log([a,b])*/
// forma sintética
/*
let a = 223;
let b = 108; // requiere ";" porque b no está diferenciado en RAM
[a, b] = [b, a];
console.log([a, b]);*/
// DECONSTRUCTING PARA OBJETOS:
/*
const persona = {
    nombre: "Carlos",
    apellido: "Gracia",
    edad: 30,
    ciudad: "Madrid"
};
const { NOMBRE=persona.nombre+ " " + persona.apellido, ciudad, edad } = persona;
// se desvirtúa el DESTRUCTURING
const { info_persona=persona.nombre+ " " + persona.apellido + " " + persona.ciudad+ " "+ persona.edad } = persona;
console.log(NOMBRE); // "Carlos"
// 30
console.log(ciudad); // "Madrid"
console.log(edad);
*/

/*const empleado = {
    nombre: "Pedro",
    puesto: "Developer",
    direccion: {
        calle: "Gran Vía 123",
        ciudad: "Madrid",
        codigoPostal: "28013"
    }
}
const {
    nombre,
    direccion: { ciudad, codigoPostal }
} = empleado;

console.log(nombre);
console.log(ciudad);
console.log(codigoPostal); 
*/
// "28013"
//console.log(direccion); // Error: direccion no esta definido

// "Pedro"
// "Madrid"

//Ejercicio 1: Usar destructuring anidado 
// para acceder a las especificaciones del producto.
/*const producto = {
    id: 101,
    nombre: "Laptop",
    precio: 999,
    especificaciones: {
      ram: "16GB",
      procesador: "Intel i7"
    }
  };

const {id, nombre, precio, especificaciones: { ram, procesador}} = producto
console.log(id, " ", nombre, " ", precio, " ", ram, " ", procesador)
*/
//Ejercicio 2: Crea una función que use destructuring
//  en sus parámetros con un valor por defecto.


// TODO: Crea una función registrarUsuario que use destructuring
  // en sus parámetros para aceptar: nombre, email, edad (defecto: 18)
  // La función debe retornar un objeto con esos datos
  
  // Prueba:
  // registrarUsuario({ nombre: "Ana", email: "ana@email.com" })
  // Debe retornar: { nombre: "Ana", email: "ana@email.com", edad: 18 }
/*
function registrarUsuario({nombre=undefined, email, edad=18, direccion="Zaragoza", nacionalidad=undefined}){
    const objetoDevolucion = {nombre:nombre, email:email, edad:edad, nacionalidad:nacionalidad} ;
    return objetoDevolucion
}
console.log(registrarUsuario({nombre:"Ana", nacionalidad:"española", email:"ana@email.com"}))*/
// si lo anterior se hace sin DESTRUCTING hay que ser cuidadoso en el orden

/*function registrarUsuario(nombre, email, edad=18, direccion="Zaragoza", nacionalidad=undefined){
    const objetoDevolucion = {nombre:nombre, email:email, edad:edad, nacionalidad:nacionalidad} ;
    return objetoDevolucion
}*/
//console.log(registrarUsuario("Ana","ana@email.com",,,"española"))

// SPREAD para ARRAYS:
/*
const horarioLectivo = ["8:30","11:00","14:30"]
const segundaPausa = ["13:00"]
const horarioCompleto = ["8:30","11:00",...segundaPausa,"14:30"]
console.log(horarioCompleto)
const tardes = ["15:30","17:00","19:30"]
const noches = ["21:30","22:00","23:30"]
const horarioCompleto2 = ["8:30","11:00","14:30", ...tardes]
console.log(horarioCompleto2)*/

const temperaturas = [12, 14, 10, 13, 20, 5, 1]
console.log(Math.max(...temperaturas))
// Para una agenda: se requiere un objeto que sea jornada-> entre otros
// horario, clientes, ...
// habrá días que se queden sin asignación horaria, y otros que se completen->
// destructuring en un sentido y spread en el sentido opuesto.
// si se contempla el objeto semana, habrá semanas con días festivos 
// y otras que no: destructuring y spread
// Mirar también: window.localStorage(algo)
// Se pueden guardar datos en ficheros .txt