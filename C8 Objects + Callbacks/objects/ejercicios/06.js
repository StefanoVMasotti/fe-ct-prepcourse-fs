const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  let propiedades = Object.keys(objeto);
  return propiedades.length;
};

module.exports = contarPropiedades;
