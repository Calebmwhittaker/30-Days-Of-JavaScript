//DAY 19 LESSON
//Closure
/*JavaScript allows writing functions inside an outer function */
/*You can write as many inner functions as you want */
/*If inner functions acess the varaibles of the outer function, then it is called closure */
// function outerFunction() {
//   let count = 0;
//   function innerFunction() {
//     count++;
//     return count;
//   }
//   return innerFunction;
// }
// const innerFunc = outerFunction();

// console.log(innerFunc());
// console.log(innerFunc());
// console.log(innerFunc());

// function outerFunction() {
//   let count = 0;
//   function plusOne() {
//     count++;
//     return count;
//   }
//   function minusOne() {
//     count--;
//     return count;
//   }
//   return {
//     plusOne: plusOne(),
//     minusOne: minusOne(),
//   };
// }
// const innerFuncs = outerFunction();

// console.log(innerFuncs.plusOne);
// console.log(innerFuncs.minusOne);
