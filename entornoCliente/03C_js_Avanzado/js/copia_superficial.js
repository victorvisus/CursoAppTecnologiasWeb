// COPIA SUPERFICIAL: SHALLOW COPY:
const original = {
  a: 1,
  b: {
    c: 2,
    getC() {
      return this.c;
    },
  },
  getA() {
    return this.a;
  },
  getB() {
    return this.b;
  },
};
const copia = { ...original }; // copia superficial

copia.a = 10; // Modifica solo la copia (primitivo)
copia.b.c = 20; // Modifica la copia Y el original (objeto anidado)

console.log(original.b.c); // 20 (¡Original afectado!)
// para evitar afectar por copia o copia superficial:
// extraer las claves-valor y reasignarlas una a una:
const copia2 = {};
copia2.a = original.getA();
copia2.b = original.getB();
copia2.b.c = original.getB().getC();
copia2.b.c = 456;
console.log(original.b.c);

const obj = { a: 1, b: { c: 2 } };
const copiaObjt = obj; // no copia, sino referencia, si cambias la copia, cambias obj

//Resolver en parte el asunto
copiaObjt.a = 3000; //tambien cambia obj
console.log(`La copia la hacemos Igualando:
    copiaObjt.a: ${copiaObjt.a}, obj.a: ${obj.a}`);

const copiaObjt2 = { ...obj }; // copia superficial
copiaObjt2.a = 7000; // no cambia obj, EN EL PRIMER NIVEL, si cambia en niveles anidados
console.log(`Copia superficial, shallow copy:
    Nivel superior: copiaObjt2.a: ${copiaObjt2.a}, obj.a: ${obj.a}`);

copiaObjt2.b.c = 7226; // tambien cambia obj
console.log(`Copia superficial, shallow copy:
    Nivel anidado:copiaObjt2.b.c: ${copiaObjt2.b.c}, obj.b.c: ${obj.b.c}`);

// Si se quiere una opia que no altere el original, se utilizan métodos especificos
const copiaObjt3 = structuredClone(obj); // crea copia independiente del obj original
copiaObjt3.a = 18566;
copiaObjt3.b.c = 2563;
console.log(`Copia con structuredClone:
    Nivel superior: copiaObjt3.a: ${copiaObjt3.a}, obj.a: ${obj.a}
    Nivel anidado: copiaObjt3.b.c: ${copiaObjt3.b.c}, obj.b.c: ${obj.b.c}`);
