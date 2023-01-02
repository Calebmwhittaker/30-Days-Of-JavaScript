//DAY 12 EXERCISES
//LEVEL 1
//1.
// const txt =
//   "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.";
// const pattern = /\d+/g;
// const matches = txt.match(pattern);
// console.log(matches);
// const total = matches
//   .map((num) => +num)
//   .reduce((acc, cur) => {
//     acc += cur;
//     return acc;
//   });
// console.log(`The total income is ${total} euros`);
//2.
// const points = ["-1", "2", "-4", "-3", "-1", "0", "4", "8"];
// const sortedPoints = points.map((num) => +num).sort((a, b) => (a > b ? 1 : -1));
// const maxPoint = Math.max(...sortedPoints);
// const minPoint = Math.min(...sortedPoints);
// const distance = maxPoint - minPoint;
// console.log(distance);

//LEVEL 2
//1.
// const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;
// const tenMostFrequentWords = (string, n) => {
//   const cleanString = string.replace(/\./g, "");
//   const words = cleanString.split(" ");
//   const newMap = new Map();
//   for (const word of words) {
//     if (!newMap.has(word)) {
//       newMap.set(word, 1);
//     } else {
//       newMap.set(word, newMap.get(word) + 1);
//     }
//   }
//   const newArray = [];
//   for (const element of newMap) {
//     let [word, count] = element;
//     newArray.push({ word: word, count: count });
//   }
//   const sorted = newArray.sort((a, b) => (a.count < b.count ? 1 : -1));
//   const spliced = sorted.splice(0, n);
//   return spliced;
// };
// console.log(tenMostFrequentWords(paragraph, 10));

//LEVEL 3
//1.
// const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;
// const cleanText = (paragraph, n) => {
//   const cleanSentence = paragraph.replace(/[~`!@#$%^&*();\.,\?]/g, "");
//   const words = cleanSentence.split(" ");
//   const newMap = new Map();
//   for (const word of words) {
//     if (!newMap.has(word)) {
//       newMap.set(word, 1);
//     } else {
//       newMap.set(word, newMap.get(word) + 1);
//     }
//   }
//   const newArray = [];
//   for (const element of newMap) {
//     let [word, count] = element;
//     newArray.push({ word: word, count: count });
//   }
//   const sorted = newArray
//     .sort((a, b) => (a.count < b.count ? 1 : -1))
//     .splice(0, n);
//   return sorted;
// };
// console.log(cleanText(sentence, 10));
