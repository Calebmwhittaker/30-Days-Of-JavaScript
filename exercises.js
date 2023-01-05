//DAY 19 EXERCISES
//LEVEL 1
//1.
// function Statistics() {
//   let count = 0;
//   function plus() {
//     count++;
//     return count;
//   }
//   return plus; //Do NOT make this a method
// }
// const stats = Statistics();
// console.log(stats()); /*Write these as methods or functions */
// console.log(stats());
// console.log(stats());

//LEVEL 2
//1.
// function Statistics() {
//   let count = 0;
//   function plus() {
//     count += 1;
//     return count;
//   }
//   function minus() {
//     count -= 1;
//     return count;
//   }
//   function squareRoot() {
//     count = Math.sqrt(count);
//     return count;
//   }
//   return {
//     plus: plus(),
//     minus: minus(),
//     squareRoot: squareRoot(),
//   };
// }
// const innerFunc = Statistics();
// console.log(innerFunc);
//LEVEL 3
//1.
// function personAccount(firstName, lastName) {
//   let incomes = [{ source: "Lab Technician", income: 27000 }];
//   let expenses = [{ expense: "Gym", amount: 10 }];
//   function fullName() {
//     return `Full Name: ${firstName} ${lastName}`;
//   }
//   function totalIncome() {
//     let incomeArray = [];
//     for (const pair of incomes) {
//       let { source, income } = pair;
//       incomeArray.push(income);
//     }
//     const total = incomeArray.reduce((acc, cur) => acc + cur);
//     return `Total Income: ${total}`;
//   }
//   function totalExpense() {
//     let expenseArray = [];
//     for (const pair of expenses) {
//       let { expense, amount } = pair;
//       expenseArray.push(amount);
//     }
//     const total = expenseArray.reduce((acc, cur) => acc + cur);
//     return `Total Expenses: ${total}`;
//   }
//   function addIncome(source, income) {
//     incomes.push({ source: source, income: income });
//     return incomes;
//   }
//   function addExpense(expense, amount) {
//     expenses.push({ expense: expense, amount: amount });
//     return expenses;
//   }
//   return {
//     fullName: fullName(),
//     totalIncome: totalIncome(),
//     totalExpense: totalExpense(),
//     addIncome: addIncome,
//     addExpense: addExpense,
//   };
// }
// const person = personAccount("Caleb", "Whittaker");
// console.log(person.fullName);
// console.log(person.totalIncome);
// console.log(person.totalExpense);
// console.log(person.addIncome("Bank", 200));
// console.log(person.addExpense("Baby", 80000));
