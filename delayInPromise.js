function delay(ms) {
return  new Promise(function(resolve,reject){
setTimeout(()=>resolve('resolved'),ms);
}
)
}

delay(3000).then(() => console.log('runs after 3 seconds'));
// delay(2000).then(
//     result=>console.log(result)
// );
