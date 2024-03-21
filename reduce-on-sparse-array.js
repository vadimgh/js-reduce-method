const sparseArray = [1, , , 4, , 6];

const reducedArray = sparseArray.reduce((numbers, number) => {
  console.log(`called on ${number}`);
  return numbers + number;
});

console.log(reducedArray);