/* Crea una función llamada rollDice() que reciba como parámetro el numero de caras que queramos que tenga el dado que deberá simular el codigo dentro de la función.

Que la función use el parametro para simular una tirada de dado y retornar el resultado.

Si no se te ocurre como hacer un numero aleatorio no te preocupes. Busca información sobre la función de JavaScript Math.random() */

function rollDice(caras) {
  let resultado = Math.floor(Math.random() * caras) + 1;
  /* El numero aleatorio que genera math.random se escala en proporcion cuando lo multiplicamos por el numero de caras y luego es reddondeado por math.floor. Le sumamos uno para que no empieece en 0 caras */
  return resultado;
}

console.log(rollDice(6)); /* dado de 6 caras */
