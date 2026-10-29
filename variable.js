
/*
Assignment: Variables & Data Types (JavaScript)
Name: Farhan
*/

// ==============================
// Task 1 - Create Variables
// ==============================

let name = "Farhan";
let age = 30;
let isStudent = true;

let colors = ["Black", "Blue", "Red", "White", "Green"];

let info = {
    name: "Farhan",
    age: 30,
    city: "Karachi"
};

let aboutMe; // Undefined variable
let address = null; // Null variable


// ==============================
// Task 2 - Update Variables
// ==============================

let course = "JavaScript";
course = "React"; // let ki value update ho gayi

const country = "Pakistan";

// country = "India";
// Error: Assignment to constant variable.
// const ki value dobara assign nahi kar sakte.


// ==============================
// Task 3 - Print Output
// ==============================

console.log("===== Variable Values =====");

console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);
console.log("Favorite Colors:", colors);
console.log("Info:", info);
console.log("About Me:", aboutMe);
console.log("Address:", address);
console.log("Course:", course);
console.log("Country:", country);


// ==============================
// Task 4 - Check Data Types
// ==============================

console.log("===== Data Types =====");

console.log("Name:", typeof name);
console.log("Age:", typeof age);
console.log("Is Student:", typeof isStudent);
console.log("Colors:", typeof colors);
console.log("Info:", typeof info);
console.log("About Me:", typeof aboutMe);
console.log("Address:", typeof address);
console.log("Course:", typeof course);
console.log("Country:", typeof country);


// ==============================
// Task 5 - Variable Naming Rules
// ==============================

// Invalid 1:
// let 1name = "Ali";
let name1 = "Ali";

// Invalid 2:
// let for = "Hello";
let courseName = "Web Development";

// Invalid 3:
// let my-name = "Farhan";
let myName = "Farhan";

// Invalid 4:
// let user name = "Ali";
let userName = "Ali";

// Invalid 5:
// let @price = 1000;
let price = 1000;

console.log("===== Correct Variable Names =====");
console.log(name1);
console.log(courseName);
console.log(myName);
console.log(userName);
console.log(price);
