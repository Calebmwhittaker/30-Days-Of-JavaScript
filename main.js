//DAY 16 LESSON
//JSON
/*JSON stands for JavaScript Object Notation */
/*JSON syntax is string ONLY */
/*JSON is mostly used when data is sent from a server to a client */
// const user = {
//   user: [
//     {
//       firstName: "Caleb",
//       lastName: "Whittaker",
//     },
//   ],
// };
// console.log(user);
/*You MUST use double-quotes when using JSON */
/*Since JSON and Objects are so similar, they can be interchanged quite readily */

//Converting JSON to JavaScript Objects
/*We mostly fetch JSON data from HTTP responses but we can store the JSON as a string and we can change it to an Object for sake of demonstration */
/*JSON has two major methods: parse() and stringify() */
/*When we want to change the JSON to an object, we use parse() using JSON.parse() */
/*When we want to change the object to JSON, we use JSON.stringify(); */

//JSON.parse()
// JSON.parse(json, [reviver])
//json or text (The data)
//reviver is an optional callback function
/*JSON.parse(json, (key, value) => {

}) */
