let arr=[0,5,3,8,1];
function filterRange(arr,x,y){
return(arr.filter(item=>item>=x && item<=y));
}
console.log(arr);
console.log(filterRange(arr,0,3));
