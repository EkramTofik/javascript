function getSecondsToday(){
    let newDate=new Date();    
return newDate.getHours()*(3600)+newDate.getMinutes()*60+newDate.getSeconds();
}


console.log(getSecondsToday());
//OR LIKE THIS SINCE SETTING THE DATE MAKES THE TIME LIKE 00:00:00 SO WHEN WE SUBTRACT THE RESULT IS IN MILISECOND SO DIVIDE BY 1000
// function getSecondsToday() {
//   let now = new Date();

//   // create an object using the current day/month/year
//   let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

//   let diff = now - today; // ms difference
//   return Math.round(diff / 1000); // make seconds
// }

// alert( getSecondsToday() );
