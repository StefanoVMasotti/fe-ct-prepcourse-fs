function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   let num = Math.floor(Math.random*10);
   if( array.length >= num){
      return array[num];
   }
}

module.exports = obtenerElementoAleatorio;
