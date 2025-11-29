Function.prototype.defer=function(value){
setTimeout(f,value);
    
}
function f() {
  console.log("Hello!");
}

f.defer(4000); 
