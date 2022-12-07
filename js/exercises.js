//DAY 7 EXERCISES
//LEVEL 1 EXERCISES
//1.
// const fullName = (firstName = "Caleb", lastName = "Whittaker") =>
//   `${firstName} ${lastName}`;
// console.log(fullName("Heidi"));
//3.
// const addNums = (...args) => {
//   let sum = 0;
//   for (const num of args) {
//     sum += num;
//   }
//   return sum;
// };
// console.log(addNums(2, 4, 5));
//4.
// const areaOfRect = (l, w) => l * w;
// console.log(areaOfRect(2, 4));
//5.
// const perimeterOfRect = (l, w) => 2 * (l + w);
// console.log(perimeterOfRect(2, 4));
//6.
// const volumeOfPrism = (l, w, h) => l * w * h;
// console.log(volumeOfPrism(2, 3, 5));
//7.
// const areaOfCircle = (r) => Math.PI * r * r;
// console.log(areaOfCircle(1));
//8.
// const circumOfCircle = (r) => Math.PI * 2 * r;
// console.log(circumOfCircle(1));
//9.
// const calculateDensity = (m, v) => m / v;
// console.log(calculateDensity(2, 2));
//10.
// const calculateSpeed = (d, t) => d / t;
// console.log(calculateSpeed(5, 1));
//11.
// const weight = (m, g = 9.81) => m * g;
// console.log(weight(200));
//12.
// const convertCelsiusToFahrenheit = (c) => c * (9 / 5) + 32;
// console.log(convertCelsiusToFahrenheit(0));
//13.
// const calculateBMI = (w, h) => {
//   let bmi = w / (h * h);
//   let newBMI = bmi;
//   switch (true) {
//     case newBMI < 18.5:
//       console.log(`You have a BMI of ${newBMI}. You are underweight`);
//       break;
//     case newBMI >= 18.5 && newBMI < 24.9:
//       console.log(`You have a BMI of ${newBMI}. You are at a normal weight.`);
//       break;
//     case newBMI >= 25 && newBMI < 29.9:
//       console.log(`You have a BMI of ${newBMI}. You are overweight`);
//       break;
//     case newBMI >= 30:
//       console.log(`You have a BMI of ${newBMI}. You are obese!`);
//       break;
//     default:
//       console.log(`${w} and/or ${h} is not a valid input. Please try again.`);
//       break;
//   }
//   return bmi;
// };
// console.log(calculateBMI(100, 2));
/*Make sure to use >= or <= for ends of ranges
    Make sure to return the calculation
    Make sure the switch condition is a boolean */
//14.
// const seasonCheck = (month) => {
//   switch (month) {
//     case "december":
//     case "january":
//     case "february":
//       console.log(`The month of ${month} is during winter.`);
//       break;
//     case "march":
//     case "april":
//     case "may":
//       console.log(`The month of ${month} is during spring.`);
//       break;
//     case "june":
//     case "july":
//     case "august":
//       console.log(`The month of ${month} is during summer.`);
//       break;
//     case "september":
//     case "october":
//     case "november":
//       console.log(`The month of ${month} is during autumn`);
//       break;
//     default:
//       console.log(`${month} is not a valid input. Please try again.`);
//   }
//   return month;
// };
// console.log(seasonCheck("january"));
/*Make sure to check for the condition itself if
    there is no mathematical caluclations going on
    in the function
    Multiple cases are needed if checking for
    multiple cases */
//15.
// const findMax = (...args) => {
//   let max = 0;
//   for (const number of args) {
//     if (number > max) {
//       max = number;
//     }
//   }
//   return max;
// };
// console.log(findMax(1, 58, 69, 100, 57));

const { start } = require("repl");

//LEVEL 2 EXERCISES
//1.
// const solveLinEquation = (a, b, c) => {
//   let y = `y = ${-a / b}x + ${-c / b}`;
//   return y;
// };
// console.log(solveLinEquation(3, 4, 5));
//2.
// const solveQuadratic = (a, b, c) => {
//   let positiveResult = `x = ${-b / (2 * a)} + ${Math.sqrt(
//     ((b ** 2 - 4 * a * c) / 2) * a
//   )}`;
//   let negativeResult = `x = ${(-b / 2) * a} - ${Math.sqrt(
//     ((b ** 2 - 4 * a * c) / 2) * a
//   )}`;
//   let solution = `${positiveResult} and ${negativeResult}`;
//   return solution;
// };
// console.log(solveQuadratic(1, 3, 1));
//3.
// const printArray = (...args) => {
//   for (const element of args) {
//     console.log(element);
//   }
//   return true;
// };
// console.log(printArray(1, 2, 3, 4));
//4.
// const showDateTime = () => {
//   let month = new Date().getMonth();
//   let day = new Date().getDate();
//   let year = new Date().getFullYear();
//   let hours = new Date().getHours();
//   let minutes = new Date().getMinutes();
//   switch (true) {
//     case minutes <= 9 && hours <= 9:
//       var hoursAndMinutes = `0${hours}:0${minutes}`;
//       break;
//     case minutes <= 9 && hours > 9:
//       var hoursAndMinutes = `${hours}:0${minutes}`;
//       break;
//     default:
//       var hoursAndMinutes = `${hours}:${minutes}`;
//       break;
//   }
//   let dateTime = `${month}/${day}/${year} ${hoursAndMinutes}`;
//   return dateTime;
// };
// console.log(showDateTime());
//5.
// const swapValues = (x, y) => {
//   newX = y;
//   newY = x;
//   console.log(newX);
//   console.log(newY);
//   return true;
// };
// console.log(swapValues(3, 4));
//6.
// const reverseArray = (...args) => {
//   let reversedArray = [];
//   for (i = args.length - 1; i >= 0; i--) {
//     reversedArray.push(args[i]);
//   }
//   return reversedArray;
// };
// console.log(reverseArray(1, 2, 3, 4, 5));
//7.
// const capitalizeArray = (...args) => {
//   for (const element of args) {
//     var capitalized = element.toUpperCase();
//     console.log(capitalized);
//   }
//   return true;
// };
// console.log(capitalizeArray("caleb", "matthew", "whittaker"));
//8.
// const addItem = (item) => {
//   let newArray = [];
//   newArray.push(item);
//   return newArray;
// };
// console.log(addItem("hello"));
//9.
// let array = [1, 2, 3];
// const removeItems = (index1, index2) => {
//   array.splice(index1, index2);
//   console.log(array);
//   return true;
// };
// console.log(removeItems(0, 2));
//10.
// const sumOfNumbers = (num1, num2) => {
//   let sumArray = [];
//   let sum = 0;
//   for (i = num1; i <= num2; i++) {
//     sum += i;
//   }
//   sumArray.push(sum);
//   return sumArray;
// };
// console.log(sumOfNumbers(1, 2));
//11.
// const sumOfOdds = (num1, num2) => {
//   let sumArray = [];
//   let oddSum = 0;
//   for (i = num1; i <= num2; i++) {
//     if (!(i % 2 === 0)) {
//       oddSum += i;
//     } else {
//       continue;
//     }
//   }
//   sumArray.push(oddSum);
//   return sumArray;
// };
// console.log(sumOfOdds(5, 10));
//12.
// const sumOfEvens = (num1, num2) => {
//   let sumArray = [];
//   let evenSum = 0;
//   for (i = num1; i <= num2; i++) {
//     if (i % 2 === 0) {
//       evenSum += i;
//     } else continue;
//   }
//   sumArray.push(evenSum);
//   return sumArray;
// };
// console.log(sumOfEvens(5, 10));
//13.
// const numberOfEvensAndOdds = (num1, num2) => {
//   let evenCount = 0;
//   let oddCount = 0;
//   for (i = num1; i <= num2; i++) {
//     if (i % 2 === 0) {
//       evenCount += 1;
//     } else if (!(i % 2 === 0)) {
//       oddCount += 1;
//     } else continue;
//   }
//   let sentence = `The number of evens are ${evenCount}.\n The number of odds are ${oddCount}`;
//   return sentence;
// };
// console.log(numberOfEvensAndOdds(0, 100));
//14.
// const sumOfNumbers = (...args) => {
//   let sum = 0;
//   for (const element of args) {
//     sum += element;
//   }
//   return sum;
// };
// console.log(sumOfNumbers(1, 2, 3, 4));
//15.
// const randomUserIp = () => {
//   let arr = [];
//   for (i = 0; i < 4; i++) {
//     for (j = 0; j < 3; j++) {
//       let randomNum = Math.floor(Math.random() * 10);
//       arr.push(randomNum);
//     }
//     arr.push(".");
//   }
//   arr.pop();
//   let joinedArr = arr.join("");
//   return joinedArr;
// };
// console.log(randomUserIp());
/*When using multiple for loops, you need to
  specify unique iteration variables */
//16.
// const randomMacAddress = () => {
//   let arr = [];
//   for (i = 0; i < 6; i++) {
//     for (j = 0; j < 2; j++) {
//       let randomNum = Math.floor(Math.random() * 10);
//       let string = "ABCDEF";
//       let randomChar = string[Math.floor(Math.floor(Math.random() * 6))];
//       let randomDec = Math.floor(Math.random() * 2);
//       if (randomDec === 0) {
//         randomDec = randomNum;
//       } else if (randomDec === 1) {
//         randomDec = randomChar;
//       }
//       arr.push(randomDec);
//     }
//     arr.push(":");
//   }
//   arr.pop();
//   let joinedArr = arr.join("");
//   return joinedArr;
// };
// console.log(randomMacAddress());
//17.
// const randomHexaNumberGenerator = () => {
//   let randomHexaNumberArray = [];
//   for (i = 0; i < 3; i++) {
//     for (j = 0; j < 2; j++) {
//       let randomNum = Math.floor(Math.random() * 10);
//       let string = "abcdef";
//       let randomChar = string[Math.floor(Math.random() * 6)];
//       let randomDecision = Math.floor(Math.random() * 2);
//       if (randomDecision === 0) {
//         randomHexaNumberArray.push(randomNum);
//       } else if (randomDecision === 1) {
//         randomHexaNumberArray.push(randomChar);
//       }
//     }
//   }
//   let joinedArray = randomHexaNumberArray.join("");
//   return `#${joinedArray}`;
// };
// console.log(randomHexaNumberGenerator());
//18.
// const userIdGenerator = () => {
//   let userIdArray = [];
//   for (i = 0; i < 7; i++) {
//     let randomNum = Math.floor(Math.random() * 10);
//     let string = "qwertyuiopasdfghjklzxcvbnm";
//     let randomChar = string[Math.floor(Math.random() * 26)];
//     let randomDecision = Math.floor(Math.random() * 2);
//     if (randomDecision === 0) {
//       userIdArray.push(randomNum);
//     } else if (randomDecision === 1) {
//       userIdArray.push(randomChar);
//     }
//   }
//   let joinedArray = userIdArray.join("");
//   return joinedArray;
// };
// console.log(userIdGenerator());

//LEVEL 3 EXERCISES
//1.
// const userIdGenerator = () => {
//   let numberOfIds = prompt("Enter the number of IDs to be generated:");
//   let numberOfCharacters = prompt("Enter the number of characters:");
//   let string = "qwertyuiopasdfghjklzxcvbnm";
//   for (i = 0; i < numberOfIds; i++) {
//     let userIdArray = [];
//     for (j = 0; j < numberOfCharacters; j++) {
//       let randomNum = Math.floor(Math.random() * 10);
//       let randomChar = string[Math.floor(Math.random() * 26)];
//       let randomDecision = Math.floor(Math.random() * 2);
//       if (randomDecision === 0) {
//         randomDecision = randomNum;
//         userIdArray.push(randomDecision);
//       } else if (randomDecision === 1) {
//         randomDecision = randomChar;
//         userIdArray.push(randomDecision);
//       }
//     }
//     let joinedArray = userIdArray.join("");
//     console.log(joinedArray);
//     5;
//   }
//   return true;
// };
// console.log(userIdGenerator());
//2.
// const rgbColorGenerator = () => {
//   let rgbColorArray = [];
//   for (i = 0; i < 3; i++) {
//     let singleArray = [];
//     for (j = 0; j < 3; j++) {
//       let randomNum = Math.floor(Math.random() * 6);
//       singleArray.push(randomNum);
//     }
//     let joinedSingleArray = singleArray.join("");
//     rgbColorArray.push(joinedSingleArray);
//   }
//   let joinedRGBArray = rgbColorArray.join(",");
//   return `rgb(${joinedRGBArray})`;
// };
// console.log(rgbColorGenerator());
//3.
// const hexaColorGenerator = () => {
//   let numberOfHexaCodes = prompt(
//     "Enter the number of hexacodes to be generated:"
//   );
//   for (i = 0; i < numberOfHexaCodes; i++) {
//     let hexaColorsArray = [];
//     for (a = 0; a < 3; a++) {
//       for (j = 0; j < 2; j++) {
//         let randomNum = Math.floor(Math.random() * 10);
//         let string = "abcdef";
//         let randomChar = string[Math.floor(Math.random() * string.length)];
//         let randomDecision = Math.floor(Math.random() * 2);
//         if (randomDecision === 0) {
//           randomDecision = randomNum;
//           hexaColorsArray.push(randomDecision);
//         } else if (randomDecision === 1) {
//           let randomDecision = randomChar;
//           hexaColorsArray.push(randomDecision);
//         }
//       }
//     }
//     let joinedArray = hexaColorsArray.join("");
//     console.log(`#${joinedArray}`);
//   }
//   return true;
// };
// console.log(hexaColorGenerator());
//4.
// const rgbColorGenerator = () => {
//   let numberOfRGB = prompt("Enter number of RGB color codes to be generated:");
//   for (a = 0; a < numberOfRGB; a++) {
//     let rgbColorArray = [];
//     for (i = 0; i < 3; i++) {
//       let singleArray = [];
//       for (j = 0; j < 3; j++) {
//         let randomNum = Math.floor(Math.random() * 6);
//         singleArray.push(randomNum);
//       }
//       let joinedSingleArray = singleArray.join("");
//       rgbColorArray.push(joinedSingleArray);
//     }
//     let joinedRGBArray = rgbColorArray.join(",");
//     console.log(`rgb(${joinedRGBArray})`);
//   }
//   return true;
// };
// console.log(rgbColorGenerator());
//7.
// const generateColors = () => {
//   let selectColor = prompt('Enter either "hexa" or "rgb":');
//   switch (selectColor) {
//     case "hexa":
//       let hexaColorArray = [];
//       for (i = 0; i < 3; i++) {
//         for (j = 0; j < 2; j++) {
//           let randomNum = Math.floor(Math.random() * 10);
//           let string = "abcdef";
//           let randomChar = string[Math.floor(Math.random() * 6)];
//           let randomDecision = Math.floor(Math.random() * 2);
//           if (randomDecision === 0) {
//             randomDecision = randomNum;
//             hexaColorArray.push(randomDecision);
//           } else if (randomDecision === 1) {
//             randomDecision = randomChar;
//             hexaColorArray.push(randomDecision);
//           }
//         }
//       }
//       let joinedArray = hexaColorArray.join("");
//       console.log(`#${joinedArray}`);
//       break;
//     case "rgb":
//       let rgbColorArray = [];
//       for (rgbSet = 0; rgbSet < 3; rgbSet++) {
//         let singleRGBColorArray = [];
//         for (rgbChar = 0; rgbChar < 3; rgbChar++) {
//           if (rgbChar === 0) {
//             let randomNumber = Math.floor(Math.random() * 3);
//             singleRGBColorArray.push(randomNumber);
//           } else {
//             let randomNum = Math.floor(Math.random() * 6);
//             singleRGBColorArray.push(randomNum);
//           }
//         }
//         let joinedArray = singleRGBColorArray.join("");
//         rgbColorArray.push(joinedArray);
//       }
//       let rgbColorArrayJoined = rgbColorArray.join(",");
//       console.log(`rgb(${rgbColorArrayJoined})`);
//       break;
//     default:
//       console.log('Please type either "hexa" or "rgb" in lowercase');
//       break;
//   }
//   return true;
// };
// console.log(generateColors());
//8.
// const shuffleArray = (...args) => {
//   for (let i = args.length - 1; i > 0; i--) {
//     let randomIndex = Math.floor(Math.random() * (i + 1));
//     let temp = args[i]; //args[3]
//     //Sets a temporary reference value from the current array
//     args[i] = args[randomIndex]; //args[3] = args[2]
//     //Sets the value of the current index to a random value in the array
//     args[randomIndex] = temp; //2 = args[3]
//     //Will never return a repeat value
//   }
//   return args;
// };
// console.log(shuffleArray(1, 2, 3, 4));
//9.
// const calculateFactorial = (number) => {
//   let factorial = 1;
//   for (i = number; i > 0; i--) {
//     factorial *= i;
//   }
//   return factorial;
// };
// console.log(calculateFactorial(4));
//10.
// const isEmpty = (param) => {
//   if (!param) {
//     return "Is empty";
//   }
//   return "Is NOT empty";
// };
// console.log(isEmpty(3));
//11.
// const sum = (...args) => {
//   let sum = 0;
//   for (const element of args) {
//     sum += element;
//   }
//   return sum;
// };
// console.log(sum(1, 2, 3, 4));
//12.
// const sumOfArrayItems = (...args) => {
//   let sum = 0;
//   for (const element of args) {
//     if (element % 1 === 0) {
//       sum += element;
//     } else {
//       return "Only integer values";
//     }
//   }
//   return sum;
// };
// console.log(sumOfArrayItems(1, 2, "hi", 4));
//13.
// const average = (...args) => {
//   let sum = 0;
//   let count = 0;
//   for (const element of args) {
//     if (element % 1 === 0) {
//       sum += element;
//       count += 1;
//     } else {
//       return "Only integer values";
//     }
//   }
//   return sum / count;
// };
// console.log(average(1, 2, 3));
//14.
// const modifyArray = (...args) => {
//   let modifiedArray = [];
//   if (args.length >= 5) {
//     for (const element of args) {
//       if (element === args[4]) {
//         let modifiedElement = element.toUpperCase();
//         modifiedArray.push(modifiedElement);
//       } else {
//         modifiedArray.push(element);
//       }
//     }
//   } else {
//     return "Array is too short";
//   }
//   return modifiedArray;
// };
// console.log(
//   modifyArray("hi", "hello", "bonjour", "hola", "konichiwa", "jambo")
// );
//15.
// const isPrime = (number) => {
//   for (i = number; i > 1; i--) {
//     for (j = number; j > 1; j--) {
//       if (i * j === number) {
//         return "Is NOT prime";
//       }
//     }
//   }
//   return "Is Prime";
// };
// console.log(isPrime(11));
//16.
// const isUnique = (...args) => {
//   let uniqueArray = [];
//   for (i = 0; i < args.length; i++) {
//     if (!uniqueArray.includes(args[i])) {
//       uniqueArray.push(args[i]);
//     } else {
//       continue;
//     }
//   }
//   return uniqueArray;
// };
// console.log(isUnique(1, 2, 3, 4, 3, 5));
//17.
// const checkUniqueArray = (...args) => {
//   let uniqueArray = [];
//   let startType = undefined;
//   for (const element of args) {
//     let elementType = typeof element;
//     if (startType === undefined || elementType === startType) {
//       startType = elementType;  /*Don't initialize variables that you wish to modify within a loop */
//       uniqueArray.push(element);
//     } else {
//       return "Array items are not the same type";
//     }
//   }
//   return uniqueArray;
// };
// console.log(checkUniqueArray(1, 2, 3));
//18.
// const isValidVariable = (variable) => {
//   if (
//     variable.match(/[\!\@\#\%\^\&\*\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~\`\-]/g)
//   ) {
//     return false;
//   } else {
//     return true;
//   }
// };
// console.log(isValidVariable("xas344545-"));
