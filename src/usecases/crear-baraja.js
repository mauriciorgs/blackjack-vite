import _ from "underscore";

/**
 *Crea un nueva baraja
 * @param {Array<String>} tiposDeCartas Ejemplo: const tipos = ["C", "D", "H", "S"];
 * @param {Array<String>} tiposEspeciales Ejemplo: const especiales = ["A", "J", "Q", "K"];
 * @returns {Array<String>} retorna un nueva baraja
 */

export const crearDeck = (tiposDeCartas, tiposEspeciales) => {
  if (!tiposDeCartas || tiposDeCartas.length === 0)
    throw new Error("tipoDECarta es obligatorio como un arreglo de string");
  if (!tiposEspeciales || tiposEspeciales.length === 0)
    throw new Error("tiposEspeciales es obligatorio como un arreglo de string");

  let deck = [];

  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDeCartas) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tiposDeCartas) {
    for (let esp of tiposEspeciales) {
      deck.push(esp + tipo);
    }
  }
  // console.log( deck );
  deck = _.shuffle(deck);
  return deck;
};
