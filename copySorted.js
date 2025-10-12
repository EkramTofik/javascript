let arr = ["HTML", "JavaScript", "CSS"];
function copySorted(arr){
let sorted=[];

for(let value of arr){
    sorted.push(value);
}    
    
sorted.sort();
    return sorted;

}
let result=copySorted(arr);
console.log(result);
console.log(arr);
console.log(result);
console.log(copySorted(arr));
