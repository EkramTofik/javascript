function getWeekDay(date){
return date.toString().slice(0,2).toUpperCase();
}
let date = new Date(2012, 0, 3);  
console.log(getWeekDay(date) );
let newdate=new Date(2003,5,7);
console.log(getWeekDay(newdate));
/////OR
// function getWeekDay(date) {
//   let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

//   return days[date.getDay()];
// }

// let date = new Date(2014, 0, 3); // 3 Jan 2014
// alert( getWeekDay(date) ); 
