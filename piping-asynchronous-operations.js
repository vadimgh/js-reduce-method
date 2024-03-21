const asyncPipe = (...fns) => (initialValue) => fns.reduce((acc, fn) => acc.then(fn), Promise.resolve(initialValue));;

const p1 = async a => a * 2;
const p2 = async a => a * 3;

asyncPipe(p1, p2)(2).then(console.log);

