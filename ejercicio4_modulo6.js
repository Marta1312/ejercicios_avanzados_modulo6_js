/* 1. Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parámetro.

Haz varios ejemplos y compruébalos. */

function findArrayIndex(array, text) {
  let contador = 0;
  for (let element of array) {
    if (element == text) {
      return contador;
    }
    contador++;
  }
  return "No se encuentra en el array"; /*   -1    */
}

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

console.log(findArrayIndex(mainCharacters, "Luke"));
console.log(findArrayIndex(mainCharacters, "Han Solo"));
console.log(findArrayIndex(mainCharacters, "Anakin"));
console.log(findArrayIndex(mainCharacters, "Crash Bandicoot"));

/* 2. Usando la función anterior benefíciate de poder conocer el indice del array para crear una función llamada removeItem que, pasándole un array y un texto como parámetros (los mismos parámetros que en el anterior ejercicio), llame a la función anteriormente creada findArrayIndex y obtén el indice para posteriormente usar la función de javascript .splice() para eliminar el elemento del array.

Es decir, tienes que crear una función que elimine elementos del array y retorne el nuevo array sin el elemento, apoyándote en findArrayIndex.

Finalmente retorna el array.

De nuevo haz varios ejemplos para practicar y comprueba que funcionan correctamente. */

function removeCharacter(array, text) {
  let contador = findArrayIndex(array, text);
  {
    if (contador !== -1) {
      array.splice(contador, 1);
    }
    return array;
  }
}

/*

console.log(removeCharacter(mainCharacters, "Crash Bandicoot"));
console.log(removeCharacter(mainCharacters, "Luke"));
console.log(removeCharacter(mainCharacters, "Han Solo"));
console.log(removeCharacter(mainCharacters, "Anakin"));

*/

/* modifica el array resultante, solo funciona de uno en uno */

console.log(removeCharacter(mainCharacters.slice(), "Crash Bandicoot"));
console.log(removeCharacter(mainCharacters.slice(), "Luke"));
console.log(removeCharacter(mainCharacters.slice(), "Han Solo"));
console.log(removeCharacter(mainCharacters.slice(), "Anakin"));

/* con el metodo slice no se modifica el array anterior, crea una copia supericial sobre la que trabaja y el array se mantiene intacto */
