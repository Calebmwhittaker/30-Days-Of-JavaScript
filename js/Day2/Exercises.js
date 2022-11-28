//DAY 2 EXERCISES
// //LEVEL 1

// //1.
// let challenge = "30 Days Of JavaScript";
// //2.
// console.log(challenge);
// //3.
// console.log(challenge.length);
// //4.
// console.log(challenge.toUpperCase());
// //5.
// console.log(challenge.toLowerCase());
// //6.
// console.log(challenge.substring(0, 2));
// //7.
// console.log(challenge.substring(3, 21));
// //8.
// console.log(challenge.includes("Script"));
// //9.
// console.log(challenge.split());
// //10.
// console.log(challenge.split(" "));
// //11.
// let companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
// console.log(companies.split(", "));
// //12.
// console.log(challenge.replace("JavaScript", "Python"));
// //13.
// console.log(challenge.charAt(15));
// //14.
// console.log(challenge.charCodeAt("J"));
// //15.
// console.log(challenge.indexOf("a"));
// //16.
// console.log(challenge.lastIndexOf("a"));
// //17.
// let because =
//   "You cannot end a sentence with because because because is a conjunction";
// console.log(because.indexOf("because"));
// //18.
// console.log(because.lastIndexOf("because"));
// //19.
// console.log(because.search("because"));
// //20.
// let challenge2 = " 30 Days of JavaScript ";
// console.log(challenge2);
// console.log(challenge2.trim());
// //21.
// console.log(challenge.startsWith("30"));
// //22.
// console.log(challenge.endsWith("JavaScript"));
// //23.
// console.log(challenge.match(/a/gi));
// //24.
// let challenge3 = "30 Days of ";
// console.log(challenge3.concat("JavaScript"));
// //25.
// console.log(challenge3.repeat(2));

//LEVEL 2

//1.
// console.log(
//   `The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`
// );

// //2.
// console.log(
//   `"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`
// );

// //3.
// let string = "10";
// let convString = +string;
// let number = 10;
// console.log(typeof convString === typeof number);

// //4.
// let num = 9.8;
// let floatNum = parseFloat(num);
// let roundedFloatNum = Math.round(floatNum);
// console.log(roundedFloatNum == 10);

// //5.
// let python = "python";
// let jargon = "jargon";
// console.log(python.includes("on"));
// console.log(jargon.includes("on"));
// console.log(python.includes("on") == jargon.includes("on"));

// //6.
// let sentence = "I hope this course is not full of jargon";
// console.log(sentence.includes("jargon"));

// //7.
// console.log(Math.random() * 100);

// //8.
// function randIntFromInterval(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
//   /*Multiplies random number by range of interval plus 1 and then adds
//   the minimum value back to keep the lower range at the minimum value,
//   then finally rounds the number down to get 50 as the lowest possible
//   number*/
// }
// const randInt = randIntFromInterval(50, 100);
// console.log(randInt);
// let randomNumber = Math.floor(Math.random() * 51 + 50);
// /*Returns a random number between 50 and 100
//   Make sure to mulitply by one number higher than the minimum range
//   and then add by the minimum range
//   This is very similar to the function above but more hard coded*/
// console.log(randomNumber);

// //9.
// console.log(Math.floor(Math.random() * 256));
/*Returns a random number between 0 and 255
  Make sure to always increase the upper limit by one number greater
  than the highest number that you want */

//10.
// let string = "Javascript";
// let randIdx = Math.floor(Math.random() * string.length);
// /*In order to access numbers within the string, you need to have an
//   index of which needs to be a random number hence the random method.
//   You then use the length of the string to multiply the random number
//   generated and then round it down with the floor method to give you
//   your random index the traverse through the string*/
// console.log(string[randIdx]);
//11.
// console.log("1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n");
//12.
// let because =
//   "You cannot end a sentence with because because because is a conjunction";
// console.log(because.indexOf("because"));
// console.log(because.lastIndexOf("is"));
// console.log(because.substring(31, 54));

//EXERCISE LEVEL 3
//1.
// let string =
//   "Love is the best thing in this world. Some found their love and some are still looking for their love";
// console.log(string.match(/love/gi));
//2.
// let string =
//   "You cannot end a sentence with because because because is a conjunction";
// console.log(string.match(/because/gi));
//3.
// const sentence =
//   "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
// const cleanSentence = sentence.replace(/[%@$&#;]/g, "");
// console.log(cleanSentence);
// console.log(cleanSentence.match(/\S\w*/g));
//4.
// let string =
//   "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month";
// let extractedNums = string.match(/\d\w*/g);
// console.log(extractedNums);
// let integerArray = extractedNums.map((item) => parseInt(item));
// console.log(integerArray);
// // let stringifiedExtractedNums = extractedNums.toString();
// // console.log(stringifiedExtractedNums);
// let totalIncome =
//   integerArray[0] * 12 + (integerArray[1] + integerArray[2] * 12);
// console.log(totalIncome);
