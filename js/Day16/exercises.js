//DAY 16 EXERCISES
//LEVEL 1
const skills = ["HTML", "CSS", "JS", "React", "Node", "Python"];
let age = 250;
let isMarried = true;
const student = {
  firstName: "Asabeneh",
  lastName: "Yetayehe",
  age: 250,
  isMarried: true,
  skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
};
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`;
//1.
// const jsonSkills = JSON.stringify(skills, undefined, 4);
// console.log(jsonSkills);
//2.
// const jsonAge = JSON.stringify(age, undefined, 4);
// console.log(jsonAge);
//3.
// const jsonMarried = JSON.stringify(isMarried, undefined, 4);
// console.log(jsonMarried);
//4.
// const jsonStudent = JSON.stringify(student, undefined, 4);
// console.log(jsonStudent);

//LEVEL 2
//1.
// const jsonStudent = JSON.stringify(student, ["firstName", "skills"], 4);
// console.log(jsonStudent);

//LEVEL 3
//1.
// const txtObj = JSON.parse(txt);
// console.log(txtObj);
//2.
const txtObj = JSON.parse(txt);
console.log(txtObj);
let skillsArray = [];
for (const name in txtObj) {
  const person = txtObj[name];
  let { email, skills, age, isLoggedIn, points } = person;
  skillsArray.push([name, skills.length]);
}
console.log(skillsArray);
const sorted = skillsArray.sort((a, b) => b[1] - a[1]);
let [name, length] = sorted;
console.log(sorted);
console.log(sorted[0]);
