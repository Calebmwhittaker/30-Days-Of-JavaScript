//LEVEL 3 EXERCISES
const sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
let cleanSentence = sentence.replace(/[%@$&#;\.!?,]/g, "");
let words = cleanSentence.split(" ");
// console.log(newArray);
// console.log(cleanSentence.match(/i/gi));
let wordFrequency = new Map();
words.forEach((word) => {
  if (!wordFrequency.has(word)) {
    wordFrequency.set(word, 1);
  } else {
    wordFrequency.set(word, wordFrequency.get(word) + 1);
  }
});
let maxFrequency = Math.max(...wordFrequency.values()); // Find max frequency of any word.
/*Finds the maximum value in the set of items */
// console.log(...wordFrequency.values());
// console.log(maxFrequency);
let wordsMatchingMaxFrequency = Array.from(wordFrequency.keys()).filter(
  (word) => {
    // console.log(wordFrequency.get(word));
    //Returns the value associated with the key
    return wordFrequency.get(word) === maxFrequency;
    /*Only returns if the value associated with a key
      matches the maximum frequency or maximum value
      found earlier */
  }
);
console.log(wordsMatchingMaxFrequency);
