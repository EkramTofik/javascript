 function inBetween(a,b){
    let num1=a;
 let num2=b;
 return (num)=>num>=num1 && num<=num2;
 }
//OR LIKE 
function inbetween(a,b){
    return function(num){
        return num>=a && num<=b;
    }

}

function inArray(val){
return function(x){
   return val.includes(x);
}
}

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.filter(inbetween(1, 4)));

console.log(arr.filter(inBetween(3, 6)));
console.log(arr.filter(inArray([1,2,7])));

 
