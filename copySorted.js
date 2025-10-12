let arr = ["HTML", "JavaScript", "CSS"];
let sorted=[];
function copySorted(arr){

for(let value of arr){
    sorted.push(value);
}    
    sorted.sort();
    return sorted;

}
copySorted(arr);
console.log(sorted);
console.log(arr);

