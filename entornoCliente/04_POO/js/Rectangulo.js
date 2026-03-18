class Rectangulo {
  constructor(_ancho, _alto, _color, _textura) {
    this.ancho = _ancho;
    this.alto = _alto;
    this.apariencia = new Apariencia(_color, _textura);
  }

  calculaArea() {
    return this.ancho * this.alto;
  }
}

class Apariencia {
  constructor(_color, _textura) {
    this.color = _color;
    this.textura = _textura;
  }
}

let miAlto = 2;
let miAncho = 5;
let miColor = 'rojo';
let miTextura = 'punteada';

const miRectangulo = new Rectangulo(miAncho, miAlto, miColor, miTextura);
console.log(
  `El area del rectangulo es: ${miRectangulo.ancho * miRectangulo.alto}`,
);
console.log(
  `Area calculada con el metodo de la clase: ` + miRectangulo.calculaArea(),
);
console.log(
  `Las caracteristicas físicas de apariencia son: ` +
    miRectangulo.apariencia.color +
    ` y ` +
    miRectangulo.apariencia.textura,
);
