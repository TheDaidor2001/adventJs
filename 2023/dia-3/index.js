function findNaughtyStep(original, modified) {
  const originalSplit = original.split("");
  const modifiedSplit = modified.split("");
  const a = [];

  modifiedSplit.forEach((letter, index) => {
    if (!originalSplit.includes(letter)) {
      console.log(letter);
      a.push(letter);
    }
  });
  originalSplit.forEach((letter) => {
    if (!modifiedSplit.includes(letter)) {
      a.push(letter);
    }
  });

  return a.length > 0 ? a[0] : "";
}

const original = "stepfor";
const modified = "stepor";

findNaughtyStep(original, modified);
