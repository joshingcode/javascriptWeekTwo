// VERY EASY: Write a function named min that takes two arguments and returns their minimum.
function minNums(zebra, unicorn){
    console.log(Math.min(zebra,unicorn))

}

minNums(500,350)

// EASY: Create an array of students holding their last name, first name, and age with 3 students. To
// validate, please log a greeting with the first name, last name and age of the 2nd student. The output
// should look like "Hello, my name is John Doe and I'm 19 years old."

let student1=["John","Doe","15"]
let student2=["Jane","Doe","16"]
let student3=["Brad","Doe","16"]

console.log(`Hello, my name is ${student2[0]} ${student2[1]} and I'm ${student2[2]} years old.`)



// MEDIUM: Create a program that accepts a number (1-12) as input and logs to the console that number
// and its corresponding month. For example: if the user enters the number 3, then it should return the
// month “March.” Alert the user if they enter an invalid number (e.g. less than 1 or greater than 12).

// let monthChoice=prompt("Please enter a numeber between 1-12")

// if(monthChoice == 1){
//     alert("January")
// }else if(monthChoice == 2){
//     alert("Febuary")
// }else if(monthChoice == 3){
//     alert("March")
// }else if(monthChoice == 4){
//     alert("April")
// }else if(monthChoice == 5){
//     alert("May")
// }else if(monthChoice == 6){
//     alert("June")
// }else if(monthChoice == 7){
//     alert("July")
// }else if(monthChoice == 8){
//     alert("August")
// }else if(monthChoice == 9){
//     alert("September")
// }else if(monthChoice == 10){
//     alert("October")
// }else if(monthChoice == 11){
//     alert("November")
// }else if(monthChoice == 12){
//     alert("December")

// }else{
//     alert("INVALID ENTRY")
// }

// See next page...



// HARD: 
// Given the information below for Tom and Jerry.
// ● Tom - height:  9in mass: 8 g
// ● Jerry - height: 10in mass: 45 g

//[height,mass]


let tomOne=[9,8]
let jerryOne=[10,45]


// Compare the BMI (Body Mass Index) of Tom & Jerry using the formula below:
// BMI = mass / height ^2 = mass / (height * height)

let jerryBMI= jerryOne[1]/ jerryOne[0]^2 
console.log(jerryBMI)

let tomBMI= tomOne[1]/tomOne[0]^2
console.log(tomBMI)

// Store Tom & Jerry’s mass and height as variables. 
// Calculate both their BMI’s. Create a Boolean
// variable containing information about whether Tom has a higher BMI than Jerry. ?
// Print a string to the
// console with the variable from step 3 ( e.g. Is Tom’s BMI higher than Jerry’s? false).

if(jerryBMI > tomBMI){
    console.log("Tom's BMI is higher than Jerry's")
}else{
    console.log("Jerry is a big man")
}