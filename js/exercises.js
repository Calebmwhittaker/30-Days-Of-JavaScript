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

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

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
// let numbers = "1234567890";
// let rgb = [];
// while (rgb.length < 9) {
//   let randomNumber = Math.ceil(Math.random() * numbers.length - 1);
//   let randomRGB = numbers[randomNumber];
//   rgb.push(randomRGB);
// }
// let firstSlice = rgb.slice(0, 3).join("");
// let secondSlice = rgb.slice(3, 6).join("");
// let thirdSlice = rgb.slice(6, 9).join("");
// let concatenatedRGB = firstSlice + "," + secondSlice + "," + thirdSlice;
// console.log(`rgb(${concatenatedRGB})`);
//4.
// let upperCountries = [];
// for (const country of countries) {
//   let upperCountry = country.toUpperCase();
//   upperCountries.push(upperCountry);
// }
// console.log(upperCountries);
//5.
// let countriesLength = [];
// for (const country of countries) {
//   let countryLength = country.length;
//   countriesLength.push(countryLength);
// }
// console.log(countriesLength);
//6.
// let newCountries = [];
// for (const country of countries) {
//   let singleArray = [];
//   singleArray.push(country);
//   let upperCountry = country.toUpperCase();
//   let splicedCountry = upperCountry.slice(0, 3);
//   singleArray.push(splicedCountry);
//   let countriesLength = country.length;
//   singleArray.push(countriesLength);
//   newCountries.push(singleArray);
// }
// console.log(newCountries);
//7.
// let landCountries = [];
// for (const country of countries) {
//   let isLandCountry = country.includes("land");
//   if (isLandCountry) {
//     landCountries.push(country);
//   } else {
//     continue;
//   }
// }
// console.log(landCountries);
//8.
// let iaCountries = [];
// for (const country of countries) {
//   let isIACountry = country.endsWith("ia");
//   if (isIACountry) {
//     iaCountries.push(country);
//   } else {
//     continue;
//   }
// }
// console.log(iaCountries);
//9.
// let count = 0;
// let maxCountry = null;
// let longestCountry = [];
// for (const country of countries) {
//   if (country.length > count) {
//     count = country.length;
//     maxCountry = country;
//   } else {
//     continue;
//   }
// }
// longestCountry.push(maxCountry);
// console.log(longestCountry);
//10.
// let fiveCountries = [];
// for (const country of countries) {
//   if (country.length == 5) {
//     fiveCountries.push(country);
//   } else {
//     continue;
//   }
// }
// console.log(fiveCountries);
//11.
// let longestWord = [];
// let count = 0;
// let maxWord = null;
// for (const webTech of webTechs) {
//   if (webTech.length > count) {
//     count = webTech.length;
//     maxWord = webTech;
//   } else {
//     continue;
//   }
// }
// longestWord.push(maxWord);
// console.log(longestWord);
//12.
// let newTechArray = [];
// for (const webTech of webTechs) {
//   let singleTechArray = [];
//   singleTechArray.push(webTech);
//   singleTechArray.push(webTech.length);
//   newTechArray.push(singleTechArray);
// }
// console.log(newTechArray);
//13.
// let mernArray = [];
// for (const mern of mernStack) {
//   mernArray.push(mern[0]);
// }
// let joinedMernArray = mernArray.join("");
// console.log(joinedMernArray);
//14.
// let newArray = [];
// for (const webTech of webTechs) {
//   console.log(webTech);
// }
//15.
// let fruitArray = ["banana", "orange", "mango", "lemon"];
// let reversedFruitArray = [];
// for (fruit = fruitArray.length - 1; fruit >= 0; fruit--) {
//   reversedFruitArray.push(fruitArray[fruit]);
// }
// console.log(reversedFruitArray);
//16.
const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];
let joinedFullStack = fullStack[0].concat(fullStack[1]);
for (const tech of joinedFullStack) {
  let upperTech = tech.toUpperCase();
  console.log(upperTech);
}
