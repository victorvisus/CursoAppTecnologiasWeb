//Ejercicio 1: Usar destructuring anidado para acceder a las especificaciones del producto.
const producto = {
  id: 101,
  nombre: 'Laptop',
  precio: 999,
  especificaciones: {
    ram: '16GB',
    procesador: 'Intel i7',
  },
};

const {
  nombre,
  especificaciones: { ram, procesador },
} = producto;

console.log(
  `Destructuring anidado:\n`,
  `Nombre: ${nombre}
RAM: ${ram}
Procesador: ${procesador}`,
);

//Crea una función que use destructuring en sus parámetros con un valor por defecto.
// TODO: Crea una función registrarUsuario que use destructuring
// en sus parámetros para aceptar: nombre, email, edad (defecto: 18)
// La función debe retornar un objeto con esos datos

// Prueba:
// registrarUsuario({ nombre: "Ana", email: "ana@email.com" })
// Debe retornar: { nombre: "Ana", email: "ana@email.com", edad: 18 }

function registrarUsuario({ nombre, email, edad = 18 }) {
  const persona = {
    nombre,
    email,
    edad,
  };

  return persona;
}
console.log(registrarUsuario({ nombre: 'Ana', email: 'ana@email.com' }));
