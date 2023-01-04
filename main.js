//DAY 18 LESSON
//Promises
/*A promise is a way to handle asynchronous operations in JS */
/*Lets async methods return sync methods instead of immediately returning the final value */
/*Async methods return a promise to suppply a value at some point in the future */
/*Three States of Promises:
    pending: Initial state, neither fulfilled nor rejected
    fulfilled: Operation was successful
    rejected: Operation failed
     */
/*When a promise is either fulfilled or rejected, the associated handler queued up by the promise's 'then' method are called */
/*Id a promise has already been fulfilled or rejected, when a handler is attached, the handler will be called so there is no race condition b/w an async operation completing and its handlers being attached */
/*The 'Promise.prototype.then()' and 'Promise.prototype.catch()' methods both return promsises that can be chained */

//Callbacks
// const doSomething = (callback) => {
//   setTimeout(() => {
//     const skills = ["HTML", "CSS", "JS"];
//     callback(
//       "It did not go well" /*This is the error*/,
//       skills /*This is the result*/
//     );
//   }, 2000);
// };

// const callback = (err, result) => {
//   if (err) {
//     return console.log(err);
//   } else {
//     return console.log(result);
//   }
// };

// doSomething(callback);

// const doSomething = (callback) => {
//   setTimeout(() => {
//     const skills = ["HTML", "CSS", "JS"];
//     callback(
//       false /*This is the error and it's false now*/,
//       skills /*This is the result and it will be displayed now that the err is false*/
//     );
//   }, 2000);
// };

// const callback = (err, result) => {
//   if (err) {
//     return console.log(err);
//   } else {
//     return console.log(result);
//   }
// };

// doSomething(callback);

//PRACTICE
// const doSomething = (callback) => {
//     setTimeout(() => {
//       const skills = [];
//       callback("Nope", skills);
//     }, 2000); /*Use a set timeout to return a promise */
//   };
//   const callback = (err, result) => {
//     /*Define the callback function with err and result as parameters */
//     if (err) {
//       return console.log(err);
//     } else {
//       return console.log(result);
//     }
//   };
//   doSomething(callback); /*Dont console log the function, just call it */
// //Promise constructor
/*We can create promises using the Promise Constructor */
/*Create a new Promise using the keyword 'new' followed by the word 'Promise' and followed by a set of parentheses */
/*Inside the parentheses, it takes a callback function with two parameters: resolve and reject */
// const promise = new Promise((resolve, reject) => {
//   resolve("Success");
//   reject("Failure");
// });
// console.log(promise);
// const doPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const skills = ['JS'];
//     if (skills.length > 0) {
//       resolve(skills);
//     } else {
//       reject("You have no skills");
//     }
//   }, 2000);
// });
// doPromise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => console.log(err));

// const doPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const skills = ["JS", "HTML", "CSS"];
//     if (skills.includes("Node")) {
//       resolve("You are a fullstack developer");
//     } else {
//       reject("You are not a fullstack developer");
//     }
//   }, 2000);
// });
// doPromise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => console.log(err));

//Fetch API
/*The fetch API provides an interface for fetching resources  */
/*Fetch can be used to request URL and other APIs */
// const url = "https://restcountries.com/v2/all";
// fetch(url)
//   .then((response) => response.json())
//   .then((data) => console.log(data));

//Async and Await
// const square = async function (n) {
//   return n * n;
// };
// console.log(square(2));

// const square = async function (n) {//Use async prior to the declaration of the function
//   return n * n;
// };

// const value = await square(2); //Use await when calling the function
// console.log(value);

// const url = "https://restcountries.com/v2/all";
// const fetchData = async () => {
//   try {
//     const response = await fetch(url);
//     const countries = await response.json();
//     console.log(countries);
//   } catch (err) {
//     console.log(err);
//   }
// };
// console.log("===== async and await");
// fetchData();
