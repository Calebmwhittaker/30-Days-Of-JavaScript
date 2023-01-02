//DAY 13 LESSON
//Console Object Methods
/*Use document.write() to show output on the browser document
    Used for testing and debugging */
/*Use document.getElementById() when you want to interact with the DOM  */

//console.log()
/*Use console.log() to show output on the browser console */

//console.warn()
/*Use console.warn() to give warning in the browser
    Can be used to warn a user of a deprecated version of a package or bad practices*/

//console.error();
/*Use console.error() to show error messages */

//console.table()
/*Use console.table() to display data as a table in the console */
/*The argument must be an array or and object with and additional opitional parameter columns */
// const names = ["Asabeneh", "Brook", "David", "John"];
// console.table(names);
// const user = {
//   name: "Asabeneh",
//   title: "Programmer",
//   country: "Finland",
//   city: "Helsinki",
//   age: 250,
// };
// console.table(user);
// const countries = [
//   ["Finland", "Helsinki"],
//   ["Sweden", "Stockholm"],
//   ["Norway", "Oslo"],
// ];
// console.table(countries);
// const users = [
//   {
//     name: "Asabeneh",
//     title: "Programmer",
//     country: "Finland",
//     city: "Helsinki",
//     age: 250,
//   },
//   {
//     name: "Eyob",
//     title: "Teacher",
//     country: "Sweden",
//     city: "London",
//     age: 25,
//   },
//   {
//     name: "Asab",
//     title: "Instructor",
//     country: "Norway",
//     city: "Oslo",
//     age: 22,
//   },
//   {
//     name: "Matias",
//     title: "Developer",
//     country: "Denmark",
//     city: "Copenhagen",
//     age: 28,
//   },
// ];
// console.table(users);

//console.time()
/*Starts a timer that can be used to track how long an operation takes to complete */
/*Each timer must have a unique name */
/*You can have up to 10,000 timers running at the same time*/
/*When you call console.timeEnd, the browser will output the time in milliseconds that elapsed since the timer was started */

// const countries = [
//   ["Finland", "Helsinki"],
//   ["Sweden", "Stockholm"],
//   ["Norway", "Oslo"],
// ];

// console.time("Regular for loop");
// for (let i = 0; i < countries.length; i++) {
//   console.log(countries[i][0], countries[i][1]);
// }
// console.timeEnd("Regular for loop");

// console.time("for Of Loop");
// for (const [country, city] of countries) {
//   console.log(country, city);
// }
// console.timeEnd("for Of Loop");
// /*For of loops are faster than traditional for loops when the data set is small*/
// console.time("forEach loop");
// const countriesArray = countries.forEach(([country, city]) =>
//   console.log(country, city)
// );
// console.timeEnd("forEach loop");
/*For of loops are marginally faster than forEach loops as well */

//console.info()
/*console.info() displays information in the browser's console */
// console.info("Hello");

//console.assert();
/*console.assert() writes an error message to the console if the assertion is false */
/*If the assertion is true, nothing happens */
/*Takes two parameters: The assertion expression and the failed message to be displayed */
// console.assert(4 > 3, "4 is greater than 3"); //Nothing happens since the expression is true
// console.assert(3 > 4, "3 is NOT greater than 4"); //Prints an error message into the console

// for (let i = 0; i < 10; i++) {
//   let errorMessage = `${i} is NOT even`;
//   console.log(i);
//   console.assert(i % 2 === 0, { number: i, errorMessage: errorMessage });
// }

//console.group()
/*The console.group() can help to group different log groups */
// const names = ["Asabeneh", "Brook", "David", "John"];
// const countries = [
//   ["Finland", "Helsinki"],
//   ["Sweden", "Stockholm"],
//   ["Norway", "Oslo"],
// ];
// const user = {
//   name: "Asabeneh",
//   title: "Programmer",
//   country: "Finland",
//   city: "Helsinki",
//   age: 250,
// };
// const users = [
//   {
//     name: "Asabeneh",
//     title: "Programmer",
//     country: "Finland",
//     city: "Helsinki",
//     age: 250,
//   },
//   {
//     name: "Eyob",
//     title: "Teacher",
//     country: "Sweden",
//     city: "London",
//     age: 25,
//   },
//   {
//     name: "Asab",
//     title: "Instructor",
//     country: "Norway",
//     city: "Oslo",
//     age: 22,
//   },
//   {
//     name: "Matias",
//     title: "Developer",
//     country: "Denmark",
//     city: "Copenhagen",
//     age: 28,
//   },
// ];
// console.group("Names");
// console.log(names);
// console.groupEnd();

// console.group("Countries");
// console.log(countries);
// console.groupEnd();

// console.group("Users");
// console.log(user);
// console.log(users);
// console.groupEnd();

//console.count()
/*console.count prints the number of times it is called */
/*It takes a string as a label parameter */
/*Helpful to count the number of times a function is called */
const func = () => {
  console.count("Function has been called");
};
func();
func();
func();
