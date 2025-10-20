let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];
function sortByAge(arra){
  let temp;
  for(let x=0; x<arra.length;x++){
    for(let y=x+1; y<arra.length;y++){
        if( arra[x].age>arra[y].age){
           temp=arra[x];
            arra[x]=arra[y];
            arra[y]=temp;
        }
  }
} 
 return arra;
}
sortByAge(arr);
// now: [john, mary, pete]
console.log(arr[0].name);
console.log(arr[1].name);
console.log(arr[2].name);
console.log(arr);
// OR 
// function sortByAge(arr) {
//   arr.sort((a, b) => a.age - b.age);
// }

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [ pete, john, mary ];

// sortByAge(arr);

// // now sorted is: [john, mary, pete]
// alert(arr[0].name); // John
// alert(arr[1].name); // Mary
// alert(arr[2].name); 
