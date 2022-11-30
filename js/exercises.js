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
const findMax = (...args) => {
  let max = 0;
  for (const number of args) {
    if (number > max) {
      max = number;
    }
  }
  return max;
};
console.log(findMax(1, 58, 69, 100, 57));
