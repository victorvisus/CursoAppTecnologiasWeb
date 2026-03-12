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
    const usrOrders = new Array();

    // Recorremos el array de pedidos para obtener los pedidos del usuario y los almacenamos en el array anterior
    for (let i = 0; i < pedidos.length; i++) {
      if (pedidos[i].usuario_id === idUser) {
        usrOrders.push(pedidos[i]);
      }
    }

    // Imprimimos los pedidos obtenidos del usuario
    console.log('Detalles de los pedidos del usuario ' + idUser);
    usrOrders.forEach((p) => {
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

    if (usrOrders) {
      resolve(usrOrders);
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
function obtenerDetalles(idOrder, usrOrders) {
  console.log(
    '// function obtenerDetalles ////////////////////////////////////// -> ',
    idOrder,
  );
  console.log(usrOrders);
  //console.log('⏳ Function obtenerDetalles() pendiente de implementar');
  //obtenerDetalles(pedidos[0].id); // Devolvemos la siguiente Promise

  const detalleOrder = [];

  for (let i = 0; i < usrOrders.length; i++) {
    if (usrOrders[i].id === idOrder) {
      detalleOrder.push(usrOrders[i]);
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
  //console.log('⏳ Function calcularTotal() pendiente de implementar');

  let total = 0;

  for (let i = 0; i < detalleOrder[0].productos.length; i++) {
    total +=
      detalleOrder[0].productos[i].precio *
      detalleOrder[0].productos[i].cantidad;
  }

  return total;
}

obtenerUsuario(1)
  .then((usuario) => {
    console.log('Usuario (en el .then()):', usuario.nombre);
    return obtenerPedidos(usuario.id); // Devolvemos la siguiente Promise
  })
  .then((usrOrders) => {
    console.log('Pedidos (en el .then()):', usrOrders);
    return obtenerDetalles(usrOrders[0].id, usrOrders); // Devolvemos la siguiente Promise
  })
  .then((detalleOrder) => {
    console.log('Detalles (en el .then()):', detalleOrder);
    return calcularTotal(detalleOrder); // Devolvemos la siguiente Promise
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
