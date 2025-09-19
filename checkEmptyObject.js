function isEmpty(check){
let count=0;
for (let key in check){
    if(key!== null){
        count++;
    }
}
if (count >0){
return true}
else{
    return false;
}
}
let schedule={};
console.log(isEmpty(schedule));
schedule["8;30"]="get up";
console.log(isEmpty(schedule));
