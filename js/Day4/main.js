//DAY 4

//IF OPERATOR
/*The 'if' operator is used to check if a condition
    is true and then execute a block of code within*/
// let condition = 5; //Let has to be used with if statements
// if ((condition = 5)) {
//   console.log("Condition is 5");
// }

// let num = 3;
// if (num > 0) {
//   console.log(`${num} is a positive number`);
// }

// let isRaining = true;
// if (isRaining) {
//   console.log("Remember to bring your rain coat");
// } else {
//   //Will execute when the if statement fails
//   console.log("No need for your coat");
// }

//ELSE IF
//Used to check multiple conditions
// let a = prompt("Enter a number");
// if (a > 0) {
//   console.log(`${a} is a positive number`);
// } else if (a < 0) {
//   console.log(`${a} is a negative number`);
// } else if (a == 0) {
//   console.log(`${a} is zero`);
// } else {
//   console.log(`${a} is not a number`);
// }

//SWITCH
// let weather = "cloudy";
// switch (weather) {
//   case "rainy":
//     console.log("You need a rain coat");
//     break;
//   case "cloudy":
//     console.log("It might be cold, you need a jacket");
//   case "sunny":
//     console.log("Go out freely");
//     break;
//   default:
//     console.log("No need for a rain coat");
// }

// let dayUserInput = prompt("What day of the week is it?");
// let day = dayUserInput.toLowerCase();
// switch (day) {
//   case "monday":
//     console.log("Today is Monday");
//     break;
//   default:
//     console.log("Today is not Monday");
// }

/*Switches are often more cost effective than heavily
    nested if else statements */

// let num = prompt("Enter a number");
// switch (true) {
//   case num > 0:
//     console.log("Number is positive");
//     break;
//   case num < 0:
//     console.log("Number is negative");
//     break;
//   case num == 0:
//     console.log("Number is zero");
//     break;
//   default:
//     console.log("Entered value was not a number");
// }
