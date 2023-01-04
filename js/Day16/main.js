// //DAY 16 LESSON
// //JSON
// /*JSON stands for JavaScript Object Notation */
// /*JSON syntax is string ONLY */
// /*JSON is mostly used when data is sent from a server to a client */
// // const user = {
// //   user: [
// //     {
// //       firstName: "Caleb",
// //       lastName: "Whittaker",
// //     },
// //   ],
// // };
// // console.log(user);
// /*You MUST use double-quotes when using JSON */
// /*Since JSON and Objects are so similar, they can be interchanged quite readily */

// //Converting JSON to JavaScript Objects
// /*We mostly fetch JSON data from HTTP responses but we can store the JSON as a string and we can change it to an Object for sake of demonstration */
// /*JSON has two major methods: parse() and stringify() */
// /*When we want to change the JSON to an object, we use parse() using JSON.parse() */
// /*When we want to change the object to JSON, we use JSON.stringify(); */

// //JSON.parse()
// // JSON.parse(json, [reviver])
// //json or text (The data)
// //reviver is an optional callback function
// /*JSON.parse(json, (key, value) => {

// }) */
// // const usersText = `{
// //   "users":[
// //     {
// //       "firstName":"Caleb",
// //       "lastName":"Whittaker",
// //       "age": 22
// //     }
// //   ]
// // }`;
// // const usersObj = JSON.parse(usersText, undefined, 4);
// // console.log(usersObj);
// //Really have to be careful with the JSON syntax

// //Using a reviver function with JSON.parse()
// /*To use the reviver function as a formatter, we put the keys we want to format */
// // const usersText = `{
// //     "users":[
// //       {
// //         "firstName":"Asabeneh",
// //         "lastName":"Yetayeh",
// //         "age":250,
// //         "email":"asab@asb.com"
// //       },
// //       {
// //         "firstName":"Alex",
// //         "lastName":"James",
// //         "age":25,
// //         "email":"alex@alex.com"
// //       },
// //       {
// //       "firstName":"Lidiya",
// //       "lastName":"Tekle",
// //       "age":28,
// //       "email":"lidiya@lidiya.com"
// //       }
// //     ]
// //     }`;

// // const usersObj = JSON.parse(usersText, (key, value) => {
// //   let newValue =
// //     typeof value == "string" && key != "email" ? value.toUpperCase() : value;
// //   return newValue;
// // });
// // console.log(usersObj);

// //Converting Object to JSON
// /*When we want to convert an object to JSON we use JSON.stringify() */
// /*stringify() takes one required parameter and two optional parameters */
// // JSON.stringify(obj, replacer, space);
// //json or text, the data
// //reviver is an optional callback function
// /*The replacer is used as a filter; if you don't want to filter out any keys, use 'undefined' */
// /*The space is an indentation */
// // const users = {
// //   Alex: {
// //     email: "alex@alex.com",
// //     skills: ["HTML", "CSS", "JavaScript"],
// //     age: 20,
// //     isLoggedIn: false,
// //     points: 30,
// //   },
// //   Asab: {
// //     email: "asab@asab.com",
// //     skills: [
// //       "HTML",
// //       "CSS",
// //       "JavaScript",
// //       "Redux",
// //       "MongoDB",
// //       "Express",
// //       "React",
// //       "Node",
// //     ],
// //     age: 25,
// //     isLoggedIn: false,
// //     points: 50,
// //   },
// //   Brook: {
// //     email: "daniel@daniel.com",
// //     skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
// //     age: 30,
// //     isLoggedIn: true,
// //     points: 50,
// //   },
// //   Daniel: {
// //     email: "daniel@alex.com",
// //     skills: ["HTML", "CSS", "JavaScript", "Python"],
// //     age: 20,
// //     isLoggedIn: false,
// //     points: 40,
// //   },
// //   John: {
// //     email: "john@john.com",
// //     skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
// //     age: 20,
// //     isLoggedIn: true,
// //     points: 50,
// //   },
// //   Thomas: {
// //     email: "thomas@thomas.com",
// //     skills: ["HTML", "CSS", "JavaScript", "React"],
// //     age: 20,
// //     isLoggedIn: false,
// //     points: 40,
// //   },
// //   Paul: {
// //     email: "paul@paul.com",
// //     skills: [
// //       "HTML",
// //       "CSS",
// //       "JavaScript",
// //       "MongoDB",
// //       "Express",
// //       "React",
// //       "Node",
// //     ],
// //     age: 20,
// //     isLoggedIn: false,
// //     points: 40,
// //   },
// // };
// // const txt = JSON.stringify(users, undefined, 3);
// // console.log(txt);

// //Using a filter array with JSON.stringify
// const user = {
//   firstName: "Asabeneh",
//   lastName: "Yetayeh",
//   country: "Finland",
//   city: "Helsinki",
//   email: "alex@alex.com",
//   skills: ["HTML", "CSS", "JavaScript", "React", "Python"],
//   age: 250,
//   isLoggedIn: false,
//   points: 30,
// };

// const txt = JSON.stringify(
//   user,
//   ["firstName", "lastName", "country", "city", "age"],
//   4
// );
// console.log(txt);
