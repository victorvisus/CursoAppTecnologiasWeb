/* ********************************************************************************************************************************************
Tareas:
Clases básicas: Crea una clase Libro con:
•Constructor que recibe: titulo, autor, paginas.
•Propiedad leido inicializada en false.
•Método marcarComoLeido() que cambia leído a true.
•Método info() que devuelve string con toda la información.
*/
class Libro {
  constructor(_titulo, _autor, _paginas) {
    this.titulo = _titulo;
    this.autor = _autor;
    this.paginas = _paginas;
    this.leido = false;
  }

  marcarComoLeido() {
    this.leido = true;
  }

  info() {
    return `${this.titulo} por ${this.autor} - ${this.paginas} páginas (${this.leido ? 'Leído' : 'No leído'})`;
  }
}

const libro = new Libro('1984', 'George Orwell', 328);
console.log(libro.info());
// "1984 por George Orwell - 328 páginas (No leído)"

libro.marcarComoLeido();
console.log(libro.info());
// "1984 por George Orwell - 328 páginas (Leído)"

console.log(libro);
console.log(libro instanceof Libro); // true o  false dependiendo de si libro es una instancia de la clase Libro
console.log(libro.constructor.name); // Te dice de que clase es el objeto

/* ********************************************************************************************************************************************
Tareas:
Clases básicas: Crea una clase CuentaBancaria con:
• Constructor que recibe: titular, saldoInicial (defecto 0).
• Método depositar(cantidad) que aumenta el saldo.
• Método retirar(cantidad) que disminuye el saldo pero solo si hay suficiente saldo
• Método consultarSaldo() que muestra el saldo actual.
• Asegúrate de validar: No se puede depositar cantidad negativa, No se puede retirar más de lo que hay en el saldo.
*/
class CuentaBancaria {
  constructor(_titular, _saldo = 0) {
    this.titular = _titular;

    if (_saldo < 0) {
      throw new Error('El saldo no puede ser negativo');
    }
    this.saldo = _saldo;
  }
  depositar(_cantidad) {
    if (_cantidad < 0) {
      throw new Error('No se puede depositar una cantidad negativa');
    }
    this.saldo += _cantidad;
  }
  retirar(_cantidad) {
    if (_cantidad > this.saldo) {
      throw new Error('Saldo Insuficiente');
    }
    if (_cantidad < 0) {
      throw new Error('No se puede retirar una cantidad negativa');
    }
    this.saldo -= _cantidad;
  }
  consultarSaldo() {
    return this.saldo;
  }
}

try {
  const miCuenta = new CuentaBancaria('Ana', -2300);

  console.log(`Saldo inicial: ${miCuenta.consultarSaldo()}`); // 1000
  miCuenta.depositar(500);
  console.log(`Saldo despues del deposito: ${miCuenta.consultarSaldo()}`); // 1500
  miCuenta.retirar(200);
  console.log(`Saldo despues del retiro: ${miCuenta.consultarSaldo()}`); // 1300
} catch (error) {
  console.log(`ERROR: ` + error.message + '\nFin de la ejecución');
}
