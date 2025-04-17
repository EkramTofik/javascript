const reversestring = function (word) {
  const changearray = word.split('');
  let text = '';
  for (let i = changearray.length - 1; i >= 0; i--) {
    text += changearray[i];
  }
  return text;
};
console.log(reversestring('ekram'));
