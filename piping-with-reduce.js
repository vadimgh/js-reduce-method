const pipe = (...fns) => initialValue => fns.reduce((value, fn) => fn(value), initialValue);

const double = v => v * 2;
const triple = v => v * 3;

const multiply6 = pipe(double, triple);

console.log(multiply6(2));