function findFirstRepeated(gifts) {
  // Code here
  const allNumbers = [];
  const isRepited = [];
  gifts.map((item) => {
    if (allNumbers.includes(item)) {
      isRepited.push(item);
    }
    allNumbers.push(item);
  });

  return isRepited.length ? isRepited[0] : -1;
}
