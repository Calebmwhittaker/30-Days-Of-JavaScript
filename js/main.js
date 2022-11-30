//DAY 7
//Function Declaration
//Function w/o Parameters
// function square() {
//   let num = 2;
//   let sq = num * num;
//   console.log(sq);
// }
// square();
/*Returns the squared number, which in this case
    is the number 4 */
// function addTwoNumbers() {
//   let numOne = 10;
//   let numTwo = 20;
//   let sum = numOne + numTwo;
//   console.log(sum);
// }
// addTwoNumbers();
/*Returns the sum of two numbers */
// function printFullName() {
//   let firstName = "Caleb";
//   let lastName = "Whittaker";
//   let space = " ";
//   let fullName = firstName + space + lastName;
//   console.log(fullName);
// }
// printFullName();
/*Returns the concatenated firstName and lastName
    of an indivdual */

//Function Returning Values
// function printFullName() {
//   let firstName = "Caleb";
//   let lastName = "Whittaker";
//   let space = " ";
//   let fullName = firstName + space + lastName;
//   return fullName;
//   /*The return statement is not the same as the
//     console log statement. You still need to call
//     the function within a log statement to print
//     anything to the console */
// }
// console.log(printFullName());

//Function w/ a Parameter
// function areaOfCircle(r) {
//   let area = Math.PI * r * r;
//   return area;
// }
// console.log(areaOfCircle(10));
// function square(n) {
//   return n * n;
// }
// console.log(square(25));

//Function w/ Two Parameters
// function sumTwoNumbers(n1, n2) {
//   return n1 + n2;
// }
// console.log(sumTwoNumbers(1, 4));
// function printFullName(firstName, lastName) {
//   return `${firstName} ${lastName}`;
// }
// console.log(printFullName("Caleb", "Whittaker"));
//Parameters need to be a string in this case

//Function with Many Parameters
// function sumArrayValues(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }
// const numbers = [1, 2, 3, 4, 5];
// console.log(sumArrayValues(numbers));

// const areaOfCircle = (r) => {
//   let area = Math.PI * r * r;
//   return area;
// };
// console.log(areaOfCircle(10));
/*This example uses an arrow function to declare its
    parameter */

//Function with Unlimited Number of Parameters
function sumAllNums() {
  console.log(arguments);
  /*The arguments variable is required here */
}
sumAllNums(1, 2, 3);
//[Arguments] {'0': 1, '1': 2, '2' : 3}
