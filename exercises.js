//DAY 17 EXERCISES
//LEVEL 1
//1.
// localStorage.setItem("firstName", "Caleb");
// localStorage.setItem("lastName", "Whittaker");
// localStorage.setItem("age", 22);
// localStorage.setItem("country", "USA");
// localStorage.setItem("city", "Bay City");
// console.log(localStorage);

//LEVEL 2
//1.
class Student {
  constructor(firstName, lastName, age, country, isEnrolled) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.isEnrolled = isEnrolled;
    this.skills = [];
  }
}
const student = new Student("Caleb", "Whitaker", 22, "USA", true);
localStorage.setItem("student", JSON.stringify(student));
console.log(localStorage);
