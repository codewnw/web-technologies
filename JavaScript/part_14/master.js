function hello() {
  console.log("Hello world!");
}

hello()

function greetMe(name) {
  console.log("Good morning, " + name);
}

function greetMeProperly(name = "Guest") {
  console.log("Good morning, " + name);
}

function add(num1, num2) {
  console.log(num1 + num2);
}

let message =  "Good Morning!";
console.log("Before calling function message is: "+message);
function greetingFunc(message) {
  console.log("In the function message is: "+message);
  message = "Good after noon!";
  console.log("After changing message is: "+message);
}
greetingFunc();
console.log("After calling function message is: "+message);
