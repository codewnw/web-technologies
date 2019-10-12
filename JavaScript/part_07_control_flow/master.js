alert("Welcome to HDFC bank")
let balance =  10000
let amount = Number(prompt("Enter to amount to debit:"))
let confiramtion = confirm("Are you sure?")

if(confiramtion){
  balance = balance - amount
  alert("Your account has been debited.")
}else{
  alert("Debit transaction has been cancelled.")
}

console.log("Currentl balanace is: " + balance)
