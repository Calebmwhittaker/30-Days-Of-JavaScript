// //DAY 15 EXERCISES
// //LEVEL 1
// //1.
// class Animal {
//   constructor(animalName, age, color, legs) {
//     this.animalName = animalName;
//     this.age = age;
//     this.color = color;
//     this.legs = legs;
//   }
//   getInfo() {
//     return `The animal's name is ${this.animalName}. ${this.animalName} is ${this.age} years old. ${this.animalName} is ${this.color}. ${this.animalName} has ${this.legs} legs`;
//   }
// }
// // const dog = new Animal("Aries", 4, "Gray", 4);
// // console.log(dog.getInfo());
// /*Rememeber to use the 'this' keyword when using the properties from the constructor function */
// //2.
// // class Dog extends Animal {
// //   constructor(animalName, age, color, legs, breed) {
// //     super(animalName, age, color, legs);
// //     this.breed = breed;
// //   }
// //   getInfo() {
// //     return `The animal's name is ${this.animalName}. ${this.animalName} is ${this.age} years old. ${this.animalName} is ${this.color}. ${this.animalName} has ${this.legs} legs. ${this.animalName} is a ${this.breed}`;
// //   }
// // }
// // const dog = new Dog("Aries", 4, "Gray", 4, "Akita");
// // console.log(dog.getInfo());

// //LEVEL 3
// // class Statistics {
// //   constructor(numbers) {
// //     this.numbers = numbers;
// //   }
// //   count() {
// //     return this.numbers.length;
// //   }
// //   sum() {
// //     return this.numbers.reduce((acc, cur) => acc + cur);
// //   }
// //   min() {
// //     return Math.min(...this.numbers);
// //   }
// //   max() {
// //     return Math.max(...this.numbers);
// //   }
// //   range() {
// //     return this.max() - this.min();
// //   }
// //   mean() {
// //     return Math.ceil(this.sum() / this.count());
// //   }
// //   median() {
// //     let sorted = this.numbers.sort((a, b) => a - b);
// //     let calculation = sorted[Math.ceil((this.count() - 1) / 2)];
// //     if (this.count() % 2 !== 0) {
// //       return calculation;
// //     } else {
// //       return Math.round((calculation - 1 + calculation) / 2);
// //     }
// //   }
// //   mode() {
// //     const numMap = new Map();
// //     this.numbers.map((number) => {
// //       if (!numMap.has(number)) {
// //         numMap.set(number, 1);
// //       } else {
// //         numMap.set(number, numMap.get(number) + 1);
// //       }
// //     });
// //     let sortedMap = [...numMap].sort((a, b) => b[1] - a[1]);
// //     let [mode, count] = sortedMap[0];
// //     return `{mode: ${mode}, count: ${count}}`;
// //   }
// //   variance() {
// //     let std = [...this.numbers]
// //       .map((num) => (num - this.mean()) ** 2 / (this.count() - 1))
// //       .reduce((acc, cur) => acc + cur);
// //     return std;
// //   }
// //   stdDeviation() {
// //     return Math.sqrt(this.variance());
// //   }
// //   frequencyDistribution() {}
// //   describe() {
// //     return `Count: ${this.count()}\nSum: ${this.sum()}`;
// //   }
// // }
// // const ages = [
// //   31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
// //   31, 34, 24, 33, 29, 26,
// // ];
// // const stats = new Statistics(ages);
// // console.log(stats.count());
// // console.log(stats.sum());
// // console.log(stats.min());
// // console.log(stats.max());
// // console.log(stats.range());
// // console.log(stats.mean());
// // console.log(stats.median());
// // console.log(stats.mode());
// // console.log(stats.variance());
// // console.log(stats.stdDeviation());
// // console.log(stats.describe());
// //2.
// class PersonAccount {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.income = [{ job: "LabTech", income: 27000 }];
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
//     return this.income;
//   }
//   totalExpense() {
//     let total = [];
//     for (const expenses of this.expenses) {
//       let { expense, amount } = expenses;
//       total.push(amount);
//     }
//     total = total.reduce((acc, cur) => acc + cur);
//     return `Total Expenses: ${total}`;
//   }
//   set addIncome(income) {
//     this.income.push(income);
//     return this.income;
//   }
//   set addExpense(expense) {
//     this.expenses.push(expense);
//   }
// }
// const person = new PersonAccount("Caleb", "Whittaker");
// console.log(person);
// console.log(person.totalIncome());
// console.log(person.totalExpense());
// console.log((person.addIncome = { Bank: 20 }));
// console.log(person.totalIncome());
// console.log((person.addExpense = { expense: "Cable", amount: 40 }));
// console.log(person.totalExpense());
