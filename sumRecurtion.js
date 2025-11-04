 //Recursion
 function sumTo(num){

if(num==1){
    return 1;

}
else{
    return num+sumTo(num-1);
}
     }

console.log(sumTo(4));
//Using loop

function sumto(n){
    let sum=0;
    for(let x=1;x<=n;x++){
        sum+=x;
    }
    // while(n>=1){
    //        sum+=n;
    //     n--;
    // }
    return sum;
}
console.log(sumto(2));
console.log(sumto(100));
 //Using Arthimetic expression 
  function sumToo(n) {
  return n * (n + 1) / 2;
}
console.log(sumToo(100));
//the pattern is like 
// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050     
