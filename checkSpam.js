function checkSpam(str){
    if(str.toUpperCase().includes("XXX") || str.toLowerCase().includes("viagra")){
    return true;
}
else{
    return false;
}
}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));

