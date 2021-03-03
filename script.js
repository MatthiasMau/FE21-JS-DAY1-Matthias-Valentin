// /* Basic Exercise 1 */

// console.log("Hello from the Console");
// document.write("Hello from the Browser");

// // Basic Exercise 2 

// let age = 25;
// console.log("Hi my name is Martin and I am " + age + " years old");

// let players = ["Martin", "Thomas", "Peter", "Mathias", "Niki"];

// console.log("The most valuable player of the match is " + players[2]);

// // Intermediate Exercise 1 
// // Using the sort method to sort all the elements in the array alphabetically 
// let cars = ["Tesla", "Audi", "Renault", "Volvo", "Mazda", "Fiat", "Ferrari"];

// cars.sort();

// console.log(cars);

// // Intermediate Exercise 2

// let fruits = ["apple", "banana", "kiwi"];

// // // Using the push method
// fruits.push("orange");
// console.log(fruits);

// // Using the pop method
// fruits.pop("orange");
// console.log(fruits);


// let animals = ["monkey", "horse", "dog"];

// // Using the sort method for an alphabetical order
// animals.sort();
// console.log(animals);

// //Using the unshift method to add a "cat" in the beginning of the array 
// animals.unshift("cat");
// console.log(animals);

// // Intermediate Excercise 3

// let fruitsSplit= "mango/cherries/kiwi/grapes/pear/peach/orange/lemon";
// let newArray = new Array();
// // Giving a value to the newArray and using the split method to order the elements in the Array in a column
// newArray = fruitsSplit.split("/");
// console.log(newArray);


//Advanced Excercise Number 1

// let a = 7;
// let b = 14;
// let c = "21";
// let d = "36";
// let e = "42";

// Using the parseInt Method to turn the strings into numbers
// let c = parseInt("21");
// let d = parseInt("36");
// let e = parseInt("42");

// console.log(c, d, e);
// Creating a new varible and giving it a new value, containing the sum of all numbers
// let sumOfNumbers = (a + b + c + d + e); //120 is the sum of all numbers
// console.log(sumOfNumbers);

//Advanced Excercise Number 1 /second part/


// let f = "1";
// let g = "15";
// let h = "8";
// let i = "1";

// Using parseInt method we are turning the strings into numbers
// let f = parseInt("1");
// let g = parseInt("15");
// let h = parseInt("8");
// let i = parseInt("1");



// let mutliplyNumbers = (f * g * h * i);
// console.log(mutliplyNumbers);//120 the result

// // Dividing the two results via an arithmetic operator

// let divideNumbers = (sumOfNumbers / mutliplyNumbers);
// console.log(divideNumbers);

// Advanced Excercise 2

let multidimensionalArray = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 25, 7], [21, 4, 6, 17], [3, 5, 26, 3]];

console.log(multidimensionalArray[1][1]);
// Putting the first Number into a new Variable 
let firstNum = multidimensionalArray[1][1];
console.log(firstNum);

console.log(multidimensionalArray[4][2]);
//  Putting the second Number into a new Variable 
let secondNum = multidimensionalArray[4][2];
console.log(secondNum);

console.log(multidimensionalArray[5][3]);
//  Putting the third Number into a new Variable 
let thirdNum = (multidimensionalArray[5][3]);
console.log(thirdNum);

console.log(multidimensionalArray[2][1]);
// Putting the fourth Number into a new Variable 
let fourthNum = (multidimensionalArray[2][1]);
console.log(fourthNum);

console.log(multidimensionalArray[2][1]);
// Putting the fifth Number into a new Variable 
let fifthNum = (multidimensionalArray[2][1]);
console.log(fifthNum);


// Challenge Excercise 1 | Multidimensional Array Task

let arrayChallenge = [
    ["city", "Vienna", "Budapest", "Tokyo", "Sofia"],
    ["amazing", "are", "is", "all", "of", "them"],
    ["an", "let", "it", "be", "an", "a", "hope", "not"],
    ["all", "of", "them", "are", "amazing", "cities", "pretty", "cool"],
    ["Stadt", "Hauptstadt", "City", "Capital", "trophy", "deserved"]
];

let displayCity = (arrayChallenge[0][1]);
console.log(displayCity);
let displayIs = (arrayChallenge[1][2]);
console.log(displayIs);
let displayAn = (arrayChallenge[2][4]);
console.log(displayAn);
let displayAmz = (arrayChallenge[3][4]);
console.log(displayAmz);
let displayLastRow = (arrayChallenge[4][2]);
console.log(displayLastRow);

let displayChallenge = (displayCity + " " + displayIs + " " + displayAn + " " + displayAmz + " " + displayLastRow);
console.log(displayChallenge);

// Challenge Excercise 2 | String Manipulation

let unstructuredSentence = "Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$properties $flow$down;$actions$flow$up."

let splitSentence = unstructuredSentence.split("$");
console.log(splitSentence);

let splitSentenceTwo = unstructuredSentence.replaceAll("$", " ");
console.log(splitSentenceTwo);


















