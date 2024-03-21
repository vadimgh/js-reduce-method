const numbers = [1, 2, 3, 4, 5, 6];

const sum = numbers.reduce((sum, number) => sum + number, 0);

console.log(sum);

const initialValue = '';

const phrase = ['coding', 'is', 'fun'].reduce((phrase, word) => phrase + ' ' + word, initialValue);

console.log(phrase);

const phrase2 = ['coding', 'is', 'useful'].reduce((phrase, number) => phrase + ' ' + number);

console.log(phrase2);

const words = ['coding', 'can', 'take', 'time'];

const phrase3 = words.reduce((phrase, word, idx, array) => {
  console.log(phrase);
  console.log(word);
  console.log(idx);
  console.log(array);
  phrase =  phrase + ' ' + word;
  return phrase;
}, '');