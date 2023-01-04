// //DAY 17 EXERCISES
// //LEVEL 1
// //1.
// // localStorage.setItem("firstName", "Caleb");
// // localStorage.setItem("lastName", "Whittaker");
// // localStorage.setItem("age", 22);
// // localStorage.setItem("country", "USA");
// // localStorage.setItem("city", "Bay City");
// // console.log(localStorage);

// //LEVEL 2
// //1.
// // class Student {
// //   constructor(firstName, lastName, age, country, isEnrolled) {
// //     this.firstName = firstName;
// //     this.lastName = lastName;
// //     this.age = age;
// //     this.country = country;
// //     this.isEnrolled = isEnrolled;
// //     this.skills = [];
// //   }
// // }
// // const student = new Student("Caleb", "Whitaker", 22, "USA", true);
// // const b = JSON.stringify(student);
// // localStorage.setItem("student", b);

// // console.log(localStorage);
// // document.write(b);

// //LEVEL 3
// class PersonAccount {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.incomes = [{ job: "Lab Technician", income: 27000 }];
//     this.expenses = [
//       { expense: "Gym", amount: 10 },
//       { expense: "Rent", amount: 1048 },
//       { expense: "Gas", amount: 180 },
//       { expense: "Groceries", amount: 100 },
//       { expense: "Electric", amount: 50 },
//       { expense: "Internet", amount: 80 },
//       { expense: "Insurance", amount: 220 },
//       { expense: "Audible", amount: 25 },
//       { expense: "Spotify", amount: 10 },
//       { expense: "Storage", amount: 100 },
//     ];
//   }
//   totalIncome() {
//     let incomes = [];
//     for (const { job, income } of this.incomes) {
//       incomes.push(income);
//     }
//     const total = incomes.reduce((acc, cur) => acc + cur);
//     return total;
//   }
//   totalExpense() {
//     let expenses = [];
//     for (const { expense, amount } of this.expenses) {
//       expenses.push(amount);
//     }
//     const total = expenses.reduce((acc, cur) => acc + cur);
//     return total * 12;
//   }
//   set addIncome(income) {
//     this.incomes.push(income);
//   }
// }
// const person = new PersonAccount("Caleb", "Whittaker");
// console.log(person.totalIncome());
// console.log(person.totalExpense());
// console.log((person.addIncome = { job: "Bank", income: 200 }));
// localStorage.setItem("Person Account", JSON.stringify(person));
// console.log(localStorage);
// localStorage.clear();
// console.log(localStorage);
