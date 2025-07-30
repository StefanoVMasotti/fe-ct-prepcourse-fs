function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  let mayor = 0;
  for(let i = 0; i < array.length; i++){
    if (mayor < array[i]){
      mayor = array[i];
    }
  }
  //let numero = (element) => element == mayor;
  if(array.indexOf(mayor) == -1){
    return 0;
  }
  return array.indexOf(mayor);
}

module.exports = encontrarIndiceMayor;
