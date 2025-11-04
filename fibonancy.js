function fibonancy(n){
let sum;
if(n==1 || n==2){
return 1;
}
else{
    sum=fibonancy(n-1)+fibonancy(n-2);
    return sum;
}
}
console.log(fibonancy(7));
