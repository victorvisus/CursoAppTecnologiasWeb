/**
 * Tienes que crear un script que gestione una lista de la compra.
 * Para ello tienes dos listas de artículos: compra, pendiente:
 * - Cada elemento de la lista compra es un objeto con dos propiedades: nombre del artículo y estado.
 * Estado es un booleano true si el artículo se compró, false en caso contrario.
 * - Pendiente es una lista con los nombres de los artículos que faltan por comprar.
 * La función que debes crear recibe como argumento la lista de compra y devuelve la lista de pendientes.
 * -- en las posiciones pares para compra aparece nombre artículo y en las impares el estado (true, false), para pendiente no es necesario.
 * @param {array} listaCompra - lista de objetos con dos propiedades: nombre y estado.
 * @param {array} pendiente - lista de nombres de artículos que faltan por comprar.
 * @returns {array} lista de pendientes.
 */
function gestionarListaCompra(listaCompra, pendiente) {
  //quiero add a pendiente los articulos que no se han comprado
  for (let i = 0; i < listaCompra.length; i++) {
    listaCompra[i] === false ? pendiente.push(listaCompra[i - 1]) : null;
  }
  alert(`Los articulos pendientes son: ${pendiente}`);
}

/**
 * Tenemos dos listas de asistentes a dos cursos: html y css.
 * Queremos obtener una lista de los asistentes a ambos cursos.
 * La lista estará ordenada.
 * En este ejercicio debes crear dos arrays para representar dos equipos de trabajo:
 * - Al primer array le llamaremos ocupados
 * - y al segundo libres.
 * Ambos están llenos con 5 nombres.
 *
 * Debes crear una función rotar(lst1, lst2) que pase el primer nombre de la lista lst1 al final de lst2, y luego el primero de la lst2 al final de lst1.
 * Para ver que funciona escribe los arrays antes y después de usar esta función.
 */

function rotar(lst1, lst2) {
  //pop(): Elimina el elemento del final, y devuelve ese elemento.
  //shift(): Elimina el elemento del principio y devuelve ese valor
  //add al final .push() y eliminar el primero .shift()
  alert(
    `Alert 1: Los ocupados 1 son:\n- ${lst1} \n\ny los libres 2 son:\n- ${lst2}`,
  );
  while (lst2.length > 0) {
    lst1.push(lst2.shift()); //Elimina el primero de lista 2 (shift) y lo pone al final de lista 1 (push)
  }
  do {
    lst2.push(lst1.shift()); //Elimina el primero de lista 1 (shift) y lo pone al final de lista 2 (push)
  } while (lst1.length >= 5);

  alert(
    `Alert 2: Los ocupados 1 son:\n- ${lst1} \n\ny los libres 2 son:\n- ${lst2}`,
  );
}
