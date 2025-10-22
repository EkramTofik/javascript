let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

function getAverageAge(arra){

let result =arra.reduce((acc,item,index,arr)=> acc+item.age,0);
return result/arra.length;

}
console.log(getAverageAge(arr) );
