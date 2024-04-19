
//                                        IF-ELSE EXERCISE



//  1. Write a js program to find the maximum between two numbers.

// Solution :

/*
let num1 = prompt("Enter First Number");
let num2 = prompt("Enter Second Number");

if (num1 > num2) {
    alert(`${num1} is greater then ${num2}`);
}else if(num1 < num2){
    alert(`${num2} is greater then ${num1}`)
}else{
    alert(`${num1} is equal to ${num2} please enter the different numbers`)
}
*/


//          -------------------------------------------------------------------------------            //


//  2. Write a js program to find the maximum between three numbers

// Solution :

/*
let num1 = prompt("Enter First Number");
let num2 = prompt("Enter Second Number");
let num3 = prompt("Enter Third Number");

if (num1 > num2 && num1 > num3) {
    alert(`${num1} is greater then ${num2} & ${num3}`);
}else if(num2 > num1 && num2 > num3){
    alert(`${num2} is greater then ${num1} & ${num3}`)
}else if(num3 > num1 && num3 > num2){
    alert(`${num3} is greater then ${num1} & ${num2}`)
}else{
    alert(`All the numbers are equal please enter the different numbers`)
}
*/


//          -------------------------------------------------------------------------------            //


//  3. Write a js program to check whether a number is negative, positive or zero.

// Solution :

/*
let userNum = prompt("Enter the number");

if(userNum > 0){
    alert(`${userNum} is positive number`)
}else if(userNum < 0){
    alert(`${userNum} is negative number`)
}else{
          alert(`Your number is ${userNum}`)
}
*/


//          -------------------------------------------------------------------------------            //


//  4. Write a js program to check whether a number is divisible by 5 and 11 or not

//Solution :

/*
let userNum = prompt("write the nummber");
if(userNum % 5 === 0 && userNum % 11 === 0){
    alert("Congratulations");
}else {
    alert("Sorry! Rong number");
}
*/


//          -------------------------------------------------------------------------------            //


//  5. Write a js program to check whether a number is even or odd.

// Solution :

/*
let userNum = prompt("Enter the Number")

if(userNum % 2 === 0){
   alert(`${userNum} is even number`);
}else{
    alert(`${userNum} is odd number`);
}
*/


//          -------------------------------------------------------------------------------            //


// 6. Write a js program to check whether a year is leap year or not

// Solution :

/*
let userYear = prompt("Enter any year")

if(userYear % 400 === 0 || userYear % 4 === 0 && userYear % 100 !== 0){
       alert(`${userYear} is a leep Year`);
}else{
    alert(`${userYear} is not a leep year`);
}
*/


//          -------------------------------------------------------------------------------            //


// 7. Write a js program to input any alphabet and check whether it is vowel or consonant.

// Solution

/*
let useralphabet = prompt("Enter any Alphabet");

if(useralphabet === "a"||useralphabet === "e"||useralphabet === "i"||useralphabet === "o"||useralphabet === "u"){
   alert(`${useralphabet} is Vowel`);
}else if((useralphabet >= "a" && useralphabet <= "z")&&(useralphabet !== "a"||useralphabet !== "e"||useralphabet !== "i"||useralphabet !== "o"||useralphabet !== "u")){
    alert(`${useralphabet} is Consonent`);
}else{
     alert("Please enter a valid alphabet")
}
*/


//          -------------------------------------------------------------------------------            //


// 8. Write a js program to check whether a character is uppercase or lowercase alphabet.

// Solution 

/*
let useralphabet = prompt("Enter any alphabet");

if(useralphabet >= "A" && useralphabet <= "Z"){
    alert(`${useralphabet} is a uppercase`)
} else if (useralphabet >= "a" && useralphabet <= "z"){
    alert(`${useralphabet} is a lowercase`)
} else {
    alert("enter a valid alphabet")
}
*/


//          -------------------------------------------------------------------------------            //


// 9. Write a js program to input the week number and print weekday.

// Solution

/*
let userWeekNum = prompt("Enter the week number (1-7)")
let weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];


for (let i = 0; i < weekDays.length; i++){
    if (i === userWeekNum - 1) {
        alert(`${weekDays[i]}`);
    } else if (userWeekNum < 1 || userWeekNum > 7) {
        alert("Invalid week number");
    } else {
        alert(`"${userWeekNum}" is not a number`)
    }        
}
*/


//          -------------------------------------------------------------------------------            //


// 10. Write a js program to input the month number and print the number of days in that month.

// Solution

/*
let userMonthNum = prompt("Enter the month num (1-12)");
let monthDays = ["31","28","31","30","31","30","31","31","30","31","30","31"];

for(let i = 0;i < monthDays.length;i++){
    if(i === userMonthNum-1){
        alert(`${monthDays[i]} days`)
    } else if (userMonthNum < 1 || userMonthNum > 12){
        alert(`Invalid month number`)
    }
}
*/


//          -------------------------------------------------------------------------------            //


// 11. Write a js program to count a minimum number of notes in a given amount.

// Solution

/*
let userAmount = prompt("Enter the amount");
let notesAndCoins = [5000, 1000, 500, 100, 50, 20, 10, 5, 2, 1]
let possibleNotesAndCoins = []
let noOfNotes = 0

for (let index = 0; index < notesAndCoins.length; index++) {
    let notes = Math.floor(userAmount / notesAndCoins[index])
    if (notes > 0) {
        possibleNotesAndCoins.push(notesAndCoins[index])
        noOfNotes = noOfNotes + notes
        userAmount = userAmount - (notesAndCoins[index] * notes)
    }
}

alert(`number of possible minimum notes & coins: ${noOfNotes}`);
*/


//          -------------------------------------------------------------------------------            //


// 12. Write a js program to input marks of five subjects Physics, Chemistry,
// Biology, Mathematics, and Computer. Calculate percentage and grade
// according to the following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F

// Solution 

/*
let chemistryMarks = parseFloat(prompt("Enter Chemistry marks:"));
let physicsMarks = parseFloat(prompt("Enter Physics marks:"));
let biologyMarks = parseFloat(prompt("Enter Biology marks:"));
let mathematicsMarks = parseFloat(prompt("Enter Mathematics marks:"));
let computerMarks = parseFloat(prompt("Enter Computer marks:"));

let totalMarks = chemistryMarks + physicsMarks + biologyMarks + mathematicsMarks + computerMarks;
let marksPercentage = (totalMarks / 500) * 100;
let marksGrade;

if (marksPercentage >= 90) {
    marksGrade = "Grade A";
} else if (marksPercentage >= 80) {
    marksGrade = "Grade B";
} else if (marksPercentage >= 70) {
    marksGrade = "Grade C";
} else if (marksPercentage >= 60) {
    marksGrade = "Grade D";
} else if (marksPercentage >= 40) {
    marksGrade = "Grade E";
} else {
    marksGrade = "Grade F";
}

alert(`Percentage: ${marksPercentage.toFixed(2)}%`);
alert(`Grade: ${marksGrade}`);
*/


//          -------------------------------------------------------------------------------            //


// 13.Write a js program to input the basic salary of an employee and calculate its Gross salary according 
//    to the following:
//Basic Salary <= 10000 : HRA = 20%, DA = 80%
//Basic Salary <= 20000 : HRA = 25%, DA = 90%
//Basic Salary > 20000 : HRA = 30%, DA = 95

// Solution

/*
let basicSalary = parseFloat(prompt("Enter the basic salary in numbers")); 
let hra, da;

if (basicSalary <= 10000) {
    hra = 0.2 * basicSalary;
    da = 0.8 * basicSalary;
} else if (basicSalary <= 20000) {
    hra = 0.25 * basicSalary;
    da = 0.9 * basicSalary;
} else {
    hra = 0.3 * basicSalary;
    da = 0.95 * basicSalary;
}

let grossSalary = basicSalary + hra + da;
alert(`Gross Salary: ${grossSalary}`);
*/


//          -------------------------------------------------------------------------------            //


// 14. Write a js program to input electricity unit charges and calculate total
// electricity bill according to the given condition:
// For the first 50 units Rs. 0.50/unit
// For the next 100 units Rs. 0.75/unit
// For the next 100 units Rs. 1.20/unit
// For units above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill

// Solution

/*
let units = parseFloat(prompt("Enter the number of units consumed:"));
let totalBill = 0;

if (units <= 50) {
    totalBill = units * 0.50;
} else if (units <= 150) {
    totalBill = 50 * 0.50 + (units - 50) * 0.75;
} else if (units <= 250) {
    totalBill = 50 * 0.50 + 100 * 0.75 + (units - 150) * 1.20;
} else {
    totalBill = 50 * 0.50 + 100 * 0.75 + 100 * 1.20 + (units - 250) * 1.50;
}

totalBill *= 1.20;

alert(`Total electricity bill: Rs.${totalBill.toFixed(2)}`);
*/

//          -------------------------------------------------------------------------------            //
