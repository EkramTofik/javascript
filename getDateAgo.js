function getDateAgo(date,daysAgo){
 let newDate=new Date(date);// instead of changing the date value in global scope it affects the next call
newDate.setDate(newDate.getDate()-daysAgo);
return `The date is= ${newDate.getDate()} New date value=  ${newDate}`;

}

let date = new Date(2015, 0, 2);
console.log(getDateAgo(date, 1));
console.log(getDateAgo(date, 2));
console.log(getDateAgo(date, 365));
