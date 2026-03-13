const objEstad = {
  COD: 'IPC251852',
  Nombre: 'Total Nacional. Índice general. Índice. ',
  FK_Unidad: 133,
  FK_Escala: 1,
  Notas: [
    {
      texto:
        'https://www.ine.es/dyngs/INEbase/es/operacion.htm?c=Estadistica_C&cid=1254736176802&menu=ultiDatos&idp=1254735976607#~#https://www.ine.es/consul/serie.do?s=IPC206446&nult=100&TB_iframe=true&position=center&width=700&height=500&L=0&nocab=1 ',
      Fk_TipoNota: 6,
      textoTipo: null,
    },
  ],
  Data: [
    {
      Fecha: 1764543600000,
      FK_TipoDato: 1,
      FK_Periodo: 12,
      Anyo: 2025,
      Valor: 119.942,
      Secreto: false,
    },
  ],
};

const arrayKeysObjEstad = Object.keys(objEstad);
console.log(arrayKeysObjEstad);
console.log(Object.values(objEstad));
//console.log(objEstad.Data);

//const valoresAsociados = arrayKeysObjEstad.map((key) => objEstad[0][key]);

const valoresAsociados = arrayKeysObjEstad.forEach((clave) => {
  console.log(objEstad[clave]);
});
//console.log(valoresAsociados);
