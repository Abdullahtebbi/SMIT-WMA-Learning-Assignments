
//                                      LOOPS EXERCISE



// 1. Write a JS code to print numbers from 1 to 10.

// Solution

/*
for (let index = 1; index <= 10; index++) {
    console.log(index);
}
*/

//          ---------------------------------------------------------------------------------         //


// 2. Write a JS code to print Even numbers in given array.

// Solution

/*
let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

for (let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0){
        console.log(`${arr[i]}`);
    }   
}
*/

//          ---------------------------------------------------------------------------------         //

// 3. Write a JS code to delete all occurrence of element in given array.

// Solution

/*
let arr = [1, 2, 3, 4, 2, 5, 2];
let newArr = [];
let deleteElement = 2;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== deleteElement) {
        newArr.push(arr[i]);
    }
}    
console.log(`${newArr}`);
*/


//          ---------------------------------------------------------------------------------         //


// 4. Write a JS code to find the power of a number using for loop.

// Solution

/*
let base = prompt("Enter the base value");
let exponent = prompt("Enter the exponent value");
let result = 1;

for (let i = 0; i < exponent; i++) {
    result = result * base;
}

console.log(`The result of ${base} raised to the power of ${exponent} is: ${result}`);
*/


//          ---------------------------------------------------------------------------------         //


// 5. Write a JS code to print a pattern using for loop
/*
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
1 2 3 4 5 6
1 2 3 4 5 6 7
1 2 3 4 5 6 7 8 
*/

// Solution

/*
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write(j + " ");
    }
    console.log();
}
*/


//          ---------------------------------------------------------------------------------         //


// 6. Write a JS code to find the no of digits in a number.

// Solution

/*
let num = prompt("Enter the number");
let count = 0;

while (num >= 1 || num <= -1) {
    num = Math.floor(num / 10);
    count++;
}
alert(`Number of digits: ${count}`);
*/

//          ---------------------------------------------------------------------------------         //


// 7. Write a JS code to calculate the sum of digits in a number.

// Solution 

/*
let userNum = prompt("Enter the Number") 
let sum = 0

while (userNum >= 1) {
    sum = Math.floor(sum + userNum % 10)
    userNum = Math.floor(userNum / 10)
}

alert(`sum : ${sum}`);
*/

//          ---------------------------------------------------------------------------------         //


// 8. Write a JS code to find the largest number in an array.

// Solution

/*
let arr = [3, 22, 45, 24, 48, 599, 600, 307, 500 , 32 , 402]
let maxNum = -Infinity

for (let index = 0; index < arr.length; index++) {
    if (maxNum < arr[index]) {
        maxNum = arr[index]
    }
}
console.log(maxNum);
*/

//          ---------------------------------------------------------------------------------         //


// 9. Write a JS code to print the Fibonacci series for a given value of N

// Solution

/*
let a = 0
let b = 1
let n = 1000

for (let index = 2; index < n; index++) {
    let tem = a
    a = b
    b = b + tem

    console.log(`${b}`);
}

console.log(`b after loop ${b}`);
*/

//          ---------------------------------------------------------------------------------         //


// 10. Write a JS code to find duplicate values in a given array.

// Solution

/*
let array = [1, 2, 3, 4, 5, 5, 3, 6, 7, 8, 10, 9, 10, 1];
let duplicates = [];

    for (let i = 0; i < array.length; i++) {

        for (let j = i + 1; j < array.length; j++) {

            if (array[i] === array[j]) {
                duplicates.push(array[i]);
            }
        }
    }

console.log(`Duplicate values in the array: ${duplicates}`);
*/


//          ---------------------------------------------------------------------------------         //


// 11. Write a JS code for Linear search algorithm.

// Solution

/*
let array = [5, 3, 8, 2, 9, 1];
let findNum = 8;
let index = -1; 


for (let i = 0; i < array.length; i++) {
    if (array[i] === findNum) {
        index = i;  
    }
}

if (index !== -1) {
    console.log(`Target ${findNum} found at index ${index}.`);
} else {
    console.log(`Target ${findNum} not found in the array.`);
}
*/


//          ---------------------------------------------------------------------------------         //


// 12. Write a JS code for Binary search algorithm

// Solution

/*
let numbers = [3957, 3537, 37573, 36534, 599, 93732, 29749, 9274972]
let findNum = 93732;

let start = 0
let end = numbers.length - 1

let ansLocation = -1

while(start <= end){
    let mid = Math.floor((start + end) / 2)

    if (numbers[mid] == findNum) {
        ansLocation = mid
        break
    }

    if(numbers[mid] < findNum){
        start = mid + 1;
    } else {
        end = mid - 1
    }
}

console.log(ansLocation);
*/


//          ---------------------------------------------------------------------------------         //
