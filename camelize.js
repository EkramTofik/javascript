function camelize(value){
    let arr=value.split('-');
for (let x=1;x<arr.length;x++){
    let changedWord= arr[x].slice(0,1).toUpperCase().concat(arr[x].slice(1).toLowerCase());
    arr[x]=changedWord;
    }
return arr.join("");
}


let word="background-color";
console.log(camelize(word));
let word2="list-style-image";
console.log(camelize(word2));
//OR 
function Camelize(str) {
  return str
    .split('-') 
    .map(
   
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join('');
}
console.log(Camelize(word));

