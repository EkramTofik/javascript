let arra=[0,5,3,8,1];
let value=[];
function filterRangeInPlace(arr,x,y){
value=arr.filter(item=>item>=x && item<=y);
console.log(value);

arr.splice(0,arr.length);
console.log(arr);

for (let item of value){
    arr.push(item)
}
return arr;


}
console.log(filterRangeInPlace(arra,0,3));
console.log(arra);
