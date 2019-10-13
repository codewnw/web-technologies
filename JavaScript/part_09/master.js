let age = Number(prompt("Enter you age:", [0]))

if (age <= 0) {
    console.log("You are not born yet.")
} else if (age > 0 && age <= 12) {
    console.log("You are a child.")
} else if (age > 12 && age < 18) {
    console.log("You are a teen.")
} else if (age >= 18 && age < 60) {
    console.log("You are an adult.")
} else if (age >= 60 && age <= 100) {
    console.log("You are a senior citizen.")
} else {
    console.log("You are a ghost.")
}
