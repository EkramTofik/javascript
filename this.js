let user = {
  firstName: "John",
  sayHi() {
    console.log(`Hi, ${this.firstName}!`);
  },
  hello(){
    console.log(`hello ${this.firstName}`);
  }
};

setTimeout(user.sayHi.bind(user), 1000);
let now = {
  sayHi() { console.log("Another user in setTimeout!"); }
};


user=null;
// user.sayHi();

