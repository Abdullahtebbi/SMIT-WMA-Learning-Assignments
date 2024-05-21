//                                        Operators

/* 1: Arithmetic Operators */
//// + , _ , * , / , 
// let a = 5;
// let b = 2;

// console.log("a + b =", a + b);
// console.log("a - b =", a - b);
// console.log("a * b =", a * b);
// console.log("a / b =", a / b);


//// modulus operators (%)
// let a = 5;
// let b = 2;

// console.log("a % b =", a % b);


//// exponentiation (**)
// let a = 5;
// let b = 2;

// console.log("a ** b =", a ** b);

//// Unary Operators

/// > Increment Operator (++)
// let a = 2;
// a++;

// console.log(a);

// > post increment operator (?++)
// let a = 2;

// console.log(a++);

// > pre increment operator (++?)
// let a = 2;

// console.log(++a);

/// > decrement Operator (--)
// let a = 2;
// a--;

// console.log(a);

// > post decrement operator (?--)
// let a = 2;

// console.log(a--);

// > pre decrement operator (--?)
// let a = 2;

// console.log(--a);

/* 2: Assignment Operators */
// = , += , -= , *= , /= , %= , **= 

// (+=)
// let a = 5;
// a += 4;

// console.log(a);

// (-=)
// let a = 5;
// a -= 4;

// console.log(a);

// (*=)
// let a = 5;
// a *= 4;

// console.log(a);

// (/=)
// let a = 5;
// a /= 4;

// console.log(a);

// (%=)
// let a = 5;
// a %= 4;

// console.log(a);

// (**=)
// let a = 5;
// a **= 4;

// console.log(a);


//                                  Comparison Operators

// Not :>
//       Comparison operators given the input in boleun form data.(True & Faulse)

// Equal to (==)
// let a = 5;
// let b = 4;

// console.log(a == b)


// Equal to and datatypes (===) -> strickly version , check value & datatypes
// let a = 5;
// let b = "5";

// console.log(a === b);


// not equal to (!=)
// let a = 10;
// let b = 1;

// console.log(a != b)


// not equal to and datatypes (!==) strickly version , check value & datatypes
// let a = "1";
// let b = "1";

// console.log(a !== b)


// less then (<)
// let a = 3;
// let b = 5;

// console.log(a < b);


// less then equal to (<=)
// let a = 5;
// let b = 5;

// console.log(a <= b)


// grater then (>)
// let a = 3;
// let b = 1;

// console.log(a > b);


// grater then equal to (>=)
// let a = 4;
// let b = 4;

// console.log(a >= b);


//                                      Logical Operators

//// logical and (&&) Evaluate multiple expresions
// let a = 5;
// let b = 7;
// let condition1 = a < b;
// let condition2 = a !== b;

// console.log(condition1 && condition2);

//                                           Table
//                             condition-1  ,  condition-2   =   (&&)
//                                true             true      =    true 
//                                true             false     =    false 
//                                false             true     =    false 
//                                false             false    =    false 


//// logical or (||) Evaluate multiple expresions
// let a = 5;
// let b = 7;
// let condition1 = a < b;
// let condition2 = a !== b;

// console.log(condition1 || condition2);

//                                           Table
//                             condition-1  ,  condition-2   =   (||)
//                                true             true      =    true 
//                                true             false     =    true 
//                                false             true     =    true 
//                                false             false    =    false 


//// logical not (!) work on singal expretion
// let a = 5;
// let b = 7;
// let condition1 = a < b;

// console.log(!condition1);


//// Turnary operator (?:) -> (condition ? "true input" : "false input")
// let userAge = prompt("What's your age");

// let result = userAge >= 18 ? "Adult" : "Not adult";
// alert(result);

// second method
// let userAge = prompt("What's your age");

// userAge >= 18 ? alert("Adult") : alert("Not Adult");


//                          Conditional statements

// if statement
// let userAge = prompt("What's your age");

// if(userAge >= 18){
//     alert("You can vote")
// }
// if(userAge < 18){
//     alert("sorry you can't vote")
// }



// if-else statement 
// let mode = prompt("Enter the mode color");
// let color;

// if(mode === "dark"){
//     color = "dark";
// }else{
//     color = "white";
// }
// alert(color);


// else-if statement 
// let mode = prompt("Choose the background color in dark, blue, red, white ");
// let color;

// if(mode === "dark"){
//     color = "Black";
// }else if(mode === "blue"){
//     color = "Blue";
// }else if(mode === "red"){
//     color = "Red";
// }else{
//     color = "White"
// }
// alert(color);


//                                         Loops

//// for loop
// for(let i = 1 ; i <= 10 ; i++){
//     console.log(i);
// }

// Example :- (To calculate sum 1 to 10)
// let sum = 0;

// for(let i = 1 ; i <= 10 ; i++){
//     sum = sum + i;
// }
// console.log(sum);

//// While loop
// let i = 1;

// while (i <= 10) {
//     console.log(i);
//     i++;
// }

//// Do while loop
// let i = 1;

// do {
//     console.log(i);
//     i++;
// } while (i <= 10);

//// For of loop  (use for string and arrays)
// let str = "Hellow world";

// for(let val of str){
//     console.log(`val = ${val}`);
// }

// Check string lenght
// let str = "Hellow world";
// let strLenght = 0;
// for(let val of str){
//     console.log(`val = ${val}`);
//     strLenght++;
// }
// console.log(strLenght);

//// For in loop 
// let student = {
//     name: "Tayyab",
//     Age: 20,
//     cgpa: 3.7,
//     isPass: "Yes",
// }

// for(let key in student){
//     console.log(`key = ${key} value = ${student[key]}`);
// }


//                                      Strings

//// Creat string
// let str = "Hellow world";
// let str1 = 'Hellow world';

//// String lenght (check string lenght)
// string.lenght

//// string indices (index)
// let str = "hellow world";
// console.log(str[4]);

// Escape characters

// (/n) (break row)
// console.log("hellow\nworld");

// (/t)
// console.log("hellow\tworld");


//                                          String Methods

//not:-
//     These are built-in functions to manipulate a string.

//// .toUpperCase()
// let str = "hellow world";
// console.log(str.toUpperCase());

//// .toLowerCase()
// let str = "HELLOW WORLD";
// console.log(str.toLowerCase());

//// .trim()
// let str = "    Hellow world                    "
// console.log(str.trim());

//// .slice(start,end)
// let str = "Hellow Abdullah Tayyab"
// console.log(str.slice(7,22));

//// .split()
// let text = "a,b,c,d,e,f";
// const myStr = text.split(",");
// console.log(text);
// console.log(myStr);

//// .concat(?concat string)
// let str1 = "abdullahtayyab";
// let str2 = "109@gmail.com";
// console.log(str1.concat(str2));

//// .replace(searclVal,newVal)
// let str = " abdullah, tabbi, usman, salam";
// console.log(str.replace("tabbi","tayyab"));
// Example # 2
// let str = " 1, 0, 3, 4";
// console.log(str.replace(0,2));

//// .charAt(index)
// let str = "Tayyab";
// console.log(str.charAt(1));

// .indexOf("")
// let str = "Abdullah Tayyab";
// console.log(arr.indexOf("T"));

// .lastIndexOf("")
// let str = "Hello World";
// console.log(str.lastIndexOf("Wo"));

// .charCodeAt() --> Assign uniqe value to index
// let str = "Hello world";
// console.log(str.charCodeAt(2));

//                                        Arrays

//// Creat array 
// let marks =  [27,84,47,76,98,48];
// let frinds = ["sabir","shazil","arslan"];
// console.log(frinds);


////Array indices -> arr[index]
// let arr = [15,65,76,78,11,90];
// console.log(arr);

//// change index value using this method
// let arr = [15,65,76,78,11,90];
// arr[2] = 66;
// console.log(arr);

//// Looping over an array 
// for of loop 
// let cities = ["Nankana Sahib","Jaranwala","Tandla","Khurlyanwala"];
// for(let city of cities){
//     console.log(city);
// }


//                                        Array Methods

// //// .unshift() -> add to start -> (change original array)
// let friends = ["ali haider","saibr ali","shahzil"];
// friends.unshift("saboor");
// console.log(friends);

////  .push() -> add to end -> (change original array)
// let friends = ["saboor","ali haider","saibr ali","shahzil"];
// friends.push("ARSLAN")
// console.log(friends);

// //// .shift() -> delete from start & return -> (change original array)
// let friends = ["saboor","ali haider","saibr ali","shahzil"];
// console.log(friends);
// let deleteItems = friends.shift();
// console.log(friends);
// console.log(deleteItems); // (return delete value)

//// .pop() -> delete from end & return  -> (change original array)
// let friends = ["saboor","ali haider","saibr ali","shahzil"];
// console.log(friends);
// let deleteItems = friends.pop();
// console.log(friends);
// console.log(deleteItems); // (return delete value)

////.to string -> (not change to original array)
// let friends = ["saboor","ali haider","saibr ali","shahzil"];
// console.log(friends);
// console.log(friends.toString());
// Example # 2
// let marks = [12,34,53,25,52,52];
// console.log(marks);
// console.log(marks.toString());

//// .concat(joining arrays) -> (not change to original array)
// let oldFriends = ["saboor","ali haider",];
// let newFriends = ["sabir ali","shahzil"];
// console.log(oldFriends.concat(newFriends));

// .slice(start index, end index) -> returns a piece of the array -> (not change to original array)
// let friends = ["saboor","ali haider","saibr ali","shahzil"];
// console.log(friends.slice(1,3));
// console.log(friends);

// .splice(start index, delete count, new element) -> (add, remove, replace) -> (change original array)
// let friends = [1, 2, 3, 4, 0, 0, 7, 8, 9, 10];
// friends.splice(4,2,5,6);
// console.log(friends);

//// .at(index) find value on index
// let arr = [1,4,5,6,7,4,5]
// console.log(arr.at(1));

//// .fill() --> fill every element 
// let arr = [1,4,5,6,7,4,5];
// console.log(arr.fill(2));

//// .reverse()
// let arr = [1,4,5,6,7,4,5];
// console.log(arr.reverse());

//// .includes() check value in array and return true and false
// let arr = [1,4,5,6,7,4,5]; 
// console.log(arr.includes(1));

//// .map((item) => perform work) not to get item in numbers 
// let arr = [1, 4, 5, 6, 7, 4, 5];
// console.log(arr.map((num) => 2 + num));

//// .filter((item) => perform work) not to get item in numbers
//  let arr = [1,4,5,6,7,4,5]; 
// console.log(arr.filter((num) => num <= 5));

//// .find((num) => perform work) not to get item in numbers
// let arr = [1,4,5,6,7,4,5]; 
// console.log(arr.find((num) => num > 5));

//// .every((num) => ? ) check value in array and return true and false
// let arr = [1,4,5,6,7,4,5]; 
// console.log(arr.every((num) => num > 0));

//// . findIndex((num) ?) return index of value and not to get item in numbers
// let arr = [1,4,5,6,7,4,5];
// console.log(arr.findIndex((num) => num === 7)); 

//// .reduce((pre, curr) => pre + curr , 0) --> Using .reduce() to sum all elements of the array
// const arr = [1, 3, 4, 4, 6];
// const sum = arr.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
// console.log(sum);

//// .toString() using to array convert to string
// let arr = [1,4,5,6,7,4,5];
// console.log(arr);
// console.log(arr.toString());

//// .join()
// let arr = [1,4,5,6,7,4,5];
// console.log(arr.join(" * "));

//// .sort() --> sort string alphabeticaly
// let arr = [1,4,5,6,7,4,5];
// console.log(arr.sort());

// numeric sort
// let arr = [1,4,5,6,7,4,5];
// console.log(arr.sort(function(a,b){return a-b}));

// numeric descending sort
// let arr = [1,4,5,6,7,4,5];
// console.log(arr.sort(function(a,b){return b-a}));

// random sort
// let arr = [1,4,5,6,7,4,5];
// console.log(arr);
// console.log(arr.sort(function(a,b){return 0.5 - Math.random()}));


//                                    Object
 
//// creat object
// let student = {
//     fullName : "Abdullah Tayyab",
//     age : 20,
//     height : 5.8,
//     skill : "coding",
//     passion : function (){
//         return this.skill;  
//     }

// }
// console.log(student);

// --> call array funstion 
// console.log(student.passion());

// --> update value in object
// student.age = 19;
// console.log(student);

// --> increment
// student.age++;
// console.log(student);

// --> Access keys
// console.log(Object.keys(student));

// --> Access values 
// console.log(Object.values(student));

// --> Add a new property to an existing object
// student.gender = "Male";
// console.log(student);

// --> To iterate over those keys and retrieve their corresponding values from the  object
// let outPut = Object.keys(student).map(function(e){
//     return student[e]
// })

// console.log(outPut);

// --> ruturn key value pair using for i loop
// let student = {
//    fullName : "Abdullah Tayyab",
//    age : 20,
//    passion : "coding"
// }
// let arr = []
// for(let key in student){
//     arr.push([key, student[key]]);
// }
// console.log(arr);


//                               Javascript JSON 

// --> creat JSON object
/*
let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';
*/

// --> JSON.parse() -> to convert the string into a JavaScript object:
// let object = JSON.parse(text);
// console.log(text); // before
// console.log(object); // after

// --> document.write(); -> Access
// let firstName = object.employees[1].firstName; 
// console.log(firstName);

// --> JSON.stringfy(); 
// console.log(JSON.stringify(object));


//                                Javascript Dates

// --> new Date(); \\ Date(); check current date and time
// let date = new Date();
//  console.log(date);

// --> date declaration 
// let date = new Date("2017-06-23");
//  console.log(date);

// --> is set to january 01
// let date = new Date("2017");
//  console.log(date);

// --> YYYY-MM-DDTHH:MM:SSZ
// let date = new Date("2017-06-23T12:00:00-09:45");
//  console.log(date);

// --> long date format
// let date = new Date("June 23 2017");
//  console.log(date);

// --> Time Zone
// let date = new Date("June 23 2017 07:45:00 GMT+0530");
//  console.log(date);

// --> getting the weekday
// let date = new Date();
// console.log(date.getDay());

// --> day as a number (0-31)
// let date = new Date();
// console.log(date.getDate());

// --> four digit year (yyyy)
// let date = new Date();
// console.log(date.getFullYear());

// --> get hour
// let date = new Date();
// console.log(date.getHours());

// --> get Milli seconds (0-999)
// let date = new Date();
// console.log(date.getMilliseconds());

// --> get minutes (0-59)
// let date = new Date();
// console.log(date.getMinutes());

// --> get Month (0-11)
// let date = new Date();
// console.log(date.getMonth());

// --> get seconds (0-59)
// let date = new Date();
// console.log(date.getSeconds());

// milliseconds since 1970
// let date = new Date();
// console.log(date.getTime());


//                                Javascript Math

// --> value of pi
// let pi = Math.PI
// console.log(pi);

// --> Math.random() -> return random value everytime
// let ex = Math.random();
// console.log(ex); 

// --> Math.round() -> 4 - rounded
// let ex = Math.round(4.4);
// console.log(ex);

// --> 256 - 2 to the power of 8
// let ex = Math.pow(2,8);
// console.log(ex);
// 

// --> 7 square root 
// let ex = Math.sqrt(81);
// console.log(ex);

// --> 3.14 - absolute, positive value
// let ex = Math.abs(-3.14);
// console.log(ex);

// --> 4 - rounded up 
// let ex = Math.ceil(3.14

// --> 3 - rounded down 
// let ex = Math.floor(3.99);
// console.log(ex);

// --> 0 - sine
// let ex = Math.sin(0);
// console.log();

// --> Math.cos()
// let ex = Math.cos(Math.PI

// --> math.min() -> return the lowest value
// let ex = Math.min(1.6,87,9.1);
// console.log(ex);

// --> math.max() -> return the hifgesr value
// let ex = Math.max(1.6,87,9.1);
// console.log(ex);

// --> Math.log() -> natural logarithum
// let ex = Math.log(1);
// console.log(ex);

// --> Math.exp()
// let ex = Math.exp(1);
// console.log(ex);

// -->
// let ex = Math.floor(Math.random() * 5) + 1;
// console.log(ex);



//                                  Javascript Numbers

let pi = 3.141;

// --> .toFixed() returns - 3
// console.log(pi.toFixed(0));

// --> .toPrecision() // pass value 1 - 100
// console.log(pi.toPrecision(1));

// --> .valueOf() -> returns numbers
// console.log(pi.valueOf());

// --> Number(true) -> converts to number
// console.log(Number(true));

// --> Number(new Date()) -> number of milliseconds since 1970
// let ex = Number(new Date());
// console.log(ex);

// --> parseInt("") -> return the first number : 
// let ex = parseInt("3 months");
// console.log(ex);

// --> parseFloat("") 
// let ex = parseFloat("3.5 months");
// console.log(ex);

// --> Number.MAX_VALUE -> largest possible js number
// console.log(Number.MAX_VALUE);

// --> Number.MIN_VALUE -> smallest possible js number
// console.log(Number.MIN_VALUE);

// -->Number.NEGATIVE_INFINITY -> Infinity
// console.log(Number.NEGATIVE_INFINITY);

// -->Number.POSITIVE_INFINITY -> Infinity
// console.log(Number.POSITIVE_INFINITY);

