//Day 10 SETS & MAPS
//Set
/*A set is a collection of element */
/*Sets can ONLY contain unique elements */
//Creating an Empty Set
// const companies = new Set();
// console.log(companies);
// //Creating Set from Array
// const languages = [
//   "English",
//   "Finnish",
//   "English",
//   "French",
//   "Spanish",
//   "English",
//   "French",
// ];
// const setOfLanguages = new Set(languages);
// console.log(setOfLanguages);
// /*Returns no repeats from the array */
// for (const language of setOfLanguages) {
//   console.log(language);
// }
/*Sets are iterable objects */
//Adding an Element to a Set
// const companies = new Set(); //Creating an empty set
// console.log(companies.size);

// companies.add("Google");
// companies.add("Amazon");
// companies.add("Facebook");
// console.log(companies.size);
// console.log(companies);

// const companies = ["Google", "Facebook", "Amazon", "Oracle", "Microsoft"];
// let setOfCompanies = new Set();
// for (const company of companies) {
//   setOfCompanies.add(company);
// }
// console.log(setOfCompanies);

//Deleting an Element from a Set
// console.log(setOfCompanies.delete("Google")); //true
// console.log(setOfCompanies.size); //4

//Checking an Element in the Set
/*Checks to see if a certain element exists in the set */
// console.log(setOfCompanies.has("Apple"));

//Clearing the Set
/*Removes all the elements from the set */
// setOfCompanies.clear();
// console.log(setOfCompanies); //Set(0) {}

const languages = [
  "English",
  "Finnish",
  "English",
  "French",
  "Spanish",
  "English",
  "French",
];
// const langSet = new Set(languages);
// console.log(langSet);
// // console.log(langSet.size);

// const counts = [];
// const count = {};
// for (const l of langSet) {
//   const filteredLang = languages.filter((lng) => lng === l);
//   console.log(filteredLang);
//   counts.push({ lang: l, count: filteredLang.length });
// }
// console.log(counts);

// const numbers = [5, 3, 2, 5, 5, 9, 4, 5];
// const setOfNumbers = new Set(numbers);
// console.log(setOfNumbers);

//Union of Sets
/*To find a union of two sets you can use a spread operator */
// let a = [1, 2, 3, 4, 5];
// let b = [3, 4, 5, 6];
// let c = [...a, ...b];

// let A = new Set(a);
// let B = new Set(b);
// let C = new Set(c);

// console.log(C);

//Difference of Sets
/*You can find the difference between sets by using filter */
// let a = [1, 2, 3, 4, 5];
// let b = [3, 4, 5, 6];

// let A = new Set(a)
// let B = new Set(b);

// let c = a.filter((num) => !B.has(num));
// let C = new Set(c);
// console.log(C);
//The filter method ONLY works on arrays, NOT sets; therefore, you need to use the array and not the set to filter out the values from the array

//MAP
//Creating an empty map
// const map = new Map();
// console.log(map);

//Creating a map from an array
// countries = [
//   ["Finland", "Helsinki"],
//   ["Sweden", "Stockholm"],
//   ["Norway", "Oslo"],
// ];

// const map = new Map(countries);
// console.log(map);
// console.log(map.size);

//Adding values to the Map
// const countriesMap = new Map();
// console.log(countriesMap.size);
// countriesMap.set("Finland", "Helsinki");
// console.log(countriesMap);

//Maps are objects; therefore, they have key-value pairs
// const countriesMap = new Map();
// countriesMap.set("Finland", "Helsinki");
// console.log(countriesMap.get("Finland"));
//Gets keys and returns their values
//CANNOT get values and return keys

//Checking Key in Map
/*You can check if a key exists in a map using the 'has' method */
/*Returns a boolean value */
// const countriesMap = new Map();
// countriesMap.set("Finland", "Helsinki");
// console.log(countriesMap.has("Finland"));

// for (const country of countriesMap) {
//   console.log(country);
// }
/*Returns the result as an array */

// for (const [country, city] of countriesMap) {
//   console.log(country, city);
// }
/*Returns the result as a string */
