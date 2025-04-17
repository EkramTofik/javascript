const findmaximum = function (array) {
  //since math take acctual number instead of array we use spread operator to get each values
  return Math.max(...array);
};
const values = [1, 2, 3, 9, 5, 6, 7];
console.log(findmaximum(values));
//using for loop
function findMaxNumber(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}
console.log(findMaxNumber(values));
