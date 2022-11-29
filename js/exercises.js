//DAY 6 EXERCISES
//LEVEL 1 EXERCISES
//1.
// const countries = [
//   "Albania",
//   "Bolivia",
//   "Canada",
//   "Denmark",
//   "Ethiopia",
//   "Finland",
//   "Germany",
//   "Hungary",
//   "Ireland",
//   "Japan",
//   "Kenya",
// ];

const { getRandomValues } = require("crypto");
const { Z_ASCII } = require("zlib");

// const webTechs = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   "React",
//   "Redux",
//   "Node",
//   "MongoDB",
// ];

// const mernStack = ["MongoDB", "Express", "React", "Node"];
// for (let i = 0; i < countries.length; i++) {
//   console.log(countries[i]);
// }
// let i = 0;
// while (i < countries.length) {
//   console.log(countries[i]);
//   i++;
// }
// do {
//   console.log(countries[i]);
//   i++;
// } while (i <= countries.length - 1);
//2.
// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }
// let i = 10;
// while (i >= 0) {
//   console.log(i);
//   i--;
// }
// let i = 10;
// do {
//   console.log(i);
//   i--;
// } while (i >= 0);
//3.
// let n = prompt("Enter a number:");
// for (let i = 1; i <= n; i++) {
//   console.log(i);
// }
//4.
// let hashTag = "#";
// for (let i = 1; i <= 7; i++) {
//   console.log(hashTag.repeat(i));
// }
//5.
// for (let i = 0; i <= 10; i++) {
//   console.log(`${i} x ${i} = ${i * i}`);
// }
//6.
// console.log("i", "i^2", "i^3");
// for (let i = 0; i <= 10; i++) {
//   console.log(i ** 1, i ** 2, i ** 3);
// }
//7.
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   } else {
//     continue;
//   }
// }\
//8.
// for (let i = 0; i <= 100; i++) {
//   if (!(i % 2 == 0)) {
//     console.log(i);
//   } else {
//     continue;
//   }
// }
//10.
// let count = 0;
// for (let i = 0; i <= 100; i++) {
//   count = count + i;
// }
// console.log(`The sum of all numbes from 0 to 100 is ${count}`);
//11.
// let evenSum = 0;
// let oddSum = 0;
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 == 0) {
//     evenSum = evenSum + i;
//   } else {
//     continue;
//   }
// }
// for (let i = 0; i <= 100; i++) {
//   if (!(i % 2 == 0)) {
//     oddSum = oddSum + i;
//   } else {
//     continue;
//   }
// }
// console.log(`The sum of all evens from 0 to 100 is ${evenSum}.
// And the sum of all odds from 0 to 100 is ${oddSum}`);
//12.
// let evenSum = 0;
// let oddSum = 0;
// const sumsArray = [];
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 == 0) {
//     evenSum = evenSum + i;
//   } else {
//     continue;
//   }
// }
// sumsArray.push(evenSum);
// for (let i = 0; i <= 100; i++) {
//   if (!(i % 2 == 0)) {
//     oddSum = oddSum + i;
//   } else {
//     continue;
//   }
// }
// sumsArray.push(oddSum);
// console.log(sumsArray);
//13.
// const randomNumArray = [];
// for (let i = 0; i <= 4; i++) {
//   randomNumArray.push(Math.floor(Math.random() * 11));
// }
// console.log(randomNumArray);
//14.
// let numbers = [];
// while (numbers.length < 5) {
//   let randomNumber = Math.ceil(Math.random() * 5);
//   if (numbers.indexOf(randomNumber) == -1) {
//     numbers.push(randomNumber);
//   }
// }
// console.log(numbers);
//15.
// let string = "1234567890qwertyuiopasdfghjklzxcvbnm";
// let numbers = [];
// while (numbers.length < 6) {
//   let randomNumber = Math.ceil(Math.random() * string.length + 1);
//   let randomChar = string[randomNumber];
//   if (numbers.indexOf(randomChar) == -1) {
//     numbers.push(randomChar);
//   }
// }
// console.log(numbers.join(""));
//LEVEL 2
//1.
// let string = "1234567890qwertyuiopasdfghjklzxcvbnm";
// let numbers = [];
// while (numbers.length < Math.floor(Math.random() * string.length) + 5) {
//   let randomNumber = Math.ceil(Math.random() * string.length + 1);
//   let randomChar = string[randomNumber];
//   if (numbers.indexOf(randomChar) == -1) {
//     numbers.push(randomChar);
//   }
// }
// console.log(numbers.join(""));
//2.
// let string = "1234567890abcdef";
// let numbers = [];
// while (numbers.length < 6) {
//   let randomNumber = Math.ceil(Math.random() * string.length);
//   let randomChar = string[randomNumber];
//   if (numbers.indexOf(randomChar) == -1) {
//     numbers.push(randomChar);
//   }
// }
// console.log(`#${numbers.join("")}`);
//3.
let numbers = "1234567890";
let rgb = [];
while (rgb.length < 9) {
  let randomNumber = Math.ceil(Math.random() * numbers.length - 1);
  let randomRGB = numbers[randomNumber];
  rgb.push(randomRGB);
  // console.log(randomNumber);
  // console.log(randomRGB);
}
let joinedRGB = rgb.join("");
joinedRGB.split(/[\W\S]/);

console.log(`rgb(${joinedRGB})`);
