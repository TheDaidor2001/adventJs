function manufacture(gifts, materials) {
  const palabras = [];
  //separar array por coma
  gifts.map((gift) => {
    const data = gift.split("");
    const includesLetters = (letter) => materials.includes(letter);
    const isGood = data.every(includesLetters);

    if (isGood) {
      palabras.push(gift);
    }
  });
  console.log(palabras);

  return palabras ? palabras : [];
}

const gifts = ["libro", "ps5"];
const materials = "psli";

manufacture(gifts, materials);
