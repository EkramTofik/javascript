function getLastDayOfMonth(year, month){
    let dateMay=[31,30,29,28];
    let result=[];
    let newDate;
for(val of dateMay){
    newDate=new Date(year,month,val);

    console.log(newDate.getFullYear());
console.log(newDate.getMonth());
console.log(newDate.getDate());


        if(newDate.getFullYear()===year  && newDate.getMonth()===month && newDate.getDate()===31){
         result.push(31);
        }
        else if(newDate.getFullYear()===year && newDate.getMonth()===month && newDate.getDate()===30  )
        {
           result.push(30);
        }
        else if(newDate.getFullYear()===year && newDate.getMonth()===month  && newDate.getDate()===29  ){
        result.push(29);
        }
        else if(newDate.getFullYear()===year && newDate.getMonth()===month  && newDate.getDate()===28 ) {
         result.push(28);
    }
    
}
console.log(result);  
  
    let maxDate=0;
for(let x=0;x<result.length;x++){
    if(result[x]>maxDate){
maxDate=result[x];
    }
}

newDate=new Date(year,month,maxDate);
console.log(newDate);

return newDate.getDate();
}
console.log(getLastDayOfMonth(2012,1)); //february 2012 29 leap year
console.log(getLastDayOfMonth(2025,9));

//OR SIMPLY  SINCE THE 0 RETURNS THE LAST DAY OF THE MONTH BEFORE THE CURRENT MONTH 
// function getLastDayOfMonth(year, month) {
//   let date = new Date(year, month + 1, 0);
//   return date.getDate();
// }
// console.log(getLastDayOfMonth(2012, 0) );
// console.log( getLastDayOfMonth(2012, 1));
