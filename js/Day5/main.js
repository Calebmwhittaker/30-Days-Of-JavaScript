//DAY 5
//ARRAYS
//Arrays can store multiple values with a unique index
/*Each index within an array has a reference in a 
    memory address */
//The index of an array begins from zero
/*The last index of an array is less than one of 
the length of the array*/
/*Arrays are ordered and modifiable */
//Arrays can be empty

//EMPTY ARRAYS
/*It is common to use const instead of let to
    declare an array variable */

//ARRAY CONSTRUCTORS
// const numbers = Array(1, 2, 3);
// console.log(numbers);
// let letters = new Array("a", "b", "c");
// console.log(letters);
/*If you use the 'let' variable, you need to use the
    new keyword prior to the Array object */
//ARRAY SQUARE BRACKETS
// const arr = [];
// console.log(arr);
/*This is the most recommended way to create empty
    arrays */

// const numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // array of numbers
// const fruits = ["banana", "orange", "mango", "lemon"]; // array of strings, fruits
// const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"]; // array of strings, vegetables
// const animalProducts = ["milk", "meat", "butter", "yoghurt"]; // array of strings, products
// const webTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"]; // array of web technologies
// const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"]; // array of strings, countries

// console.log("Numbers:", numbers);
// console.log("Number of Numbers:", numbers.length);

/*Arrays can have different data types within a
    single array*/
// const arr = [
//   "Caleb",
//   22,
//   true,
//   { country: "USA", city: "Bay City" },
//   { skills: ["HTML", "CSS", "JS", "REACT", "PYTHON"] },
// ];
// console.log(arr);

//SPLIT METHOD
// let word = "JavaScript";
// const charsInWord = word.split("");
// console.log(charsInWord);
//Splits characters within word into an array

// let companiesString = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
// const companies = companiesString.split(",");
// console.log(companies);
/*Can split strings using a delimiter */

//ACCESSING ARRAY ITEMS WITH INDEX
// const fruits = ["banana", "orange", "mango", "lemon"];
// let firstFruit = fruits[0];
// let secondFruit = fruits[1];
// let lastFruit = fruits.length - 1;
// console.log(firstFruit);
// console.log(secondFruit);
// console.log(fruits[lastFruit]);

//MODIFYING ARRAY ELEMENT
// const numbers = [1, 2, 3, 4, 5];
// numbers[0] = 10;
// numbers[1] = 20;
// console.log(numbers);

//ARRAY CONSTRUCTOR
// const arr = Array();
// console.log(arr); //creates an empty array

// const eightEmptyValues = Array(8); /*Creates an
//     integer amount of values in an array */
// console.log(eightEmptyValues);

//STATIC FILL
// const arr = Array();
// console.log(arr);

// const nineEmptyValues = Array(9);
// console.log(nineEmptyValues);
// const eightXValues = Array(8).fill("X");
// console.log(eightXValues);
// eightXValues[1] = "O"; /*Could be used to make tic tac toe */
// console.log(eightXValues);

//ARRAY CONCATENATION
// const firstList = [1, 2, 3];
// const secondList = [4, 5, 6];
// const fullList = firstList.concat(secondList);
// console.log(fullList);
/*Put the first list first and then put the list 
that you want to concatenate within the concatenate
method*/

//LENGTH OF ARRAY
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.length);

//INDEX OF ARRAY
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.indexOf(5));
// console.log(numbers.indexOf(6));
/*If a value doesn't exist in the array, -1 will
    be returned in the console */

//CHECK ITEMS IN A LIST
// const fruits = ["banana", "orange", "mango", "lemon"];
// let userIndex = prompt("Enter a fruit:", "");
// let index = userIndex.toLowerCase();
// console.log(index);
// let indexFruit = fruits.indexOf(index);
// console.log(indexFruit);

// if (index === -1) {
//   console.log("This fruit does not exist in the array");
// } else {
//   console.log("This fruit exists in the array");
//   if (confirm("Do you want to add a new fruit?") == true) {
//     newFruit = prompt("Enter a new fruit to add:");
//     pushNewFruit = fruits.push(newFruit);
//     console.log(fruits);
//   } else {
//     console.log("You chose not to add a new fruit");
//   }
// }

//LAST INDEX OF ARRAY
// const numbers = [1, 2, 3, 4, 5, 3, 1, 2];
// console.log(numbers.lastIndexOf(2)); //7
// console.log(numbers.indexOf(2)); //1
//Returns the index of the value

//INCLUDES IN ARRAY
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.includes(5)); //true
// console.log(numbers.includes(71)); //false
//Returns a boolean value for a given value in an array

//CHECK ARRAY TYPE
// const numbers = [1, 2, 3, 4];
// const string = "string";
// console.log(Array.isArray(numbers)); //true
// console.log(Array.isArray(string)); //false

//CONVERT ARRAY TO STRING
// const numbers = [1, 2, 3, 4];
// console.log(numbers.toString()); //1,2,3,4
//Converts arrays into strings

//JOIN ARRAY ELEMENTS
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.join());
// console.log(numbers.join(""));
// console.log(numbers.join(" "));
// console.log(numbers.join(", "));
/*Better than the toString method */

//SLICE ARRAY ELEMENTS
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers); //Returns array
// console.log(numbers.slice()); //Returns all items
// console.log(numbers.slice(0)); //Returns all items
// console.log(numbers.slice(0, 2)); /*Returns items
//     between 0 and 2 index but not including the last index */
// console.log(numbers.slice(0, numbers.length - 1));

//SPLICE METHOD IN ARRAY
// const numbers = [1, 2, 3, 4, 5, 6];
// console.log(numbers.splice(0, 1)); /*Cuts out
// //     the first index and up to the last index but
// //     not including it */
// const splicedNumbers = numbers.splice(3, 1, 7, 8, 9);
// console.log(splicedNumbers);
// console.log(numbers.splice(3, 1, 7, 8, 9));
/*Starts at the third index, adds a given number of 
    the following numbers, followed by numbers that 
    are to be added to the list */

//PUSH
// const numbers = [1, 2, 3, 4, 5];
// numbers.push(6);
// console.log(numbers);
/*Pushes in a new value to the array */

//POP
// const numbers = [1, 2, 3, 4, 5];
// numbers.pop();
// console.log(numbers);
/*'Pops' the final item from an array */

//UNSHIFT
// const numbers = [1, 2, 3, 4, 5];
// numbers.unshift(0);
// console.log(numbers);
/*Adds an element to the beginning of an array */

//REVERSE
// const numbers = [1, 2, 3, 4, 5];
// numbers.reverse();
// console.log(numbers);
/*Reverses the order of array */

//SORTING
// const numbers = [1, 5, 2, 4, 3];
// numbers.sort();
// console.log(numbers);
// /*Sorts the array from lowest to highest */
// numbers.reverse();
// console.log(numbers);
// const letters = ["A", "a", 3];
// letters.sort();
// console.log(letters);
/*Capital letters are sorted prior to lowercase
    letters, and then numbers */

//ARRAY OF ARRAYS
// const firstNums = [1, 2, 3];
// const secondNums = [4, 5, 6];
// const arrayOfArrays = [
//   [1, 2, 3],
//   [1, 2, 3],
// ];
// console.log(arrayOfArrays[0]);
// const frontEnd = ["CSS", "JS", "HTML", "REACT"];
// const backEnd = ["Node", "Express", "MongoDB"];
// const fullStack = [frontEnd, backEnd];
// console.log(fullStack);
// console.log(fullStack[0]);
/*Arrays can contain other arrays */
