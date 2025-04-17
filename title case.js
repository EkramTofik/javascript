const titlecase = function (word) {
  const covertarray = word.split(' ');
  let text = '';
  for (let eachword of covertarray) {
    text += eachword[0].toUpperCase() + eachword.slice(1) + ' ';
  }
  console.log(text);
};
titlecase('ekram tofik');
