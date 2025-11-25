let user={
    f(x) {
  console.log(x);
}
}
function delay(fun,time){
     return function wrapper(arg){
       setTimeout(()=>fun.call(this,arg),time);
    }
}
// create wrappers
let f1000 = delay(user.f, 1000);
let f1500 = delay(user.f, 1500);

f1000("test"); // shows "test" after 1000ms
f1500("test2");
