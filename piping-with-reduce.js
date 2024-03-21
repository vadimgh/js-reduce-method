const pipe = (...fns) => (initialValue) => fns.reduce((value, fn) => fn(value), initialValue);

const double = v => v * 2;
const tripple = v => v * 3;

const multiply6 = pipe(double, tripple);

console.log(multiply6(2));
