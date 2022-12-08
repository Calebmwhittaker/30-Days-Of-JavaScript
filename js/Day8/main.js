//Day 8 OBJECTS
//Scope
/*Variables can be in one of two scopes: 
    global or local */
/*Anything declared without 
    var, let, or const will be scoped at the
    global level */
//Window Global Object
/*The console in the browser is scoped globally to the window object */
//Global Scope
/*Globally declared variables are accessible
    everywhere in the file */
/*Global is relative; therefore, it can pertain to
    a file or some block of codes */
//Local Scope
/*Locally scoped variables can only be 
    accessed within blocks of code that initialized
    it */
/*Locally scoped variables include:
    Block Scope and Function Scope */
/*STAY AWAY from 'var' variable and use only
    'let' and 'const' */
//Object
/*Objects are key value pairs */
/*Objects have no order */
//Creating an Empty Object
// const person = {};
// console.log(person);
//Creating an Object with Values
// const person = {
//   firstName: "Caleb",
//   lastName: "Whittaker",
//   age: 22,
//   city: "Bay City",
//   isMarried: false,
// };
// console.log(person);
/*The values of keys can be:
    strings
    numbers
    boolean
    objects
    null
    undefined
    function */
const person = {
  firstName: "Caleb",
  lastName: "Whittaker",
  age: 22,
  city: "Bay City",
  isMarried: false,
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  skills: ["JavaScript", "HTML", "CSS", "React"],
  address: {
    street: "1402 Garfield Ave",
    city: "Bay City",
    state: "MI",
  },
};
console.log(person.age);
console.log(person.firstName);
console.log(person["firstName"]);
console.log(person.getFullName());
/*Values can be referenced with either a '.' after the object
    name or by using square brackets and quotation
    marks */
//Creating Object Methods
/*Use the 'this' keyword if trying to return
    a function from an object. 'This' refers to the
    object that called it, which in this case is the 
    person object */
/*You can't use an arrow function with the 'this'
    keyword because 'this' refers to the window
    inside an arrow function instead of the person
    object */
/*The 'this' keyword is used to access values within
    person object when it is called as a function */
//Setting a New Key for an Object
/*Objects are mutable data structures; therefore,
    the values within the object can be changed after
    being created */
person.nationality = "American";
console.log(person);
/*Adds a new key value pair to the person object */
person.skills.push("TypeScript");
console.log(person);
/*You can push values into array within the object */
//Object Methods
//Object Assign
/*Allows you to copy and object without modifying the
    original object */
const copyPerson = Object.assign({}, person);
console.log(copyPerson);
//Object Keys
/*Allows you to get the keys or properties of an
    object as an array */
const keys = Object.keys(copyPerson);
console.log(keys);
const address = Object.keys(copyPerson.address);
console.log(address);
/*You can access objects within objects by using the
    '.' syntax to call the object within the other
    object */
//Object Values
/*Gets all the values of an object and returns them
    as an array */
const values = Object.values(copyPerson);
console.log(values);
//Object Entries
/*Gets the keys and values in an array without
    copying the array like the assign method and return them as an array*/
const entries = Object.entries(copyPerson);
console.log(entries);
//hasOwnProperty()
/*Checks if a specific key or property exists in
    an object */
/*Returns a boolean value */
console.log(copyPerson.hasOwnProperty("firstName"));
console.log(copyPerson.hasOwnProperty("score"));
