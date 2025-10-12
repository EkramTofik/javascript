let arr=[0,5,3,8,1];
let value=[];
function filterRange(arr,x,y){
value=(arr.filter(item=>item>=x && item<=y));
return value;
}
console.log(arr);
console.log(filterRange(arr,0,3));
