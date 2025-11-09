let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];
 function byField(val){
  return function(a,b){
 return  val=='name'? a.name>b.name?1:-1:a.age>b.age?1:-1;

  }
 }
 console.log(users.sort(byField('name')));
  console.log(users.sort(byField('age')));
   //OR SIMPLY 
//   function byField(fieldName){
//   return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
// }
