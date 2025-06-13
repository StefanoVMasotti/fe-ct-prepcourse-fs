function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
  let primos = [2,3,5,7,11,13,17,19]
  for (let i = 0; i < primos.length; i++) {
    if(numero == primos[i]) return true;
    if(numero % primos[i] == 0) 
      return false;
  }
}

module.exports = esNumeroPrimo;
