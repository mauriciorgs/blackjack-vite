/**
 *
 * @param {String} carta
 * @returns {HTMLImageElement} imagen de retorno
 */

export const crearCartaHTML = (carta, divCartasComputadora) => {
  if (!carta) throw new Error("carta es un argumento necesario");

  const imgCarta = document.createElement("img");
  imgCarta.src = `assets/cartas/${carta}.png`; //3H, JD
  imgCarta.classList.add("carta");
  

  return imgCarta;
};
