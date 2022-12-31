//DAY 10 EXERCISES
//Level 1
const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
import { count } from "console";
// const countries = ["Finland", "Sweden", "Norway"];
//1.
// const emptySet = new Set();
// console.log(emptySet);
//2.
// const array = [];
// for (let i = 0; i < 11; i++) {
//   array.push(i);
// }
// const set = new Set(array);
// console.log(set);
//3.
// const countriesSet = new Set(countries);
// console.log(countriesSet);
// countriesSet.delete("Finland");
// console.log(countriesSet);
//4.
// const countriesSet = new Set(countries);
// console.log(countriesSet);
// countriesSet.clear();
// console.log(countriesSet);
//5.
// const names = ["Caleb", "Ethan", "Lainey", "Jordann", "Heidi"];
// const namesSet = new Set(names);
// console.log(namesSet);
//6.
// const countriesArray = countries.map((country) => [country, country.length]);
// console.log(countriesArray);
// const countriesMap = new Map(countriesArray);
// console.log(countriesMap);
/*You can use the map method to create an array of array by setting the iterator to the country and country.length */

//Level 2
//1.
// const A = new Set(a);
// const B = new Set(b);
// const c = [...a, ...b];
// const C = new Set(c);
// console.log(C);
//2.
// const A = new Set(a);
// const B = new Set(b);
// const c = a.filter((num) => B.has(num));
// const C = new Set(c);
// console.log(C);

//Level 3
import { countries } from "../../modules/countries.js";
//1.
// const languages = countries.map((country) => country.languages);
// const languagesArray = [];
// for (const language of languages) {
//   if (language.length > 1) {
//     for (const single of language) {
//       languagesArray.push(single);
//     }
//   } else {
//     const string = language.toString();
//     languagesArray.push(string);
//   }
// }
// // console.log(languages);
// console.log(languagesArray);
// const languagesSet = new Set(languagesArray);
// console.log(languagesSet);
// console.log(languagesSet.size);
// const languagesMap = new Map(languages);
// console.log(languagesMap);

//2.
// const languages = countries.map((country) => country.languages);
// const languageArray = [];
// for (const language of languages) {
//   if (language.length > 1) {
//     for (const single of language) {
//       languageArray.push(single);
//     }
//   } else {
//     const string = language.toString();
//     languageArray.push(string);
//   }
// }
// const languageMap = new Map();
// for (const language of languageArray) {
//   if (!languageMap.has(language)) {
//     languageMap.set(language, 1);
//   } else {
//     languageMap.set(language, languageMap.get(language) + 1);
//   }
// }
// const sorted = [...languageMap].sort((a, b) => (a[1] > b[1] ? -1 : 1));
// const spliced = sorted.splice(0, 10);
// console.log(spliced);
console.log(countries);
