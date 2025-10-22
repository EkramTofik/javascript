function unique(arr) {

let results=[];
results=arr.filter((item,index,arr1)=> {
    if(!(results.includes(item)))
{
results.push(item);
return true;
} 
}
);
return results;
}
let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
console.log(unique(strings));
 // OR 
//   let result=[];
//   for (let item=0;item< arr.length; item++){
//     if(!(result.includes(arr[item]))){
//          result.push(arr[item]); 
//     } 
// }
// return result;
// }
