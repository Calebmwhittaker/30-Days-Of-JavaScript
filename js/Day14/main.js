//DAY 14 LESSON
//Error Handling
/*try: Wrap suspicious code that may throw an error in try block
    Allows us to define a block of code to be tested for errors while being executed */
/*catch: Write code to do something in a catch block when an error occurs
    Can take parameters to give you error information
    Used to log an error or display specific messages to the user */
/*finally: Will always be executed regardless of the occurrence of an error
    Can be used to complete the remaining task or reset variable that might have changed before error occurred in the try block */
// try {
//   let lastName = "Whittaker";
//   let fullName = firstName + " " + lastName;
// } catch (err) {
//   console.log(err);
// } finally {
//   console.log("In any case, this will be executed");
// }

// try {
//   let lastName = "Whittaker";
//   let fullName = firstName + " " + lastName;
// } catch (err) {
//   console.log("Name of the error:", err.name);
//   console.log("Error Message:", err.message);
// } finally {
//   console.log("Will run");
// }

/*throw: The throw statement allows us to create a custom error
    We can throw, any type of data type
    Use the throw statement to throw an exception */
// throw "Error2";
// throw new Error("Required");

// const throwErrorExample = () => {
//   let message;
//   let x = prompt("Enter a number: ");
//   try {
//     if (x == "") throw "empty";
//     if (isNaN(x)) throw "not a number";
//     x = Number(x);
//     if (x < 5) throw "too low";
//     if (x > 10) throw "too high";
//   } catch (err) {
//     console.log(err);
//   }
//   return x;
// };
// console.log(throwErrorExample());

//Error Types
/*ReferenceError: An illegal reference; thrown when a variable that has not be declared is used */
// try {
//   let firstName = "Asabeneh";
//   let fullName = firstName + " " + lastName;
//   console.log(fullName);
// } catch (err) {
//   console.log(err);
// }
/*SyntaxError */
// try {
//     console.log('Hello, World");
// } catch (err) {
//   console.log(err);
// }
/*TypeError */
// try {
//   let num = 10;
//   console.log(num.toLowerCase());
// } catch (err) {
//   console.log(err);
// }
