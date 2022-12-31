//Day 11 Exercises
//LEVEL 1
const constants = [2.72, 3.14, 9.81, 37, 100];
// const countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60,
};
const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTML"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20,
  },
];
import { arrayBuffer } from "stream/consumers";
//1.
// let [e, pi, gravity, melt, boil] = constants;
// console.log(e, pi, gravity, melt, boil);
//2.
// let [fin, est, swe, den, nor] = countries;
// console.log(fin, est, swe, den, nor);
//3.
// let { width, height, area, perimeter } = rectangle;
// console.log(width, height, area, perimeter);

//LEVEL 2
//1.
// for (const user of users) {
//   let { name, scores, skills, age } = user;
//   console.log(
//     `First Name: ${name},\nScores: ${scores},\nSkills: ${skills},\nAge: ${age}\n`
//   );
// }
//2.
// for (const user of users) {
//   let { name, scores, skills, age } = user;
//   if (skills.length < 2) {
//     console.log(`${name} has less than two skills`);
//   } else {
//     continue;
//   }
// }

//LEVEL 3
import { countries } from "../../modules/countries.js";
//1.
// for (const country of countries) {
//   let { name, capital, population, languages } = country;
//   console.log(
//     `Country Name: ${name},\nCapital: ${capital},\nPopulation: ${population},\nLanguages: ${languages}\n`
//   );
// }
//2.
// const student = ["David", ["HTML", "CSS", "JS", "React"], [98, 85, 90, 95]];
// let [name, skills, scores] = student;
// let [HTML, CSS, JS, React] = scores;
// console.log(name, skills, JS, React);
//3.
// const students = [
//   ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
//   ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
// ];
// const convertArrayToObject = (arr) => {
//   const array = [];
//   for (const element of arr) {
//     let [name, skills, scores] = element;
//     const obj = Object.assign({ name: name, skills: skills, scores: scores });
//     array.push(obj);
//   }
//   return array;
// };
// console.log(convertArrayToObject(students));
//4.
const student = {
  name: "David",
  age: 25,
  skills: {
    frontEnd: [
      { skill: "HTML", level: 10 },
      { skill: "CSS", level: 8 },
      { skill: "JS", level: 8 },
      { skill: "React", level: 9 },
    ],
    backEnd: [
      { skill: "Node", level: 7 },
      { skill: "GraphQL", level: 8 },
    ],
    dataBase: [{ skill: "MongoDB", level: 7.5 }],
    dataScience: ["Python", "R", "D3.js"],
  },
};
// const copiedStudent = { ...student };
// // console.log(copiedStudent);
// let { skills } = copiedStudent;
// let { frontEnd, backEnd, dataBase, dataScience } = skills;
// const bootstrap = { skill: "Bootstrap", level: 8 };
// const express = { skill: "Express", level: 9 };
// const dbSQL = { skill: "SQL", level: 8 };
// const dsSQL = "SQL";
// frontEnd.push(bootstrap);
// backEnd.push(express);
// dataBase.push(dbSQL);
// dataScience.push(dsSQL);
// console.log(copiedStudent);
// console.log(skills);
