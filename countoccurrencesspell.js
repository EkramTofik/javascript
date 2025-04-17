const countoccurrrence = function (word, character) {
  let count = 0;
  // let changetoarray = word.toLowerCase(); TO MAKE NOT CASE SENSITIVE
  // character = character.toLowerCase();
  changetoarray = word.split('');
  for (let x of changetoarray) {
    if (x === character) count++;
  }

  return count;
};
console.log(countoccurrrence('ekrrammm', 'R')); //case sensitive
console.log(countoccurrrence('ekrrammm', 'm'));
//BY USING DIRECTLY THE STRING ITSELF
const occurrrence = function (word, character) {
  let count = 0;
  // let changetoarray = word.toLowerCase(); TO MAKE NOT CASE SENSITIVE
  // character = character.toLowerCase();
  for (let x of word) {
    if (x === character) count++;
  }
  return count;
};
console.log(countoccurrrence('ekrrammm', 'r')); //case sensitive
console.log(countoccurrrence('ekrrammm', 'M'));
