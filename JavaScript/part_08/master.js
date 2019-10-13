console.log("1 < 2: " + (1 < 2));
console.log("1 > 2: " + (1 > 2));
console.log("1 <= 2: " + (1 <= 2));
console.log("1 >= 2: " + (1 >= 2));

console.log("1 == 1: " + (1 == 1));
console.log("1 != 1: " + (1 != 1));
console.log("1 == 2: " + (1 == 2));
console.log("1 != 2: " + (1 != 2));

console.log("1 == \"1\": " + (1 == "1"));
console.log("1 === \"1\": " + (1 === "1"));
console.log("1 != \"1\": " + (1 != "1"));
console.log("1 !== \"1\": " + (1 !== "1"));

console.log("true == 1: "+(true == 1))
console.log("true === 1: "+(true === 1))

console.log("false == 0: "+(false == 0))
console.log("false === 0: "+(false === 0))
console.log("false == 1: "+(false == 1))
console.log("false === 1: "+(false === 1))

console.log("null == undefined: "+(null == undefined))
console.log("null === undefined: "+(null === undefined))
console.log("NaN == NaN: "+(NaN == NaN))
console.log("NaN === NaN: "+(NaN === NaN))

if(1===1 && 2===2){
  console.log("1===1 && 2===2 is true")
}

if(1===1 && 2===3){

}else{
  console.log("1===1 && 2===3 is false")
}

if(1===1 || 2===3){
  console.log("1===1 || 2===3 is: true because 1 === 1 is true")
}

if(1===2 || 2===2){
  console.log("1===2 || 2===2 is: true because 2 === 2 is true")
}

if(1===1 || 2===2){
  console.log("1===1 || 2===2 is: true because 1 === 1 is true, second condition won't be evaluated")
}

if(1 !== 2){
  console.log("1 !== 2 is: true")
}

if(!(1 !== 1)){
  console.log("!(1 !== 1) is: true")
}
