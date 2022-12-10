//DAY 9 HIGHER ORDER FUNCTIONS
//Higher Order Functions
/*Higher Order Functions are functions that take another
    function as a parameter or return a function as a value
         */
/*The function that is passed as a parameter in a 
    higher order function is called a callback */
//Callback
/*A callback is a function that can be passed as a parameter
    another function */
// const callback = (n) => {
//   return n * 2;
// };

// const cube = (callback, n) => {
//   return callback(n) * n;
// };
// console.log(callback(3));
// console.log(cube(callback, 3));

// const squareNum = (n) => {
//   return n * n;
// };

// const cubeNum = (squareNum, n) => {
//   return squareNum(n) * n;
// };
// console.log(cubeNum(squareNum, 2));
//Return A Function
/*Higher order functions return functions as a value */
// const higherOrder = (n) => {
//   console.log(n);
//   const doSomething = (m) => {
//     console.log(m);
//     const doWhatever = (t) => {
//       console.log(t);
//       return 2 * n + 3 * m + t;
//     };
//     return doWhatever;
//   };
//   return doSomething;
// };
// console.log(higherOrder(3)(2)(5));
/*Could be used to write math equations */
// const numbers = [1, 2, 3, 4, 5];
// const sumArray = (arr) => {
//   let sum = 0;
//   const callback = function (element) {
//     sum += element;
//   };
//   arr.forEach(callback);
//   return sum;
// };
// console.log(sumArray(numbers));

// const numbers = [1, 2, 3, 4, 5];
// const sumArray = (arr) => {
//   let sum = 0;
//   arr.forEach((number) => {
//     sum += number;
//   });
//   return sum;
// };
// console.log(sumArray(numbers));
//Setting Time
/*There are two ways to set times in JavaScript:
    setInterval
    setTimeout */
//setInterval
// const sayHello = () => {
//   console.log("Hello");
// };
// setInterval(sayHello, 2000);
/*Runs the 'sayHello' function every two seconds */
//setTimeout
/*The setTimeout higher order function takes a callback
    and a durations as parameters
    Duration is in miliseconds */
// const sayHello = () => {
//   console.log("hi");
// };
// setTimeout(sayHello, 2000);
/*Runs the 'sayHello' function after waiting two seconds */
//Functional Programming
//forEach method
/*Allows you to iterate through an array of element */
/*Takes a callback function with elements, an index
    parameter and the array itself. The index and the
    array are optional */
// const numbers = [1, 2, 3, 4, 5];
// const sumArray = (arr) => {
//   let sum = 0;
//   arr.forEach((element, index, arr) => {
//     sum += element;
//     // console.log(index);
//     // console.log(arr);
//   });
//   return sum;
// };
// console.log(sumArray(numbers));
/*The forEach loop can return the current index of the
    loop as well as the array itself */
// let sum = 0;
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((number) => {
//   sum += number;
// });
// console.log(sum);
// const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"];
// countries.forEach((country) => {
//   console.log(country.toUpperCase());
// });
//MAP
/*The map method allows you to iterate through an array
    of element and modify the array elements */
/*The map method takes a callback function, with index, 
    and an array parameter */
// const numbers = [1, 2, 3, 4, 5];
// const numbersPlusOne = numbers.map((num) => {
//   return num + 1;
// });
/*Since the map method takes a callback function, you need
    to include a return statement to actually display a 
    values in the console */
// console.log(numbersPlusOne);
// const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
// const upperCaseNames = names.map((name) => name.toUpperCase());
// console.log(upperCaseNames);
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
// const upperCaseCountries = countries.map((country) => country.toUpperCase());
// console.log(upperCaseCountries);
// const firstThreeCountryLetters = countries.map((country) =>
//   country.slice(0, 3)
// );
// console.log(firstThreeCountryLetters);
// const countriesContainingLand = countries.filter((country) =>
//   country.includes("land")
// );
// console.log(countriesContainingLand);
// const countriesEndingByia = countries.filter((country) =>
//   country.endsWith("ia")
// );
// console.log(countriesEndingByia);
// const countriesHaveFiveLetters = countries.filter(
//   (country) => country.length === 5
// );
// console.log(countriesHaveFiveLetters);
const scores = [
  { name: "Asabeneh", score: 95 },
  { name: "Lidiya", score: 98 },
  { name: "Mathias", score: 80 },
  { name: "Elias", score: 50 },
  { name: "Martha", score: 85 },
  { name: "John", score: 100 },
];

// const scoresGreaterThan80 = scores.filter((score) => score.score <= 80);
// console.log(scoresGreaterThan80);
//Reduce
/*The reduce method takes a callback function which
    takes an accumulator, current and initial value as a
    parameter and returns a single value */
/*It is good practice to define an initial value for the
    accumulator value. The default accumulator is the first
    value of the array */
/*If the array is empty, JavaScript will throw an error */
// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((acc, cur) => acc + cur, 0);
// console.log(sum);

//every method
/*The 'every' method checks if all elements within an array
    are the same */
// const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
// const areAllStr = names.every((name) => typeof name === "number");
// console.log(areAllStr);

//Find Method
/*The 'find' methof returns the first element which satisfies the condition */
const ages = [24, 22, 25, 32, 35, 18, "twenty-one"];
// const youngerThan21 = ages.find((age) => age < 21);
// console.log(youngerThan21);

//findIndex Method
/*Returns the position of the first element which satisfies
    the condition */
// const result = ages.findIndex((age) => age > 21);
// console.log(result);

//some Method
/*Checks if some of the elements are similar in one aspect */
// const areSomeStr = ages.some((age) => typeof age === "string");
// console.log(areSomeStr);

//sort Method
/*The sort method arranges the array elements in either
    ascending or descending order */
/*The sort method by default will sort values as strings */
/*This method works great for strings but NOT numbers;
therefore, you should copy the array before sorting */
const numbers = [9.81, 3.14, 100, 37];
const copyNumbers = numbers.map((number) => number);
console.log(copyNumbers.sort()); //Returns the wrong value
numbers.sort((a, b) => a - b);
console.log(numbers);
/*The sort method works well with strings but not numbers
    When the sort method is called and takes numbers as a
    parameter, it sorts by the first number rather than
    the whole number. For example, 100 will come before 25
    because the '1' in 100 is smaller than the '2' in 25 */
/*We can fix this weird sort behavior by using a compare
    function seen on line 216 */
/*The compare function works by comparing the first element
    in an array with the second element. If the difference
    between the two elements is negative, the first element
    is sorted before the second. If the difference is
    positive, the second element will be sorted before the 
    first. If the result is zero, the order will remain
    the same */

//Sorting Object Arrays
/*When sorting objects in an array, we have to use the
    object key to compare */
const users = [
  { name: "Asabeneh", age: 150 },
  { name: "Brook", age: 50 },
  { name: "Eyob", age: 100 },
  { name: "Elias", age: 22 },
];
users.sort((a, b) => {
  if (a.age < b.age) return -1;
  if (a.age > b.age) return 1;
  return 0;
});
console.log(users);
/*This will sort the object array in an ascending order.
    To sort in a descending order, just change the value
    of the return */
