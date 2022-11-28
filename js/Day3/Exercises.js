//DAY 3 EXERCISES
//LEVEL 1 EXERCISES

//1.
// const firstName = "Caleb";
// const lastName = "Whittaker";
// const country = "USA";
// const city = "Bay City";
// const age = 22;
// const isMarried = false;
// const year = new Date().getFullYear();
// const array = new Array(
//   typeof firstName,
//   typeof lastName,
//   typeof country,
//   typeof city,
//   typeof age,
//   typeof isMarried,
//   typeof year
// );
// console.log(array);
//2.
// const string = "10";
// const number = 10;
// console.log(string == number); //true
// console.log(string === number); //false
//3.
// const gravity = 9.8;
// console.log(parseInt(gravity)); //9
// console.log(parseInt(gravity) == 10); // false
// console.log(Math.ceil(gravity) == 10); //true
//4.
// console.log(Boolean(1));
// console.log(Boolean("Hi"));
// console.log(Boolean(true));
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
//5.
// console.log(4 > 3);
// console.log(4 >= 3);
// console.log(4 < 3);
// console.log(4 <= 3);
// console.log(4 == 4);
// console.log(4 === 4);
// console.log(4 != 4);
// console.log(4 !== 4);
// console.log(4 != "4");
// console.log(4 == "4");
// console.log(4 === "4");
// const python = "python";
// const jargon = "jargon";
// console.log(python.length !== jargon.length);
//6.
// console.log(4 > 3 && 10 < 12); //true
// console.log(4 > 3 && 10 > 12); //false
// console.log(4 > 3 || 10 < 12); //true
// console.log(4 > 3 || 10 > 12); //true
// console.log(!(4 > 3)); //false
// console.log(!(4 < 3)); //true
// console.log(!false); //true
// console.log(!(4 > 3 && 10 < 12)); //false
// console.log(!(4 > 3 && 10 > 12)); //true
// console.log(!(4 === "4")); //true
// const dragon = "dragon";
// const python = "python";
// console.log(dragon.includes("on") !== python.includes("on"));
//7.
// const now = new Date();
// console.log(now.getFullYear());
// console.log(now.getMonth() + 1);
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getTime());

//LEVEL 2 EXERCISES
//1.
// alert("We're going to solve the area of a triangle");
// let base = prompt("Enter the base of the triangle:");
// let height = prompt("Enter the height of the triangle:");
// console.log(`The area of this triangle is ${0.5 * base * height}`);
//2.
// alert("We're going to solve the perimeter of a triangle");
// let a = prompt("Enter a length for side a:");
// let b = prompt("Enter a length for side b:");
// let c = prompt("Enter a length for side c:");
// console.log(`The perimeter of this triangle is ${+a + +b + +c}`);
//3.
// alert("We're going to solve the area and perimeter of a rectangle");
// let l = prompt("Enter a length for this rectangle:");
// let width = prompt("Enter a width for this rectangle:");
// console.log(`The area of this rectangle is ${l * width}`);
// console.log(`The perimeter of this rectangle is ${2 * (+l + +width)}`);
//4.
// alert("we're going to solve the area and circumference of a circle");
// let r = prompt("Enter a radius for this circle:");
// console.log(`The area of this circle is ${Math.PI * r * r}`);
// console.log(`The circumference of this circle is ${2 * Math.PI * r} `);
//5.
// let slope1 = 2 / 1;
// let x = 2 / 2;
// let y = -2;
//6.
// let x2 = 6;
// let x1 = 2;
// let y2 = 10;
// let y1 = 2;
// let slope2 = (y2 - y1) / (x2 - x1);
// console.log(slope2);
//7.
// console.log(slope1 === slope2);
//8.
// let x = prompt("Enter an x value:");
// let y = +(x * x) + +(6 * x) + +9;
// console.log(y);
//9.
// let hours = prompt(`Enter hours here:`);
// let rate = prompt(`Enter hourly rate here:`);
// console.log(`Your weekly earning is ${Math.round(hours40 * rate)} before taxes`);
//10.
// let userName = prompt("Enter your name here:");
// console.log(userName.length > 7 ? "Your name is long" : "Your name is short");
//11.
// let firstName = prompt("Enter your first name here:");
// let lastName = prompt("Enter your last name here:");
// console.log(
//   firstName.length > lastName.length
//     ? "Your first name is longer than your family name"
//     : "Your family name is longer than your first name"
// );
//12.
// const myAge = 22;
// const yourAge = prompt("Enter your age here");
// console.log(
//   myAge > yourAge
//     ? `I am ${myAge - yourAge} years older than you`
//     : `You are ${yourAge - myAge} years older than me.`
// );
//13.
// let birthYear = prompt("Enter your birth year:");
// const year = new Date().getFullYear();
// const legalBirthYear = +birthYear + +16;
// console.log(
//   `You are ${year - birthYear} years old.`,
//   year - birthYear > 16
//     ? "You are old enough to drive"
//     : `You need to wait ${legalBirthYear - year} years before you can drive.`
// );
//14.
// let birthYear = prompt("Enter your birth year:");
// const year = new Date().getFullYear();
// const secondsAlive = (year - birthYear) * 365 * 86400;
// console.log(`You've been alive for ${secondsAlive} seconds`);
//15.
// const now = new Date();
// const year = now.getFullYear();
// const month = now.getMonth() + 1;
// const day = now.getDate();
// const hours = now.getHours();
// const minutes = now.getMinutes();
// console.log(`${year}-${month}-${day} ${hours}:${minutes}`);
// console.log(`${day}-${month}-${year} ${hours}:${minutes}`);
// console.log(`${day}/${month}/${year} ${hours}:${minutes}`);

//LEVEL 3 EXERCISES
//1.
// const now = new Date();
// const year = now.getFullYear();
// const month = now.getMonth() + 1;
// const day = now.getDate();
// const hours = now.getHours();
// const minutes = now.getMinutes();
// if (hours < 10 && minutes < 10) {
//   console.log(`${year}-${month}-${day} 0${hours}:0${minutes}`);
// } else if (hours > 10 && minutes < 10) {
//   console.log(`${year}-${month}-${day} ${hours}:0${minutes}`);
// } else if (hours < 10 && minutes > 10) {
//   console.log(`${year}-${month}-${day} 0${hours}:${minutes}`);
// } else {
//   console.log(`${year}-${month}-${day} ${hours}:${minutes}`);
// }
