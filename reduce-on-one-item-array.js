const numbers = [1];

const reducedNumbers = numbers.reduce((numbers, number) => {
  console.log(`called on ${number}`);
  return numbers + number;
});

console.log(reducedNumbers);

const reducedNumbers1 = numbers.reduce((numbers, number) => {
  console.log(`called on ${number}`);
  return numbers + number;
}, 0);

console.log(reducedNumbers1);