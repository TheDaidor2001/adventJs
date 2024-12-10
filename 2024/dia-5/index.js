// Los elfos 🧝🧝‍♂️ de Santa Claus han encontrado un montón de botas mágicas desordenadas en el taller. Cada bota se describe por dos valores:

// type indica si es una bota izquierda (I) o derecha (R).
// size indica el tamaño de la bota.
// Tu tarea es ayudar a los elfos a emparejar todas las botas del mismo tamaño que tengan izquierda y derecha. Para ello, debes devolver una lista con los pares disponibles después de emparejar las botas.

// ¡Ten en cuenta que puedes tener más de una zapatilla emparejada del mismo tamaño!

function organizeShoes(shoes) {
  const newItems = [];

  shoes.forEach((shoe) => {
    if (shoe.type === "I") {
      const pair = shoes.find(
        (item) => item.type === "R" && item.size === shoe.size
      );

      if (pair) {
        newItems.push(shoe.size);
        shoes.splice(shoes.indexOf(pair), 1);
      }
    }
  });

  console.log(newItems);

  return newItems;
}

const shoes = [
  { type: "I", size: 38 },
  { type: "R", size: 38 },
  { type: "R", size: 42 },
  { type: "I", size: 41 },
  { type: "I", size: 42 },
];

organizeShoes(shoes);
