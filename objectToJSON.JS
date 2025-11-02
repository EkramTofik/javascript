let user ={
     name: "John Smith",
  age: 35
}
let JSONObject=JSON.stringify(user);
console.log(JSONObject);//making json object
let user2=JSON.parse(JSONObject);
console.log(user2);//making object again
