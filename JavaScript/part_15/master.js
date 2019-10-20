let person = {};
person = {
  name: "Rohit",
  age: 50,
  isAdmin: true,
}
console.log(person);
console.dir(person);

person.height = 5.8;

delete person.isAdmin;

person = {
  name: "Sachin",
  "likes fielding": false,
}

console.log(person.name);
console.log(person["likes fielding"]);

person["how are you"] = "Good";
delete person["how are you"];

let user = {
  name: "Ram",
  age: 10,
  isAdmin: true
}

let key = prompt("What do you want to know about user", ["name"])
alert(user[key])


user = {
  name: "Shyam",
  age: 100,
  isAdmin: false
}
let key1 = prompt("What do you want to know about user", ["name"])
alert(user.key1)
