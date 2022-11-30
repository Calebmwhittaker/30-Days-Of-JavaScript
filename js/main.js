//DAY 7
//Function Declaration
//Function w/o Parameters
// function square() {
//   let num = 2;
//   let sq = num * num;
//   console.log(sq);
// }
// square();
/*Returns the squared number, which in this case
    is the number 4 */
// function addTwoNumbers() {
//   let numOne = 10;
//   let numTwo = 20;
//   let sum = numOne + numTwo;
//   console.log(sum);
// }
// addTwoNumbers();
/*Returns the sum of two numbers */
// function printFullName() {
//   let firstName = "Caleb";
//   let lastName = "Whittaker";
//   let space = " ";
//   let fullName = firstName + space + lastName;
//   console.log(fullName);
// }
// printFullName();
/*Returns the concatenated firstName and lastName
    of an indivdual */

//Function Returning Values
// function printFullName() {
//   let firstName = "Caleb";
//   let lastName = "Whittaker";
//   let space = " ";
//   let fullName = firstName + space + lastName;
//   return fullName;
//   /*The return statement is not the same as the
//     console log statement. You still need to call
//     the function within a log statement to print
//     anything to the console */
// }
// console.log(printFullName());

//Function w/ a Parameter
// function areaOfCircle(r) {
//   let area = Math.PI * r * r;
//   return area;
// }
// console.log(areaOfCircle(10));
// function square(n) {
//   return n * n;
// }
// console.log(square(25));

//Function w/ Two Parameters
// function sumTwoNumbers(n1, n2) {
//   return n1 + n2;
// }
// console.log(sumTwoNumbers(1, 4));
// function printFullName(firstName, lastName) {
//   return `${firstName} ${lastName}`;
// }
// console.log(printFullName("Caleb", "Whittaker"));
//Parameters need to be a string in this case

//Function with Many Parameters
// function sumArrayValues(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }
// const numbers = [1, 2, 3, 4, 5];
// console.log(sumArrayValues(numbers));

// const areaOfCircle = (r) => {
//   let area = Math.PI * r * r;
//   return area;
// };
// console.log(areaOfCircle(10));
/*This example uses an arrow function to declare its
    parameter */

//Function with Unlimited Number of Parameters
// function sumAllNums() {
//   console.log(arguments);
//   /*The arguments variable is required here */
// }
// sumAllNums(1, 2, 3);
//[Arguments] {'0': 1, '1': 2, '2' : 3}

// function sumAllNums() {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   return sum;
// }
// console.log(sumAllNums(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//UNLIMITED NUMBER OF PARAMETERS IN ARROW FUNCTION
// const sumAllNums = (...args) => {
//   let sum = 0;
//   for (const element of args) {
//     sum += element;
//   }
//   return sum;
// };
// console.log(sumAllNums(1, 2, 3, 4));
/*The spread operator (...) in the ...args makes it an array that can be iterated through */

//ANONYMOUS FUNCTION
// const anonymousFunc = function () {
//   console.log("I am an anonymous function");
// };
// console.log(anonymousFunc());

//EXPRESSION FUNCTION
// const square = function (n) {
//   return n * n;
// };
// console.log(square(2));

//SELF-INVOKING FUNCTIONS
// (function (n) {
//   console.log(n * n);
// })(70);

// let squaredNums = (function (n) {
//   return n * n;
// })(2);
// console.log(squaredNums);

//ARROW FUNCTION
// const square = (n) => {
//   return n * n;
// };
// console.log(square(2));
// const square = (n) => n * n; //Single-lined functions do not require a return keyword
// console.log(square(5));

// const changeToUpperCase = (arr) => {
//   const newArr = [];
//   for (const element of arr) {
//     newArr.push(element.toUpperCase());
//   }
//   return newArr; //DONT FORGET THE RETURN STATEMENT
// };
// const countries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
// console.log(changeToUpperCase(countries));

// const printFullName = (firstName, lastName) => `${firstName} ${lastName}`;

// console.log(printFullName("Caleb", "Whittaker")); //Returns undefined if you omit an argument from that parameter

//FUNCTION WITH DEFAULT PARAMETERS
// function greetings(name = "Peter") {
//   //You can give a default parameter to your function to prevent undefined from being returned in the console
//   let message = `Welcome ${name}!`;
//   return message;
// }
// console.log(greetings());
// console.log(greetings("Caleb"));
