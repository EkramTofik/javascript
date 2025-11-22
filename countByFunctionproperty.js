function makeCounter(){

    function counter(){        
return counter.count++;
    };
 
counter.count=0;
counter.set=function(val){
counter.count=val;
}
counter.decrease=function(){
 --counter.count;
}
return counter;
}
let counter=makeCounter();
console.log(counter());
console.log(counter());
counter.set(5);
counter.decrease();
console.log(counter());


