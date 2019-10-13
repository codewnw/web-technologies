let x = 1;
while (x <= 10) {
  console.log("X is: " + x);
  x = x + 1;
}

let y = 1;
while (y <= 10) {
  console.log("Y is: " + y);
  if(y === 5){
    console.log("Breaking because Y is 5.");
    break;
  }
  y++;
}

let z = 1;
while (z <= 10) {
  if(z === 5){
    z += 1;
    continue;
  }
  console.log("Z is: " + z);
  z += 1;
}

let num = 1;
while(num <= 10){
  if(num % 2 === 0){
    console.log("Num is: " + num);
  }
  num++;
}
