const gifts1 = [3, 1, 2, 3, 4, 2, 5];

function prepareGifts(gifts) {
  const newArray = [];

  const noRepeatGifts = gifts.map((n) => {
    if (!newArray.includes(n)) {
      newArray.push(n);
    }
  });

  newArray.sort((a, b) => a - b);

  return newArray;
}

const preparedGifts1 = prepareGifts(gifts1);

console.log(preparedGifts1);
