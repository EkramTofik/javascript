const countvowels = function (word) {
  let count = 0;
  const arrayspell = word.split('');
  for (let char of arrayspell) {
    if (
      char === 'a' ||
      char === 'e' ||
      char === 'i' ||
      char === 'o' ||
      char === 'u'
    ) {
      count++;
    }
  }
  return count;
};
console.log(countvowels('ekram'));
