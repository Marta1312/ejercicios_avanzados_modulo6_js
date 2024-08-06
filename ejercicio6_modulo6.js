/* Crea una función llamada swap que reciba un array y dos parametros que sean indices del array.

La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Es decir, intercambiar el lugar de un elemento por otro dentro del array.

Retorna el array resultante. */

const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

function swap(array, index1, index2) {
  // Verifica que los índices estén dentro del rango del array
  if (
    index1 < 0 ||
    index1 >= array.length ||
    index2 < 0 ||
    index2 >= array.length
  ) {
    return "Índices fuera de rango";
  }

  // Intercambiar los elementos de la posicion 1 por el de la posicion 2
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;

  // Retorna el array resultante

  return array;
}

console.log(swap(fantasticFour, 0, 2));
console.log(swap(fantasticFour, 1, 3));
console.log(swap(fantasticFour, 2, 2));
console.log(swap(fantasticFour, 4, 1));
