function getSecondsToTomorrow(){
    let today=new Date();
    console.log(today);
    
    let tomorrow=new Date(today.getFullYear(),today.getMonth(),today.getDate()+1);
    console.log(tomorrow);
    
    let diff=tomorrow-today;
    let seconds=diff/1000;
    return Math.round(seconds);


}
console.log(getSecondsToTomorrow());
