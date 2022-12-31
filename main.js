//DAY 11 LESSON
//Destructuring & Spreading
/*Destructurings allows you to unpack arrays and objects to assign them to a distinct variable */

//Destructuring Arrays
// const numbers = [1, 2, 3];
// let [numOne, numTwo, numThree] = numbers;
// console.log(numOne, numTwo, numThree);

// const names = ["Asabeneh", "Brook", "David", "John"];
// let [first, second, third, fourth] = names;
// console.log(first, third, fourth);

// const fullStack = [
//   ["HTML", "CSS", "JS", "React"],
//   ["Node", "Express", "MongoDB"],
// ];
// let [front, back] = fullStack;
// console.log(front);
// console.log(back);

/*To skip values in an array, use an additional comma */
// const numbers = [1, 2, 3];
// let [One, , Three] = numbers;
// console.log(One, Three);

/*You can set a default value for the destructured variables */
// const names = [undefined, "john", "caleb"];
// let [first = "james", second, third] = names;
// console.log(first, second, third);

/*Sometimes, you can't assign variables to all elements in an array;
therefore, you can get the rest of the array using the spread operator */
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let [num1, num2, num3, ...rest] = nums;
// console.log(num1, num2, num3);
// console.log(rest);

//Destructuring during Iteration
// const countries = [
//   ["Finland", "Helsinki"],
//   ["Sweden", "Stockholm"],
//   ["Norway", "Oslo"],
// ];
// for (const [country, city] of countries) {
//   console.log(country, city);
// }
/*Iterates through an array and runs the log when it sees the key-value pair */

// const fullStack = [
//   ["HTML", "CSS", "JS", "React"],
//   ["Node", "Express", "MongoDB"],
// ];

// for (const [first, second, third] of fullStack) {
//   console.log(first, second, third);
// }

//Destructuring an Object
/*When destructuring, the name of the variable must be exactly the same as the key or property of the object */
// const rectangle = {
//   width: 20,
//   height: 10,
//   area: 200,
// };
// let { width, height, area, perimeter } = rectangle;
// console.log(width, height, area, perimeter);

//Renaming during Structuring
// const rectangle = {
//   width: 20,
//   height: 10,
//   area: 200,
// };
// let { width: w, area: a, height: h, perimeter: p } = rectangle;
// console.log(w, h, p, a);
/*Order does not matter when destructuring during renaming */
/*If the key is not found in the object, the variable will be assigned to undefined */
/*You can set a default value for a specific key in the object */

// const rectangle = {
//   width: 20,
//   height: 10,
//   area: 200,
// };
// let { width: w, height: h, area: a, perimeter: p = 60 } = rectangle;
// console.log(w, h, a, p);
/*The renamed key can have a default set in the let statement */
/*If a key has a defined value, the default value will NOT be applied */

//Object Parameter without Destructuring
// const rect = {
//   width: 20,
//   height: 10,
// };
// const calculatePerimeter = (rectangle) =>
//   2 * (rectangle.width + rectangle.height);
// console.log(calculatePerimeter(rect));

// const person = {
//   firstName: "Asabeneh",
//   lastName: "Yetayeh",
//   age: 250,
//   country: "Finland",
//   job: "Instructor and Developer",
//   skills: [
//     "HTML",
//     "CSS",
//     "JavaScript",
//     "React",
//     "Redux",
//     "Node",
//     "MongoDB",
//     "Python",
//     "D3.js",
//   ],
//   sex: "male",
//   languages: ["Amharic", "English", "Suomi(Finnish)"],
// };
// const getPersonInfo = (person) => {
//   const skills = person.skills;
//   const formattedSkills = skills.slice(0, -1).join(", ");
//   const languages = person.languages;
//   const fomrattedLanguages = languages.slice(0, -1).join(", ");
//   const gender = person.sex === "male" ? "He" : "She";

//   const personInfo = `${person.firstName} ${person.lastName} lives in ${
//     person.country
//   }. ${gender} is ${
//     person.age
//   } years old. ${gender} teaches ${formattedSkills} and ${
//     skills[skills.length - 1]
//   }. ${gender} speaks ${fomrattedLanguages} and a little bit of ${
//     languages[languages.length - 1]
//   }`;
//   return personInfo;
// };

// console.log(getPersonInfo(person));

//Object Parameter with Destructuring
// const rectangle = {
//   width: 20,
//   height: 10,
//   area: 200,
// };
// // let { width, height, area } = rectangle;
// const calculatePerimeter = ({ width, height }) => {
//   return 2 * (width + height);
// };

// console.log(calculatePerimeter(rectangle));

//Destructuring Object during Iteration
// const todoList = [
//   {
//     task: "Prepare JS Test",
//     time: "4/1/2020 8:30",
//     completed: true,
//   },
//   {
//     task: "Give JS Test",
//     time: "4/1/2020 10:00",
//     completed: false,
//   },
//   {
//     task: "Assess Test Result",
//     time: "4/1/2020 1:00",
//     completed: false,
//   },
// ];

// for (const { task, time, completed } of todoList) {
//   console.log(task, time, completed);
// }

//Spread or Rest Operator
/*Use the spread operator (...) to get the rest of the elements as an array */
/*Use the spread operator to spread array elements to another array */

//Spread Operator to Get Rest of Array Elements
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let [num1, num2, num3, ...rest] = nums;
// console.log(num1, num2, num3);
// console.log(rest);

// const countries = [
//   "Germany",
//   "France",
//   "Belgium",
//   "Finland",
//   "Sweden",
//   "Norway",
//   "Denmark",
//   "Iceland",
// ];

// let [ger, fra, ...rest] = countries;
// console.log(ger, fra);
// console.log(rest);

//Spread Operator to Copy Array
// const evens = [2, 4, 6, 8, 10];
// const evenNumbers = [...evens];

// const odds = [1, 3, 5, 7, 9];
// const oddNumbers = [...odds];

// const wholeNumbers = [...evens, ...odds].sort((a, b) => (a > b ? 1 : -1));
// console.log(wholeNumbers);

// const frontEnd = ["HTML", "CSS", "JS", "React"];
// const backEnd = ["Node", "Express", "MongoDB"];
// const fullStack = [...frontEnd, ...backEnd];
// console.log(fullStack);

//Spread Operator to Copy Object
// const user = {
//   name: "Asabeneh",
//   title: "Programmer",
//   country: "Finland",
//   city: "Helsinki",
// };

// const copiedUser = { ...user };
// console.log(copiedUser);

/*You can change the object while copying */
// const user = {
//   name: "Asabeneh",
//   title: "Programmer",
//   country: "Finland",
//   city: "Helsinki",
// };

// const copiedUser = { ...user, title: "Instructor" };
// console.log(copiedUser);

//Spread Operator with Arrow Function
/*If you use a spread operator as a parameter for an arrow functionm the argument passed when the function is invoked will change to an array */

// const sumAllNums = (...args) => {
//   let sum = 0;
//   for (const num of args) {
//     sum += num;
//   }
//   return sum;
// };
// console.log(sumAllNums(1, 2, 3, 4, 5));
