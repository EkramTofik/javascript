function unique(arr) {
//   let result=[];
//   for (let item=0;item< arr.length; item++){
//     if(!(result.includes(arr[item]))){
//          result.push(arr[item]); 
//     } 
// }
// return result;
// }
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
 
