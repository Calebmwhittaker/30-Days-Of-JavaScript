//DAY 4 EXERCISES
//LEVEL 1 EXERCISES
//1.
// let birthYear = prompt("Enter your birth year:");
// let now = new Date();
// let year = now.getFullYear();
// let legalBirthYear = +birthYear + 16;
// if (year - birthYear >= 16) {
//   console.log(
//     `You are ${year - birthYear} years old. You are old enough to drive.`
//   );
// } else {
//   console.log(
//     `You are ${year - birthYear} years old. You are ${
//       legalBirthYear - year
//     } years away from being able to drive.`
//   );
// }
//2.
// let myAge = 22;
// let yourAge = prompt("Enter your age:");
// console.log(myAge);
// if (myAge > yourAge) {
//   console.log(`I am ${myAge - yourAge} years older than you`);
// } else if (yourAge > myAge) {
//   console.log(`You are ${yourAge - myAge} years older than me`);
// } else if (myAge == yourAge) {
//   console.log("We are the same age");
// } else {
//   console.log("Please try again");
// }
//3.
// let a = 4;
// let b = 3;
// if (a > b) {
//   console.log(`${a} is greater than ${b}`);
// } else {
//   console.log(`${b} is greater than ${a}`);
// }
// a > b
//   ? console.log(`${a} is greater than ${b}`)
//   : console.log(`${a} is less than ${b}`);
//4.
// console.log(2 % 2);
// let number = prompt("Enter a number:");
// if (number % 2 == 0) {
//   console.log(`${number} is an even number`);
// } else if (number % 2 != 0 && Number(number)) {
//   console.log(`${number} is an odd number`);
// } else {
//   console.log(`${number} is not a number`);
// }

//LEVEL 2 EXERCISES
//1.
// let grade = Number(prompt("Enter a grade percent from 0 - 100:"));
// switch (true) {
//   case grade >= 90:
//     console.log("A");
//     break;
//   case 70 <= grade && grade <= 89:
//     console.log("B");
//     break;
//   case 60 <= grade && grade <= 69:
//     console.log("C");
//     break;
//   case 50 <= grade && grade <= 59:
//     console.log("D");
//     break;
//   case 0 <= grade && grade <= 49:
//     console.log("F");
//     break;
//   default:
//     console.log("Please type in a real number");
// }
//2.
// let userInputSeason = prompt("Enter a month of the year");
// let season = userInputSeason.toLowerCase();
// switch (season) {
//   case "september":
//   case "october":
//   case "november":
//     console.log("The season is Autumn");
//     break;
//   case "december":
//   case "january":
//   case "february":
//     console.log("The season is Winter");
//     break;
//   case "march":
//   case "april":
//   case "may":
//     console.log("The season is Spring");
//     break;
//   case "june":
//   case "july":
//   case "august":
//     console.log("The season is Summer");
//     break;
//   default:
//     console.log("That is not a month of the year");
//     break;
// }
//Multiple cases can be nested within a condition
//3.
// let userDayInput = prompt("Enter a day of the week:");
// let day = userDayInput.toLowerCase();
// switch (day) {
//   case "monday":
//   case "tuesday":
//   case "wednesday":
//   case "thursday":
//   case "friday":
//     console.log(`${day} is a work day`);
//     break;
//   case "saturday":
//   case "sunday":
//     console.log(`${day} is during the weekend`);
//     break;
//   default:
//     console.log(`${day} is not a day of the week`);
// }

//LEVEL 3 EXERCISES
//1.
// let userMonthInput = prompt("Enter a month:");
// let month = userMonthInput.toLowerCase();
// switch (month) {
//   case "january":
//   case "march":
//   case "may":
//   case "july":
//   case "august":
//   case "october":
//   case "december":
//     console.log(`${month} has 31 days.`);
//     break;
//   case "april":
//   case "june":
//   case "september":
//   case "november":
//     console.log(`${month} has 30 days`);
//     break;
//   case "february":
//     console.log(`${month} has 28 days and 29 days during leap years`);
//     break;
//   default:
//     console.log(`${month} is not a month`);
// }
//2.
// let userMonthInput = prompt("Enter a month:");
// let year = prompt("Enter a year:");
// let month = userMonthInput.toLowerCase();
// switch (month) {
//   case "january":
//   case "march":
//   case "may":
//   case "july":
//   case "august":
//   case "october":
//   case "december":
//     console.log(`${month} has 31 days.`);
//     break;
//   case "april":
//   case "june":
//   case "september":
//   case "november":
//     console.log(`${month} has 30 days`);
//     break;
//   case "february":
//     if (year % 4 == 0) {
//       console.log(`${month} has 29 days`);
//     } else {
//       console.log(`${month} has 28 days`);
//     }
//     break;
//   default:
//     console.log(`${month} is not a month`);
// }
//If else statements can be used within switch cases
