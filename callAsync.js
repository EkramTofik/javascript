async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return 10;
}
async function f() {
  // ...what should you write here?
  // we need to call async wait() and wait to get 10
  // remember, we can't use "await"
wait().then(result=>{
console.log(result);
});
// OR USING AWAIT LIKE THIS 
// let result =await wait();
// console.log(result);
}
f();
