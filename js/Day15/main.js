// //DAY 15 LESSON
// //Classes
// /*JavaScript is an object-oriented language */
// /*Everything in JS is an object */
// /*A Class is like an object constructor or a 'blueprint' for creating objects */
// /*We instantiate a class to create an object */
// /*The class defines attributes and the behavior of the object while the object represents the class */
// /*Once we create a classwe can create an object from it whenever and wherever we want */
// /*Creating an object from a class is called class instantation */
// /*This is better than object literals because we only have to write the code once and it can be reused */

// //Defining Classes
// /*To define a class, we need the keyword 'class' , the name of the class in camelCase and block code*/

// //Class Instantiation
// /*Creating an object from a class */
// /*We need the keyword 'new' and we have to call the name of the class after the word 'new' */
// // class Person {
// //   //code goes here
// // }
// // const person = new Person();
// // console.log(person);

// //Class Constructor
// /*The constructor is a built-in function which allows you to create a blueprint for our object */
// /*The constructor function starts with a keyword constructor followed by a parenthesis */
// /*Inside the parenthesis, we pass the properties of the object as parameters */
// /*We use the 'this' keyword to attach the constructor parameters with the class */

// // class Person {
// //   constructor(firstName, lastName) {
// //     this.firstName = firstName;
// //     this.lastName = lastName;
// //     // console.log(this); //Checks the output from here
// //   }
// // }

// // const person1 = new Person("Caleb", "Whittaker");
// // console.log(person1);
// // const person2 = new Person("Jordann", "Whittaker");
// // console.log(person2);
// // const person3 = new Person("Lainey", "Whittaker");
// // console.log(person3);

// // class Person {
// //   constructor(firstName, lastName, age, country, city) {
// //     this.firstName = firstName;
// //     this.lastName = lastName;
// //     this.age = age;
// //     this.country = country;
// //     this.city = city;
// //   }
// // }
// // const person = new Person("Caleb", "Whittaker", 22, "USA", "Bay City");
// // console.log(person);

// //Default Values with Constructors
// // class Person {
// //   constructor(
// //     firstName = "Caleb",
// //     lastName = "Whittaker",
// //     age = 22,
// //     country = "USA",
// //     city = "Bay City"
// //   ) {
// //     this.firstName = firstName;
// //     this.lastName = lastName;
// //     this.age = age;
// //     this.country = country;
// //     this.city = city;
// //   }
// // }
// // const person = new Person();
// // console.log(person);
// // const person2 = new Person("Heidi");
// // console.log(person2);

// //Class Methods
// // class Person {
// //   constructor(firstName, lastName, age, country, city) {
// //     this.firstName = firstName;
// //     this.lastName = lastName;
// //     this.age = age;
// //     this.country = country;
// //     this.city = city;
// //   }
// //   getFullName() { //Creates a method that can be called on the Person
// //     const fullName = this.firstName + " " + this.lastName;
// //     return fullName;
// //   }
// // }

// // const person1 = new Person("Caleb", "Whittaker", 22, "USA", "Bay City");
// // console.log(person1.getFullName());

// //Properties with Initial Value
// // class Person {
// //   constructor(firstName, lastName, age, country, city) {
// //     this.firstName = firstName;
// //     this.lastName = lastName;
// //     this.age = age;
// //     this.country = country;
// //     this.city = city;
// //     this.score = 0;
// //     this.skills = [];
// //   }
// //   getFullName() {
// //     const fullName = this.firstName + " " + this.lastName;
// //     return fullName;
// //   }
// // }

// // const person1 = new Person("Caleb", "Whittaker", 22, "USA", "Bay City");
// // console.log(person1);

// //Getter
// /*The get method allows us to access values from the Class object */
// /*We write a get method using the 'get' keyword followed by a function */
// // class Person {
// //   constructor(firstName, lastName, age, country, city) {
// //     this.firstName = firstName;
// //     this.lastName = lastName;
// //     this.age = age;
// //     this.country = country;
// //     this.city = city;
// //     this.score = 0;
// //     this.skills = [];
// //   }
// //   getFullName() {
// //     const fullName = this.firstName + " " + this.lastName;
// //     return fullName;
// //   }
// //   get getScore() {
// //     return this.score;
// //   }
// //   get getSkills() {
// //     return this.skills;
// //   }
// // }

// // const person1 = new Person("Asabeneh", "Yetayeh", 250, "Finland", "Helsinki");
// // console.log(person1.getFullName());
// // console.log(person1.getScore); //No parameter; therefore, no arguments needed
// // console.log(person1.getSkills); //No parameter; therefore, no arguments needed

// //Setter
// /*The setter method allows us to modify the value of certain properties */
// /*We write the setter method by using the keyword 'set' followed by a function */
// // class Person {
// //   constructor(firstName, lastName, age, country, city) {
// //     this.firstName = firstName;
// //     this.lastName = lastName;
// //     this.age = age;
// //     this.country = country;
// //     this.city = city;
// //     this.score = 0;
// //     this.skills = [];
// //   }
// //   getFullName() {
// //     const fullName = this.firstName + " " + this.lastName;
// //     return fullName;
// //   }
// //   get getScore() {
// //     return this.score;
// //   }
// //   get getSkills() {
// //     return this.skills;
// //   }
// //   set setScore(score) {
// //     this.score += score;
// //   }
// //   set setSkill(skill) {
// //     this.skills.push(skill);
// //   }
// // }

// // const person = new Person("Caleb", "Whittaker", 22, "USA", "Bay City");
// // console.log(person.getScore);
// // person.setScore = 1;
// // console.log(person.getScore);
// // person.setSkill = "HTML";
// // console.log(person.getSkills);

// //Static Method
// /*The static keyword defines a static method for a class */
// /*Not called on instances of the class, instead they are called on the class itself */
// /*Example: Date.now(), the 'now' method is called directly from the class */
// class Person {
//   constructor(firstName, lastName, age, country, city) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.country = country;
//     this.city = city;
//     this.score = 0;
//     this.skills = [];
//   }
//   getFullName() {
//     const fullName = this.firstName + " " + this.lastName;
//     return fullName;
//   }
//   get getScore() {
//     return this.score;
//   }
//   get getSkills() {
//     return this.skills;
//   }
//   set setScore(score) {
//     this.score = score;
//   }
//   set setSkills(skill) {
//     this.skills.push(skill);
//   }
//   getPersonInfo() {
//     let fullName = this.getFullName();
//     let skills =
//       this.skills.length > 0 &&
//       this.skills.slice(0, this.skills.length - 1).join(", ") +
//         ` and ${this.skills[this.skills.length - 1]}`;
//     let formattedSkills = skills ? `He knows ${skills}` : "";
//     let info = `${fullName} is ${this.age}. He lives in ${this.city}, ${this.country}. ${formattedSkills}`;
//     return info;
//   }
//   static favoriteSkill() {
//     const skills = ["HTML", "CSS", "JS", "React", "Python", "Node"];
//     const index = Math.floor(Math.random() * skills.length);
//     return skills[index];
//   }
//   static showDateTime() {
//     let now = new Date();
//     let year = now.getFullYear();
//     let month = now.getMonth() + 1;
//     let date = now.getDate();
//     let hours = now.getHours();
//     let minutes = now.getMinutes();
//     if (hours < 10) {
//       hours = "0" + hours;
//     }
//     if (minutes < 10) {
//       minutes = "0" + minutes;
//     }
//     let monthDateYear = month + "/" + date + "/" + year;
//     let time = hours + ":" + minutes;
//     let fullTime = monthDateYear + " " + time;
//     return fullTime;
//   }
// }

// // console.log(Person.favoriteSkill());
// // console.log(Person.showDateTime());
// /*Static methods can be used as utility functions */

// //Inheritance
// /*Using inheritance, we can access all the properties and methods of the parent class */
// /*Reduces repitition of code */
// /*You can create children from your parent class */
// // class ChildClassName extends ParentClassName {
// //     //code goes here
// // }
// // class Student extends Person {
// //   saySomething() {
// //     return "I am a child of the Person class";
// //   }
// // }
// // const student = new Student("Caleb", "Whittaker", 22, "USA", "Bay City");
// // console.log(student.saySomething());
// // console.log(student.getFullName());
// // console.log(student.getPersonInfo());
// // console.log(student.getScore);
// // console.log((student.setScore = 1));
// // console.log(student.getScore);

// //Overriding Methods
// /*We can customize the methods and we can add extra properties with the constructor function */
// /*Inside the constructor function, we call the super() function to access all the properties from the parent class */
// /*If the same method name is used in the child class, the parent method will be overridden */
// class Student extends Person {
//   constructor(firstName, lastName, age, country, city, gender) {
//     super(firstName, lastName, age, country, city);
//     this.gender = gender;
//   }
//   saySomething() {
//     return "I am a child of the Person Class";
//   }
//   getPersonInfo() {
//     let fullName = this.getFullName();
//     let skills =
//       this.skills.length > 0 &&
//       this.skills.slice(0, this.skills.length - 1).join(", ") +
//         ` and ${this.skills[this.skills.length - 1]}`;

//     let formattedSkills = skills ? `He knows ${skills}` : "";
//     let pronoun = this.gender == "Male" ? "He" : "She";
//     let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`;
//     return info;
//   }
// }

// const student = new Student(
//   "Caleb",
//   "Whittaker",
//   22,
//   "USA",
//   "Bay City",
//   "Male"
// );
// console.log(student);
