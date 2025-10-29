function ucFirst(str){
      if (!str) return str;

    return str.slice(0,1).toUpperCase()+str.slice(1);
}
console.log(ucFirst("ekram"));
console.log(ucFirst("")); 
