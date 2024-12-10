// Ya hemos empaquetado cientos de regalos 🎁… pero a un elfo se le ha olvidado revisar si el regalo, representado por un asterisco *, está dentro de la caja.

// La caja tiene un regalo (*) y cuenta como dentro de la caja si:

// Está rodeada por # en los bordes de la caja.
// El * no está en los bordes de la caja.
// Ten en cuenta entonces que el * puede estar dentro, fuera o incluso no estar. Y debemos devolver true si el * está dentro de la caja y false en caso contrario.

function inBox(box) {
  let hasGift = false;

  for (let i = 1; i < box.length - 1; i++) {
    // Omitimos los bordes superiores e inferiores
    const line = box[i];

    // Verifica si la línea tiene un asterisco (*) y si está correctamente dentro de la caja
    if (
      line.includes("*") &&
      line[0] === "#" &&
      line[line.length - 1] === "#"
    ) {
      const giftIndex = line.indexOf("*");
      if (giftIndex > 0 && giftIndex < line.length - 1) {
        // El regalo no está en los bordes
        hasGift = true;
        break; // Si encontramos el regalo dentro, no necesitamos seguir buscando
      }
    }
  }

  return hasGift;
}
inBox(["####", "#* #", "#  #", "####"]);
