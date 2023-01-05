//DAY 18 EXERCISES
//LEVEL 1
//1.
const countriesAPI = "https://restcountries.com/v2/all";
const catsAPI = "https://api.thecatapi.com/v1/breeds";
// const fetchData = async () => {
//   try {
//     const response = await fetch(countriesAPI);
//     const data = await response.json();
//     const obj = JSON.stringify(
//       data,
//       ["capital", "name", "languages", "population", "area"],
//       4
//     );
//     console.log(obj);
//   } catch (err) {
//     console.error(err);
//   }
// };
// fetchData();

//LEVEL 2
//1.
// const fetchData = async () => {
//   const response = await fetch(catsAPI);
//   const data = await response.json();
//   const catNames = JSON.stringify(data, ["name"]);
//   console.log(catNames);
// };
// fetchData();

//LEVEL 3
//1.
// function average(sum, total) {
//   return Math.floor(sum / total);
// }
// function sumArray(arr) {
//   return arr.reduce((acc, cur) => +acc + +cur);
// }
// const fetchData = async () => {
//   const response = await fetch(catsAPI);
//   const data = await response.json();
//   const json = JSON.stringify(data, undefined, 1);
//   const obj = JSON.parse(json);
//   let array = [];
//   for (const set of obj) {
//     let { weight } = set;
//     let { metric } = weight;
//     array.push([metric]);
//   }

//   let lowerArray = [];
//   let higherArray = [];
//   for (const range of array) {
//     const str = range.toString();
//     const split = str.split(" ");
//     higherArray.push(split[split.length - 1]);
//     lowerArray.push(split[0]);
//   }
//   const totalLower = sumArray(lowerArray);
//   const lower = average(totalLower, lowerArray.length);
//   const totalHigher = sumArray(higherArray);
//   const higher = average(totalHigher, higherArray.length);
//   console.log(`Average Weight (Metric): ${lower} - ${higher}`);
// };
// fetchData();
//2.
// const fetchData = async () => {
//   const response = await fetch(countriesAPI);
//   const countries = await response.json();
//   const json = JSON.stringify(countries, ["area", "name"], 4);
//   const obj = JSON.parse(json);
//   let areaSize = [];
//   for (const pair of obj) {
//     let { area, name } = pair;
//     if (area) {
//       areaSize.push({ area: area, name: name });
//     }
//   }
//   const sorted = areaSize.sort((a, b) => b.area - a.area);
//   const largestTen = sorted.slice(0, 10);
//   console.log(largestTen);
// };
// fetchData();
//3.
// const fetchData = async () => {
//   const response = await fetch(countriesAPI);
//   const countries = await response.json();
//   const json = JSON.stringify(countries, 4);
//   const obj = JSON.parse(json);
//   const languagesMap = new Map();
//   for (const country of obj) {
//     const languages = country.languages;
//     for (const language of languages) {
//       let { name } = language;
//       if (!languagesMap.has(name)) {
//         languagesMap.set(name, 1);
//       } else {
//         languagesMap.set(name, languagesMap.get(name) + 1);
//       }
//     }
//   }
//   console.log(
//     `There are a total of ${languagesMap.size} languages in the world`
//   );
// };
// fetchData();
