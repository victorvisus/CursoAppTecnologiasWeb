// Aquí la función callback -parámetro- se ejecuta en primer plano inemdiatamente
// la verdadera función en segundo plano es el contenido de la función
// anónima del setTimeout
/*function hacerTareaEspera(callback) {
    setTimeout(() => {
        console.log("Este mensaje aparece después de 4 segundos");
        // Aquí se puede realizar durante 4 segundos una serie de acciones
        // sin conocimiento del usuario
    }, 4000);
    callback();
}

function cuandoTermineSecuencial(){
    
    console.log("Ejecución casi inmediata!")

}

hacerTareaEspera(cuandoTermineSecuencial);
*/
/*
function saludar(nombre, callback) {
    console.log("Preparando saludo ... ");
    callback(nombre);
}

function mostrarSaludo(nombre) {
    console.log(`¡Hola, ${nombre}!`);
}

// Uso del callback
saludar("Ana", mostrarSaludo);
*/
/*
function procesar(datos, callback) {
    console.log("Procesando datos ... "); // puede ser una operación de acceso lento
     setTimeout(() => {
        console.log("Este mensaje aparece después de 4 segundos");
        // Aquí se puede realizar durante 4 segundos una serie de acciones
        // sin conocimiento del usuario
    }, 4000);
    callback(datos.toUpperCase());
}

function mostrarResultado(resultado) {
    console.log("Resultado: " + resultado);

}
// 3 maneras de hacer la misma invocación
procesar("hola mundo", mostrarResultado);

// Mismo ejemplo con función anónima:
procesar("hola mundo", function (resultado) {
    console.log("Resultado: " + resultado);
});

// Con arrow function (más moderno):
procesar("hola mundo", (resultado) => {
    console.log("Resultado: " + resultado);
});
*/
/*
Implementa una calculadora con callbacks para la operación y mostrar resultado
El usuario introduce dos números y una operación.
Con un switch se llama a la función 'calcular' con un callback para definir cómo mostrar el resultado y otro para definir la operación.
Los callbacks pueden ser nombrados, anónimos o funciones arrow.*/
/*function calcular(a, b, operar){
    setTimeout((a, b, operar) => {
        console.log("Resultado revisado en 4 segundos por comité de expertos anónimos ");
    }, 4000);
    console.log(operar(a,b))
}

function suma(a, b){
    return a+b
}
function producto(a, b){
    return a*b
}
function resta(a,b){
    return a-b
}
function division(a, b){
    let resultado;
    try{
        resultado = a/b
         return resultado
    }
    catch{ //suponemos que b es 0
        return "divisor nulo, operación prohibida"
    }
}

calcular(5875, 0, suma)*/
//  Carga de datos asíncrona (Simulación de API): Muestra cómo una acción depende de la finalización de otra, usando un callback para gestionar el resultado.
/*function obtenerUsuario(id, callback) {
    console.log("Consultando base de datos...");
    setTimeout(() => {
        callback({ id: id, nombre: "Ana" });
    }, 2000);
}

obtenerUsuario(1, (usuario) => {
    console.log(`Usuario recibido: ${usuario.nombre}`);
});
*/
// el "infierno de los callbacks":
/*
setTimeout(() => {
    console.log("Etapa 1");
    setTimeout(() => {
        console.log("Etapa 2");
        setTimeout(() => {
            console.log("Etapa 3");
        }, 1000);
    }, 1000);
}, 1000);

*/
/*
let contador = 0;
const intervalld = setInterval(function () { 
    contador++;
    console.log("Segundo: " + contador);
    // Detener después de 5 segundos
    if (contador >= 5) {
        clearInterval(intervalld);
        console.log("Tiempo terminado!");
    }
},1000);
*/
// Ejemplo de callbacks "solucionados" por llamadas sucesivas
// a funciones con nombre
// pasamos de esto:
/*getUser(1, (user) => {
  console.log("Usuario:", user.name)

  getPosts(user.id, (posts) => {
    console.log("Posts del usuario:", posts)

    getComments(posts[0].id, (comments) => {
      console.log("Comentarios del primer post:", comments)

      getLikes(comments[0].id, (likes) => {
        console.log("Likes del primer comentario:", likes)
        // ... y así hasta el infinito y más allá...
      })
    })
  })
})
*/
// a esto:
//getUser(1, onUser)

function onUser(user) {
  console.log("Usuario:", user.name)
  getPosts(user.id, onPosts)
}

function onPosts(posts) {
  console.log("Posts del usuario:", posts)
  getComments(posts[0].id, onComments)
}

function onComments(comments) {
  console.log("Comentarios del primer post:", comments)
  getLikes(comments[0].id, onLikes)
}

function onLikes(likes) {
  console.log("Likes del primer comentario:", likes)
  console.log("Fin del flujo de callbacks")
}

console.log('A')
setTimeout(() => {
  console.log('B')
}, 1000)
console.log('C')