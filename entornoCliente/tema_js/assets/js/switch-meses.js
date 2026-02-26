let mes = 'febrero';
let dias;

switch (mes.toLowerCase()) {
  case 'enero':
  case 'marzo':
  case 'mayo':
  case 'julio':
  case 'agosto':
  case 'octubre':
  case 'diciembre':
    dias = 31;
    break;
  case 'abril':
  case 'junio':
  case 'septiembre':
  case 'noviembre':
    dias = 30;
    break;
  case 'febrero':
    dias = 28; // Simplificada (omitimos años bisiestos)
    break;
  default:
    dias = 'Mes no válido';
}
console.log('El mes de ${mes} tiene ${dias} días');
