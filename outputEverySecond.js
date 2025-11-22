function printNumber(from,to){
let now=from;

let res=setInterval(()=>{
    if(now<=to){
        console.log(now++);
        
    }
    else{
        clearInterval(res);
    }
}
 ,1000)
}
printNumber(3,7);
//OR SIMPLY 
// let result=setTimeout(function printNumbers(from,to){
//   let  current=from;
//     while(current<=to){    
// console.log(current++);
// setTimeout(printNumbers,1000);
//     } 

// },1000,2,6);
