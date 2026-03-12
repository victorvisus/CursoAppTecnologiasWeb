const users = [
  {
    id: 1,
    nombre: 'John Doe',
  },
  {
    id: 2,
    nombre: 'Jane Doe',
  },
];
const pedidos = [
  {
    id: 1,
    usuario_id: 1,
    productos: [
      { id: 1, nombre: 'Producto 1', precio: 10, cantidad: 2 },
      { id: 2, nombre: 'Producto 2', precio: 20, cantidad: 3 },
    ],
  },
  {
    id: 2,
    usuario_id: 2,
    productos: [
      { id: 3, nombre: 'Producto 3', precio: 30, cantidad: 1 },
      { id: 4, nombre: 'Producto 4', precio: 40, cantidad: 2 },
    ],
  },
  {
    id: 3,
    usuario_id: 1,
    productos: [
      { id: 5, nombre: 'Producto 5', precio: 50, cantidad: 1 },
      { id: 6, nombre: 'Producto 6', precio: 60, cantidad: 2 },
    ],
  },
  {
    id: 4,
    usuario_id: 2,
    productos: [
      { id: 7, nombre: 'Producto 7', precio: 70, cantidad: 1 },
      { id: 8, nombre: 'Producto 8', precio: 80, cantidad: 2 },
    ],
  },
];

/**
 * Busca un usuario en el array de usuarios y devuelve una promesa con ese usuario, o con un error si no lo encuentra.
 * @param {*} id
 * @returns
 */
function obtenerUsuario(id) {
  console.log(
    '// function obtenerUsuario ///////////////////////////////////////',
  );
  return new Promise((resolve, reject) => {
    console.log('⏳ Procesando... 1000ms');

    setTimeout(() => {
      let usuario = users.find((usr) => usr.id === id); //devuelve el objeto
      console.log(`Usuario encontrado: ${usuario.id} - ${usuario.nombre}`);

      if (usuario) {
        resolve(usuario);
      } else {
        reject(new Error('No se encontró el usuario'));
      }
    }, 1000);
  });
}

/**
 * Obtiene los pedidos del usuario con el id que recibe
 * @param {*} idUser
 * @returns Array en el que se incluyen los pedidos del usuario recibido
 */
function obtenerPedidos(idUser) {
  console.log(
    '// function obtenerPedidos ///////////////////////////////////////' +
      `Recibo id de usuario: ${idUser}`,
  );
  //console.log('⏳ Function obtenerPedidos() pendiente de implementar');
  return new Promise((resolve, reject) => {
    // Creamos un array para almacenar los pedidos del usuario
    const usrOrder = new Array();

    // Recorremos el array de pedidos para obtener los pedidos del usuario y los almacenamos en el array anterior
    for (let i = 0; i < pedidos.length; i++) {
      if (pedidos[i].usuario_id === idUser) {
        usrOrder.push(pedidos[i]);
      }
    }

    // Imprimimos los pedidos obtenidos del usuario
    console.log('Detalles de los pedidos del usuario ' + idUser);
    usrOrder.forEach((p) => {
      console.log('Pedido ' + p.id + ':');
      p.productos.forEach((producto) => {
        console.log(
          '  - ' +
            producto.id +
            ': ' +
            producto.nombre +
            ' - Precio: ' +
            producto.precio +
            ' - Cantidad: ' +
            producto.cantidad,
        );
      });
    });
    console.log('--- Fin pedidos usuario ' + idUser + '\n');

    if (usrOrder) {
      resolve(usrOrder);
    } else {
      reject(new Error('No se encontraron pedidos'));
    }
  });
}

/**
 * Obtiene los detalles del pedido con el id que recibe
 * @param {*} idOrder
 * @returns
 */
function obtenerDetalles(idOrder, usrOrder) {
  console.log(
    '// function obtenerDetalles ////////////////////////////////////// -> ',
    idOrder,
  );
  console.log(usrOrder);
  //console.log('⏳ Function obtenerDetalles() pendiente de implementar');
  //obtenerDetalles(pedidos[0].id); // Devolvemos la siguiente Promise

  const detalleOrder = [];

  for (let i = 0; i < usrOrder.length; i++) {
    if (usrOrder[i].id === idOrder) {
      detalleOrder.push(usrOrder[i]);
    }
  }
  console.log('detalles del pedido ' + idOrder, detalleOrder);

  return detalleOrder;
}

function calcularTotal(detalleOrder) {
  console.log(
    '// function calcularTotal ///////////////////////////////////////////',
  );

  console.log(detalleOrder);
  console.log('⏳ Function calcularTotal() pendiente de implementar');

  let total = 0;

  return total;
}

obtenerUsuario(1)
  .then((usuario) => {
    console.log('Usuario (en el .then()):', usuario.nombre);
    return obtenerPedidos(usuario.id); // Devolvemos la siguiente Promise
  })
  .then((usrOrder) => {
    console.log('Pedidos (en el .then()):', usrOrder);
    return obtenerDetalles(usrOrder[0].id, usrOrder); // Devolvemos la siguiente Promise
  })
  .then((detalles) => {
    console.log('Detalles (en el .then()):', detalles);
    return calcularTotal(detalles); // Devolvemos la siguiente Promise
  })
  .then((total) => {
    console.log('Total:', total);
    // ¡Terminamos! Sin pirámides, sin anidamiento
  })
  .catch((error) => {
    // Un solo .catch() maneja TODOS los errores de toda la cadena
    console.log('❌ Error:', error);
  });

//para que lo anteior tenga sentido de e existir el objeto usuario, y el array de pedidos, siendo cada pedido un objeto
