function compare(a, b) {
  if (a > b) return -1; // if the first value is greater than the second
  if (a == b) return 0; // if values are equal
  if (a < b) return 1; // if the first value is less than the second
}
let arr=[5,8,2,-7,9];
arr.sort(compare);
console.log(arr);
//OR SIMPLY 
let arr1 = [5, 2, 1, -10, 8];

arr1.sort((a, b) => b - a);

console.log(arr1);
