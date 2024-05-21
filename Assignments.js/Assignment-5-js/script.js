
//                                      JavaScript Object


// ---------------------------------------> Task 1: Object Creation

// (1) : Create an empty object and assign it to a variable.
// Solution :-
/*
let emptyObject = {};
console.log(emptyObject);
*/

//                               <--------------------------------------->                              //

// (2) : Create an object with properties for name, age, and profession.
// Solution :-
/*
let student = {
    fullName : "Abdullah Tayyab",
    age : 20,
    profession : "coding"
}
console.log(student);
*/

//                               <--------------------------------------->                              //


// ------------------------------------> Task 2: Object Properties

// (1) : Access and print the values of properties from an object.
// Solution :-
/*
let student = {
    fullName : "Abdullah Tayyab",
    age : 20,
    profession : "coding"
}
console.log(Object.values(student));
*/

//                               <--------------------------------------->                              //

// (2) : Modify the value of a property in an object.
// Solution :-
/*
let student = {
    fullName : "Abdullah Tayyab",
    age : 20,
    profession : "coding"
}
student.age = 19;
console.log(student);
*/

//                               <--------------------------------------->                              //

// (3) : Add a new property to an existing object.
// Solution :-
/*
let student = {
    fullName : "Abdullah Tayyab",
    age : 20,
    profession : "coding"
}
student.gender = "Male";
console.log(student);
*/

//                               <--------------------------------------->                              //



// -------------------------------------> Task 3: Object Methods

// (1) : Create an object method that prints a message to the console.
// Solution :-
/*
let myObject = {
    myName : "Abdullah Tayyab",
    sayHello : function(){
        console.log(`Hello ${myObject.myName}!`);
    }
}
myObject.sayHello();
*/

//                               <--------------------------------------->                              //

// 2 : Create a method that calculates and returns a value based on object properties.
// Solution :-

// let studentMarks = {
//     Physics : 76,
//     Chemistery : 89,
//     Biology : 78,
//     Math : 56,
//     English : 77,
//     calculateNum : function(){
//         return this.Physics + this.Chemistery + this.Biology + this.Math + this.English;
//         }
//     }
// console.log(studentMarks.calculateNum());

//                               <--------------------------------------->                              //



// --------------------------------------> Task 4: Object Iteration

// 1 : Iterate over the properties of an object and print their values.
// Solution :-
/*
let person = {
    firstName: "Abdullah",
    lastName: "Tayyab",
    age: 20,
    skill : "coding",
    email: "abdullahtebbi@example.com"
};

for (let key in person) {
        console.log(`${key} : ${person[key]}`);
}
*/

//                               <--------------------------------------->                              //

// 2 : Iterate over the properties of an object and perform a specific action for each property.
// Solution :-
/*
let person = {
    firstName: "Abdullah",
    lastName: "Tayyab",
    age: 20,
    skill : "coding",
    email: "abdullahtebbi@example.com"
};
for(let key in person){
    console.log(`Property: ${key}, Value: ${person[key]}`);
};
*/

//                               <--------------------------------------->                              //

// -------------------------------------> Task 5: Object Comparison

// 1 : Compare two objects to check if they have the same properties and values.
// Solution :-
/*
let person1 = {
    firstName: "Abdullah",
    lastName: "Tayyab",
    age: 20,
    skill: "coding"
};

let person2 = {
    firstName: "Abdullah",
    lastName: "Tayyab",
    age: 20,
    skill: "coding"
};

let equal = true;

for (let key in person1) {
    if (!(key in person2) || person1[key] !== person2[key]) {
        equal = false;
        break; 
    }
}
console.log(equal);
*/
// Method 2
/*
let person1 = {
    firstName: "Abdullah",
    lastName: "Tayyab",
    age: 20,
    skill: "coding"
};

let person2 = {
    firstName: "Abdullah",
    lastName: "Tayyab",
    age: 20,
    skill: "coding"
};

if(JSON.stringify(person1) === JSON.stringify(person2)){
    console.log("Object: 1 & Object:2 are same");
}else{
    console.log("Object: 1 & Object:2 are not same");
}
*/

//                               <--------------------------------------->                              //

// 2 : Compare two objects to check if they refer to the same object in memory.
// Solution :-
/*
let person1 = {
    firstName: "Abdullah",
    lastName: "Tayyab",
    age: 20,
    skill: "coding"
};

let person2 = {
    firstName: "Abdullah",
    lastName: "Tayyab",
    age: 20,
    skill: "coding"
};

console.log(person1 === person2); 
*/

//                               <--------------------------------------->                              //


// -----------------------------------------> Task 6: Object Nesting

// 1 : Create an object that contains another object as one of its properties.
// Solution :-
/*
let innerObject = {
    name: "Inner Object",
    value: 10
};

let outerObject = {
    id: 1,
    description: "Outer Object",
    inner: innerObject
};

console.log(`Outer Object ID:, ${outerObject.id}`);
console.log(`Outer Object Description:, ${outerObject.description}`);
console.log(`Inner Object Name:, ${outerObject.inner.name}`);
console.log(`Inner Object Value:, ${outerObject.inner.value}`);
*/

//                               <--------------------------------------->                              //

// 2 : Access and modify properties of a nested object.
// Solution :-
/*
let person1 = {
   firstName : "Abdullah Tayyab",
   lastName : "Tayyab",
   age : 20,
   skill : "coding",
   person2 : {
    fullName : "Ali Amjad",
    age : 18,
    skill : "sheff"
   }
}
// print all properties
console.log(`First Name of person 1 : ${person1.firstName}`);
console.log(`Last Name of person 1 : ${person1.lastName}`);
console.log(`Age of person 1 : ${person1.age}`);
console.log(`Skill of person 1 : ${person1.skill}`);
console.log(`full Name of person 2 : ${person1.person2.fullName}`);
console.log(`Age of person 2 : ${person1.person2.age}`);
console.log(`Skill of person 2 : ${person1.person2.skill}`);

// Modify properties
person1.person2.fullName = "Usman shah";
person1.person2.age = 21;
person1.person2.skill = "driving";

// print properties after modifying
console.log("print after modifying properties");
console.log(`full Name of person 2 : ${person1.person2.fullName}`);
console.log(`Age of person 2 : ${person1.person2.age}`);
console.log(`Skill of person 2 : ${person1.person2.skill}`);
*/

//                               <--------------------------------------->                              //



// ------------------------------------> Task 7: Object Prototypes

// 1 : Create a prototype object and use it to create multiple instances of objects.
// Solution :-
/*
// Define a constructor function for the prototype object
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

// Add a method to the prototype
Car.prototype.info = function() {
    return `This is a ${this.year} ${this.make} ${this.model}.`;
};

// Create multiple instances of the Car prototype object
let car1 = new Car("Toyota", "Camry", 2020);
let car2 = new Car("Honda", "Civic", 2018);
let car3 = new Car("Ford", "F-150", 2019);

// Access properties and method of each instance
console.log(car1.info()); 
console.log(car2.info());
console.log(car3.info()); 
*/

//                               <--------------------------------------->                              //

// 2 : Add a method to the prototype object and observe its effect on the instances.
// Solution :-
/*
function person(name,age){
    this.name = name;
    this.age = age;
}

person.prototype.great = function(){
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}

let person1 = new person("Ali",19) 
let person2 = new person("Hamza",20) 

person1.great();
person2.great();
*/

//                               <--------------------------------------->                              //



// -------------------------------------> Task 8: Object Serialization

// 1 : Convert an object to a JSON string using JSON.stringify().
// Solution :-
/*
let person = {
    firstName: "Abdullah",
    lastName: "Tayyab",
    age: 20,
    skill: "coding"
};

let jsonString = JSON.stringify(person);
console.log(jsonString);
*/

//                               <--------------------------------------->                              //

// 2 : Parse a JSON string and convert it back to an object using JSON.parse().
// Solution :-
/*
let person = {
    firstName: "Abdullah",
    lastName: "Tayyab",
    age: 20,
    skill: "coding"
};
// Convert object to string
let jsonString = JSON.stringify(person);
console.log(jsonString);

// Parse JSON string and convert it back to an object
let convertedObject = JSON.parse(jsonString);
console.log(convertedObject);
*/

//                               <--------------------------------------->                              //



// ---------------------------------> Task 9: Object Destructuring

// 1 : Use object destructuring to extract specific properties from an object.
// Solution :-
/*
let person = {
    fullName : "Abdullah Tayyab",
    age : "20",
    skill : "coding",
    height : 5.8
}

// object destructuring 
let {fullName, age, skill} = person;

console.log(fullName);
console.log(age);
console.log(skill);
*/

//                               <--------------------------------------->                              //



// --------------------------------> Task 10: Object Property Enumeration

// 1 : Use Object.keys() to get an array of all the property names of an object.
// Solution :-
/*
let person = {
    fullName : "Abdullah Tayyab",
    age : "20",
    skill : "coding",
    height : 5.8
}

let getKeys = Object.keys(person);
console.log(getKeys);
*/

//                               <--------------------------------------->                              //



// ------------------------------------> Task 11: Object Inheritance

// 1 : Create a parent object and a child object that inherits properties and methods from the parent.
// Solution :-
/*
// Parent object
let Parent = {
    name: "Parent",
  
    sayHello: function() {
      console.log("Hello, I'm the parent.");
    }
  };
  
  // Child object inheriting from Parent
  let Child = Object.create(Parent);
  Child.name = "Child";
  
  Child.sayHi = function() {
    console.log("Hi, I'm the child.");
  };
  
  Parent.sayHello(); 
  Child.sayHello(); 
  Child.sayHi(); 
  */

//                               <--------------------------------------->                              //

// -----------------------------------------> Task 12: Object Privacy

// 1 : Create private properties in an object using closures or symbols.
// Solution :-
/*
let _name = Symbol();
let  age = Symbol();

let createPerson = (name, age) => {
  let person = {};

  person[_name] = name;
  person[age] = age;

  person.getName = () => person[_name];
  person.setName = (newName) => {
    person[_name] = newName;
  };
  person.getAge = () => person[age];
  person.setAge = (newAge) => {
    if (newAge >= 0) {
      person[age] = newAge;
    }
  };

  return person;
};

let person = createPerson("John", 30);

console.log(person[_name]);
console.log(person.getName()); 
console.log(person.getAge());

person.setName("Alice");
person.setAge(25);

console.log(person.getName()); 
console.log(person.getAge());
*/

//                               <--------------------------------------->                              //
