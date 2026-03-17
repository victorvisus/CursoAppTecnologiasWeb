/*
Ahora te toca a tí

Ejercicio 1, sistema de inventario: Integra destructuring, spread, rest y shorthand.  
•
En la primera parte, practicas destructuring en parámetros y object shorthand en el retorno.
•
En la segunda, usas spread para crear copias inmutables de objetos.
•
En la tercera, trabajas con rest parameters para manejar múltiples argumentos. Intenta resolver cada función antes de buscar las soluciones.
•
Piensa en cómo cada técnica hace el código más limpio y expresivo.

*/

  // Datos de ejemplo
  const productos = [
    { id: 1, nombre: "Laptop", precio: 999, stock: 5 },
    { id: 2, nombre: "Mouse", precio: 25, stock: 50 },
    { id: 3, nombre: "Teclado", precio: 75, stock: 30 }
  ];
  
  // TODO 1: Crea una función obtenerResumen que reciba un producto
  // y devuelva un objeto con: nombre, precio, 
     y disponible (true si stock > 0)
  // Usa destructuring en los parámetros y shorthand en el retorno
  
  // TODO 2: Crea una función aplicarDescuento que reciba un producto
  // y un porcentaje de descuento, y retorne un nuevo producto con el
  // precio actualizado. Usa spread para copiar el producto.
  
  // TODO 3: Crea una función combinarProductos que reciba múltiples
  // productos usando rest parameters y los combine en un solo array
  
  // Prueba tus funciones aquí

/*
Ejercicio 2, gestión de usuarios: Simula operaciones reales con datos de usuarios.
•La primera función practica inmutabilidad - un concepto clave en programación funcional y React.
•La segunda usa destructuring con rest para excluir propiedades.
•La tercera combina rest parameters con valores por defecto y shorthand.
•Estas operaciones son muy comunes en aplicaciones reales. Trata de mantener la inmutabilidad, nunca modifiques los objetos originales.
*/
 const usuarios = [
    { 
      id: 1, 
      nombre: "Ana", 
      email: "ana@email.com",
      rol: "admin",
      activo: true 
    },
    { 
      id: 2, 
      nombre: "Carlos", 
      email: "carlos@email.com",
      rol: "usuario",
      activo: true 
    }
  ];
  
  // TODO 1: Crea una función actualizarUsuario que reciba un id
  // y un objeto con las propiedades a actualizar. Debe encontrar
  // el usuario por id y retornar un nuevo array con el usuario
  // actualizado. Usa spread para mantener inmutabilidad.
  
  // TODO 2: Crea una función eliminarPropiedad que reciba un usuario
  // y el nombre de una propiedad a eliminar. Debe retornar un nuevo
  // objeto sin esa propiedad. Usa destructuring con rest.
  
  // TODO 3: Crea una función crearUsuario que reciba nombre, email
  // y opciones adicionales (usando rest). Debe generar un id único
  // y retornar el usuario completo con valores por defecto para
  // propiedades no especificadas.
  
  // Prueba tus funciones aquí