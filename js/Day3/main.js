// let trueValue = 4 > 3;
// console.log(trueValue);
// let falseValue = 3 > 4;
// console.log(falseValue);
// console.log(Boolean(1)); //Truthy statement
// console.log(Boolean(0)); //Falsey Statement
// console.log(Boolean("")); //Falsey Statement
// console.log(Boolean("Hi")); //Truthy Statement
// console.log(Boolean(true)); //Truthy Value
// console.log(Boolean(0n)); //Falsey Statement
// console.log(Boolean(undefined)); //Falsey Statement
// console.log(Boolean(null)); //Falsey Statement

// let firstName;
// console.log(Boolean(firstName));
// /*Returns an undefined datatype since the variable
//       was never initialized; therefore, a Boolean of
//       undefined would return false to make a falsey
//       statement*/
// /*Undefined will be returned whenever a variable
//       is not initialized or a function does not
//       return a value*/

// console.log(NaN == NaN); //Returns a falsey statement
// console.log(typeof NaN); //Returns a number data type

// console.log("mango".length < "avocado".length);
//Returns a truthy statement

//LOGICAL OPERATORS
// const check = 4 > 3 && 10 > 5;
// console.log(check);
/*Checks if both statements are true
    if they are not both true then 'false' will
    be logged to the console*/
// const check = 4 > 3 || 5 > 10;
// console.log(check);
/*Returns a true statement if at least one of the statements are true
    Will NOT evaluate the second condition if the first one is true */

//INCREMENT OPERATOR
//Pre-increment
// let count = 0;
// console.log(++count); //1
// console.log(count); //1; returns the new count variable

//Post-increment
// console.log(count++);
// console.log(count);

//Works for decrement operators as well

//TERNARY OPERATORS
// let isRaining = Math.floor(Math.random() * 2);
// /*Randomly generates a 0 or 1 to give true or false
//     values for the variable
//     Will be used in the ternary operator */
// isRaining
//   ? console.log("You need a rain coat")
//   : console.log("No need for a raincoat");

// let number = 5;
// number > 0
//   ? console.log(`${number} is a positive number`)
//   : console.log(`${number} is a negative number`);

//WINDOW METHODS
//WINDOW ALERTS
// alert("Hello");
/*You should only use alert for testing and never
    for production*/

//WINDOW PROMPTS
// let number = prompt("Please enter a number", "The number goes here");
// console.log(number);
/*The first argument in the prompt function is 
    required while the second argument acts as a 
    placeholder and is only optional */

//WINDOW CONFIRM METHOD
// const agree = confirm("Are you sure that you would like to delete?");
// console.log(agree);
/*Will return a value of true if you click 'OK'
    and will return false if you click cancel */

//DATE OBJECT
// const now = new Date();
// console.log(now);

// const now = new Date();
// console.log(now);
// console.log(now.getFullYear()); //Returns year
// console.log(now.getMonth());
/*Returns a month with a format of (0-11) rather than
    (1-12) therefore, to get the format most 
    people are used to you need to add 1 to the value*/
// console.log(now.getDate()); //Returns day in month
// console.log(now.getDay()); //Returns day in week
// console.log(now.getHours()); //Returns hour
// console.log(now.getTime()); /*Returns time from
//     Jan 1st, 1970 to present day in miliseconds */
// console.log(now.getSeconds()); //Returns seconds//

// const allMiliSeconds = Date.now();
// console.log(allMiliSeconds);

// const timeInMiliSeconds = new Date().getTime();
// //Creates a new instance of an empty Date Object
// console.log(timeInMiliSeconds);
// console.log(allMiliSeconds == timeInMiliSeconds);
/*Returns false because runtime between the two
    functions for miliseconds is about 9 miliseconds
    Therefore, they are not equal to eachother
    hence the false Boolean value*/

// const now = new Date();
// const year = now.getFullYear();
// const month = now.getMonth() + 1;
// const date = now.getDate();
// const hours = now.getHours();
// const minutes = now.getMinutes();

// console.log(`${date}/${month}/${year} ${hours}:${minutes}`);
