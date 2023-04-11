// ! Task-01
/*
let num1 = +prompt("Enter value for num 1");
let num2 = +prompt("Enter value for num 2");

if (num1 > num2) {
    console.log("num 1 is greater "+ num1);
}
else if (num2 > num1){
    console.log("num 2 is greater "+ num2);
}
else {
    console.log("Both values are equal");
}
*/


// ! Task-02
/*
let num = +prompt("Enter a number to find if it is positive or negative");
if (num >= 0){
    console.log("The sign is +");
}
else {
    console.log("The sign is -");
}
*/

// ! Task-03
/*
let num1 = +prompt("Enter value for num1");
let num2 = +prompt("Enter value for num2");
let num3 = +prompt("Enter value for num3");
let num4 = +prompt("Enter value for num4");
let num5 = +prompt("Enter value for num5");

if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
    console.log(num1);
}
if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5) {
    console.log(num2);
}
if (num3 > num1 && num3 > num2 && num3 > num4 && num1 > num5) {
    console.log(num3);
}
if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5) {
    console.log(num4);
}
if (num5 > num1 && num5 > num2 && num5 > num3 && num5 > num4) {
    console.log(num5);
}
*/
// ! Task-04
/* 
for (i = 0; i <= 15; i++) {
    if (i % 2 == 0) {
        console.log(i + " is even");
    }
    else {
        console.log(i + " is odd");
    }
}
*/

// ! Task-05
/* 
let engMarks = +prompt("Enter English marks: ");
let urdMarks = +prompt("Enter Urdu marks: ");
let mathsMarks = +prompt("Enter Maths marks: ");
let compMarks = +prompt("Enter Computer marks: ");
let phyMarks = +prompt("Enter Physics marks: ");

let totalMarks = engMarks + urdMarks + mathsMarks + compMarks + phyMarks;
let avg = totalMarks / 5;

if (avg > 90 && avg <= 100){
    console.log ("Total Marks: " + totalMarks);
    console.log ("Average: " + avg);
    console.log ("You got A grade");
}
else if(avg > 80 && avg <=90) {
    console.log ("Total Marks: " + totalMarks);
    console.log ("Average: " + avg);
    console.log("You got B grade");
}
else if(avg > 70 && avg <=80) {
    console.log ("Total Marks: " + totalMarks);
    console.log ("Average: " + avg);
    console.log("You got C grade");
}
else if(avg > 60 && avg <=70) {
    console.log ("Total Marks: " + totalMarks);
    console.log ("Average: " + avg);
    console.log("You got D grade");
}
else if(avg > 0 && avg <=60) {
    console.log ("Total Marks: " + totalMarks);
    console.log ("Average: " + avg);
    console.log("You got F grade");
}
else {
    console.log("Invalid Average or Marks");
}
*/

// ! Task-06
/* 
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + " FizzBuzz");
    } else if (i % 3 === 0) {
        console.log(i + " Fizz");
    } else if (i % 5 === 0) {
        console.log(i + " Buzz");
    } else {
        console.log(i);
    }
}
*/

// ! Task-07
/*
let i, j, ast;
for (i = 1; i <= 6; i++) {
    for (j = 1; j < i; j++) {
        ast = ast + ("*");
    }
    console.log(ast);
    ast = '';
}
*/