function sumWithClosure(a){
    return function(b){
console.log(a+b);

    };
}
sumWithClosure(5)(3);
sumWithClosure(5)(-3);
