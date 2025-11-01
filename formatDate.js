 function formatDate(date){
    let newDate=new Date();        
    let diff=newDate-date;
    let result=Math.round(diff/1000);
    console.log(result);
    let year=`${date.getFullYear()}`;
    let month=`${date.getMonth()}`;
    let datee=`${date.getDate()}`;
    let hour=`${date.getHours()}`;
    let minutes=`${date.getMinutes()}`;
      //Making 2 digit the 2 
    month=month<10?`0${month}`:month;
    hour=hour<10?`0${hour}`:hour;
datee=datee<10?`0${datee}`:datee;
minutes=minutes<10?`0${minutes}`:minutes;
    console.log(year.slice(2,4));
    console.log(month);
    
    if(result<1){
        return "Right now";
    }
    else if(result>1 && result<60)
    {
        return `time passed ${result} seconds`;
    }
    else if(result >60 && result<3600)
    {
      return  `time passed ${result/60} minutes `
    }
    else{
   return `${datee}.${month}.${year.slice(2,4)} ${hour}:${minutes}`;
    }
 }
console.log(formatDate(new Date(new Date - 1)));
console.log(formatDate(new Date(new Date - 30 * 1000)) );
console.log(formatDate(new Date(new Date - 5 * 60 * 1000)));
console.log(formatDate(new Date(new Date - 86400 * 1000)) );




