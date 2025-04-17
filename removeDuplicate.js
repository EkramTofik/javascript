// const removeDuplicate = function (arr) {
//   const arrayFiltered = [];
//   for (let value of arr)
//     if (!arrayFiltered.includes(value)) {
//       arrayFiltered.push(value);
//     }
//   return arrayFiltered;
// };
// const Array1 = [1, 2, 2, 3, 4, 4];
// const multivalue = [1, 2, 3, 3, 'hello', 'hello'];
// const arr = [0, 0, 5, 5, 6, 7, 8, 8];
// console.log(removeDuplicate(Array1));
// console.log(removeDuplicate(multivalue))
function removeDuplicates(arr) {
  const uniqueArr = [];
  for (let i of arr) {
    if (typeof i === 'object' && typeof j === 'object') {
      if (uniqueArr.length === 0) {
        uniqueArr.push(i);
      } else {
        for (let j of uniqueArr) {
          i = JSON.stringify(i);
          j = JSON.stringify(j);
          if (i !== j) {
            uniqueArr.push(JSON.parse(i));
          }
        }
      }
    } else {
      if (!uniqueArr.includes(i)) {
        uniqueArr.push(i);
      }
    }
  }
  return uniqueArr;
}

// Example usage
const uni = [
  12,
  'subject',
  {
    name: 'ek',
    age: 12,
  },
  {
    name: 'ek',
    age: 12,
  },
  {
    name2: 'musa',
    age: 12,
  },
  {
    section: 'B',
  },
  30,
];
console.log(removeDuplicates(uni));
//JSON.PARS AND JSON.STRINGFIY
//  const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
//  console.log(JSON.parse(text));
// console.log(JSON.stringify(text));
