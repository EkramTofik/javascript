function sumWithClosure(a){
    return function(b){
return a+b;
    };
}
console.log(sumWithClosure(5)(3));
console.log(sumWithClosure(5)(-3));
