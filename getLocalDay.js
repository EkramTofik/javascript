function getLocalDay(date){
    
    if(date.getDay()==0)
        return 7;
    else{
        return date.getDay();
    }
}
let date = new Date(2012, 0, 9);  // 3 Jan 2012
console.log(getLocalDay(date));
