//DAY 5 EXERCISES
//LEVEL 1 EXERCISES
//1.
// const emptyArray = [];
// console.log(emptyArray);
//2.
// const fiveElementsArray = [1, 2, 3, 4, 5];
// console.log(fiveElementsArray);
//3.
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.length);
//4.
// const numbers = [1, 2, 3, 4, 5];
// const firstElement = numbers.slice(0, 1);
// const secondElement = numbers.slice(2, 3);
// const lastElement = numbers.slice(numbers.length - 1, numbers.length);
// const concatenatedArray = firstElement
//   .concat(secondElement)
//   .concat(lastElement);
// console.log(concatenatedArray);
//5.
// const mixedDataTypes = [1, true, [1, 2, 3], "hi", null, undefined];
// console.log(mixedDataTypes.length);
//6.
// const itCompanies = [
//   "Facebook",
//   "Google",
//   "Microsoft",
//   "Apple",
//   "IBM",
//   "Oracle",
//   "Amazon",
// ];
// //7.
// console.log(itCompanies);
// //8.
// console.log(itCompanies.length);
// //9.
// const firstCompany = itCompanies.splice(0, 1);
// const secondCompany = itCompanies.splice(
//   (itCompanies.length - 1) / 2,
//   [(itCompanies.length - 1) / 2] - 1
// );
// const thirdCompany = itCompanies.splice(
//   itCompanies.length - 1,
//   itCompanies.length
// );
// console.log(firstCompany.concat(secondCompany).concat(thirdCompany));
// //10.
// let itCompanies = [
//   "Facebook",
//   "Google",
//   "Microsoft",
//   "Apple",
//   "IBM",
//   "Oracle",
//   "Amazon",
// ];
// itCompanies.map((item) => {
//   console.log(item);
// });
//11.
// let lowerCaseElements = itCompanies.map((item) => {
//   return item.toLowerCase();
//   /*Make sure to use 'return' statement*/
// });
// console.log(lowerCaseElements);
//12.
// let sentence = [" are big IT companies"];
// let newSentence = itCompanies.join(", ");
// let concatSentence = newSentence.concat(sentence);
// console.log(concatSentence);
//13.
let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
// let lowerCaseCompanies = itCompanies.map((item) => {
//   return item.toLowerCase();
// });
// let checkCompany = prompt("Enter a tech company:");
// if (lowerCaseCompanies.includes(checkCompany)) {
//   console.log(checkCompany);
// } else {
//   console.log("Company was not found");
// }
//14.
// let filterCompanies = itCompanies.map((item) => {
//   if (!item.includes("oo")) {
//     console.log(item);
//   }
// });
//Check with a conditional statement
//15.
// console.log(itCompanies.sort());
//16.
// console.log(itCompanies.reverse());
//17.
// console.log(itCompanies.slice(0, 3));
//18
// console.log(itCompanies.slice(4, 7));
//19.
// console.log(itCompanies.slice(3, 4));
//20.
// console.log(itCompanies.shift());
//21.
// let firstCompanies = itCompanies.slice(0, 3);
// let lastCompanies = itCompanies.slice(4, 7);
// console.log(firstCompanies.concat(lastCompanies));
//22.
// itCompanies.pop();
// console.log(itCompanies);
//23.
// let firstElement = itCompanies.slice(0, 1);
// firstElement.pop();
// console.log(firstElement);

//LEVEL 2
//2.
// let text =
//   "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
// let noPunct = text.replace(/[\.,]/g, "");
// let arrayText = noPunct.split(" ");
// console.log(arrayText);
// console.log(arrayText.length);
//3.
// let shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
// const removeHoney = shoppingCart.pop();
// const addMeat = shoppingCart.unshift("Meat");
// const addSugar = shoppingCart.push("Sugar");
// shoppingCart[3] = "Green Tea";
// console.log(shoppingCart);
//4.
const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombi",
  "Comoros",
  "Congo (Brazzaville)",
  "Congo",
  "Costa Rica",
  "Cote d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor (Timor Timur)",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia, The",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, North",
  "Korea, South",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia and Montenegro",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];
// let lowerCountries = countries.map((item) => {
//   return item.toLowerCase();
// });
// let checkCountry = prompt("Enter a country name:");
// let lowerCheckCountry = checkCountry.toLowerCase();
// if (lowerCountries.includes(lowerCheckCountry)) {
//   let upperCheckCountry = lowerCheckCountry.toUpperCase();
//   console.log(upperCheckCountry);
// } else {
//   countries.push(checkCountry);
//   console.log("Country was added");
// }
//6.
// const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
// const backEnd = ["Node", "Express", "MongoDB"];
// let fullStack = frontEnd.concat(backEnd);
// console.log(fullStack);
// LEVEL 3
//1.
// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// let sortedAges = ages.sort();
// console.log(sortedAges);
// console.log(ages[0]);
// console.log(ages[ages.length - 1]);
// console.log(ages[ages.length / 2]);
// let total = 0;
// let count = 0;
// for (i = 0; i < ages.length; i++) {
//   total = total + ages[i];
//   ++count;
// }
// let average = total / count;
// console.log(total);
// console.log(average);
// console.log(ages[ages.length - 1] - ages[0]);
// console.log(Math.abs(ages[0] - average));
// console.log(Math.abs(ages[ages.length - 1] - average));
// // console.log(countries.splice(0, 10));
// // console.log(countries.length);
// // let middleCountryIndex = (countries.length - 1) / 2;
// // console.log(countries[middleCountryIndex]);
// // console.log(countries[96]);
// console.log(countries.slice(0, 96));
// console.log(countries.slice(97, countries.length));
// console.log(countries[192]);
