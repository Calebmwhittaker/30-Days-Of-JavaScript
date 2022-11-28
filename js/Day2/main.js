// let nums = [1, 2, 3];
// let number = [1, 2, 4];
// let numbers = nums;
// console.log(nums == numbers);

// const PI = Math.PI;

// console.log(PI);
// console.log(Math.round(PI));
// console.log(Math.round(9.81));
// console.log(Math.floor(PI));
// console.log(Math.ceil(PI));
// console.log(Math.min(-10, -5, 3, -3, 20, 4, 5, 10));
// console.log(Math.max(-10, -5, 3, -3, 20, 4, 5, 10));

// const randNum = Math.random();
// console.log(`${randNum * 100}%`);
// const num = Math.floor(Math.random() * 11);
// console.log(num);

// console.log(Math.abs(-10));

// console.log(Math.sqrt(25));

// console.log(Math.pow(3, 2));

// console.log(Math.E);

// console.log(Math.log(2));

// console.log(Math.LN2);

// console.log(Math.LN10);

// console.log(Math.sin(0));

// let randNum = Math.random();
// let numBtwZeroTen = randNum * 10;
// console.log(numBtwZeroTen);
// let randNumRounded = Math.ceil(numBtwZeroTen);
// console.log(randNumRounded);
// // console.log(Math.random() * 100);

// let firstName = "Caleb";
// let lastName = "Whittaker";
// let fullName = firstName + " " + lastName;
// console.log(fullName);

// let a = 2;
// let b = 3;
// console.log(`The sum of ${a} and ${b} is ${a + b}`);

// console.log(`${a} is greater than ${b}: ${a > b}`);
// console.log(firstName.length);

// let js = "JavaScript";
// // let firstLetter = js[0];
// // console.log(firstLetter);

// // let lastLetter = js[9];
// // console.log(lastLetter);
// // let totalLengthOf = js.length;
// // console.log(totalLengthOf);
// // let lastIndex = js.length - 1;
// // console.log(lastIndex);
// // console.log(js[lastIndex]);
// // console.log(js.toUpperCase());
// // console.log(js.toLowerCase());
// // console.log(js.substring(0, 4));

// let string = "30 Days of JavaScript";
// // console.log(string.split());
// // // console.log(string.split(" "));
// // console.log(string.trim(" "));

// console.log(string.includes("1")); //Returns a boolean value

// console.log(string.replace("JavaScript", "Python")); //Replaces first parameter with second parameter

// console.log(string.charAt(1)); //Indicates what character is present at a given index

// console.log(string.indexOf("Days")); //Returns the index where the parameter is located
// console.log(string.indexOf("days")); //Will return a -1 if not present in the string
// //indexOf is case-sensitive
// newString = "30";
// console.log(newString.concat("Days", "Of", "Python")); //Concatenates the variable with the parameters within the method

// let newString =
//   "I love JavaScript. If you do not love JavaScript what else can you love.";
// console.log(newString.toLowerCase().startsWith("I")); //Returns a boolean value whether the string starts with a given string
// console.log(newString.endsWith(".")); //Returns a boolean value whether the string ends with a given string
// //Must be the exact string with correct cases

// console.log(newString.search("love"));
// console.log(newString.match(/love/gi));

// let txt =
//   "In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge";
// let regEx = /\d+/g; //Looks for all digits globally within the string
// console.log(txt.match(regEx));

// let love = "love";
// console.log(love.repeat(10)); //Repeats the string a given number of times based on the parameter

//CHANGING DATA TYPE

let num = "10";
// console.log(num - 1);
// let numInt = parseInt(num);
// console.log(numInt);

// let numInt = Number(num);
// console.log(numInt);

// let numInt = +num;
// console.log(numint);

let numFloat = parseFloat(num);
console.log(typeof numFloat);
