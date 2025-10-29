function truncate(str,length){
    let strlen=str.length;
    let dot="...";
if(strlen>length){
    return str.slice(0,length-1)+dot;
}
else{
    return str;
}

}

console.log(truncate("What I'd like to tell on this topic is:", 20));
console.log(truncate("Hi everyone!", 20));

// truncate("What I'd like to tell on this topic is:", 20) == "What I'd like to te…"

// truncate("Hi everyone!", 20) == "Hi everyone!"
