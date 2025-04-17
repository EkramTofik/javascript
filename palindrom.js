const reversestring = function (word) {
  const changearray = word.split('');
  let text = '';
  for (let i = changearray.length - 1; i >= 0; i--) {
    text += changearray[i];
  }
  if (word === text) {
    return 'palindrom';
  } else {
    return 'its not palindrom';
  }
};
console.log(reversestring('ekram'));
console.log(reversestring('mom'));
