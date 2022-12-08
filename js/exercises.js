//DAY 8 EXERCISES
//LEVEL 1 EXERCISES
//1.
// const dog = {};
// //2.
// // console.log(dog);
// //3.
// const copyDog = Object.assign({}, dog);
// copyDog.legs = 4;
// copyDog.color = "gray";
// copyDog.age = 4;
// copyDog.bark = "woof woof";
// copyDog.name = "Aries";
// //4.
// // console.log(copyDog);
// //5.
// copyDog.breed = "Akita";
// copyDog.getDogInfo = function () {
//   return `${this.name} is ${this.age} years old. He is an ${this.breed}`;
// };
// console.log(copyDog.getDogInfo());

//LEVEL 2 EXERCISES
//1.
const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};
// const findMostSkills = () => {
//   const copyUsers = Object.assign({}, users);
//   let maxSkillsCount = 0;
//   let maxSkills = null;
//   let maxUser = null;
//   for (const skills in copyUsers) {
//     if (Object.hasOwnProperty.call(copyUsers, skills)) {
//       const user = copyUsers[skills];
//       if (
//         user.skills.length > maxSkillsCount ||
//         maxSkillsCount === skills.length
//       ) {
//         maxSkillsCount = user.skills.length;
//         maxSkills = user.skills;
//         maxUser = skills;
//       }
//     }
//   }
//   return `${maxUser} has ${maxSkillsCount} skills: ${maxSkills}`;
// };
// console.log(findMostSkills());
//2.
// const countLoggedInUsers = () => {
//   let count = 0;
//   const copyUsers = Object.assign({}, users);
//   for (const isLoggedIn in copyUsers) {
//     if (Object.hasOwnProperty.call(copyUsers, isLoggedIn)) {
//       const user = copyUsers[isLoggedIn];
//       if (user.isLoggedIn) {
//         count += 1;
//       }
//     }
//   }
//   return count;
// };
// console.log(countLoggedInUsers());
// const countPoints = () => {
//   let count = 0;
//   let countedUser = [];
//   let copyUsers = Object.assign({}, users);
//   for (const points in copyUsers) {
//     if (Object.hasOwnProperty.call(copyUsers, points)) {
//       const user = copyUsers[points];
//       if (user.points >= 50) {
//         count += 1;
//         countedUser.push(points);
//       }
//     }
//   }
//   let joinedUsers = countedUser.join(", ");
//   return `${count} users: ${joinedUsers} have 50 or more points`;
// };
// console.log(countPoints());
//3.
// const findMERNStackDeveloper = () => {
//   let MERNStackDevelopers = [];
//   const copyUsers = Object.assign({}, users);
//   for (const skills in copyUsers) {
//     if (Object.hasOwnProperty.call(copyUsers, skills)) {
//       const user = copyUsers[skills];
//       if (
//         user.skills.includes("MongoDB") &&
//         user.skills.includes("Express") &&
//         user.skills.includes("React") &&
//         user.skills.includes("Node")
//       ) {
//         MERNStackDevelopers.push(skills);
//       }
//     }
//   }
//   return MERNStackDevelopers;
// };
// console.log(findMERNStackDeveloper());
//4.
// const addUser = (name) => {
//   const copyUsers = Object.assign({}, users);
//   copyUsers[`${name}`] = Object.assign({
//     email: `${name}@gmail.com`,
//     skills: ["HTML", "CSS", "JavaScript"],
//     age: 22,
//     isLoggedIn: false,
//     points: 50,
//   });
//   return copyUsers;
// };
// console.log(addUser("Caleb"));
// 5.
// const findUserKeys = () => {
//   const copyUsers = Object.assign({}, users);
//   for (const user in copyUsers) {
//     const userKeys = Object.keys(copyUsers[`${user}`]);
//     console.log(userKeys);
//   }
//   return true;
// };
// console.log(findUserKeys());
//6.
// const findUserValues = () => {
//   const copyUsers = Object.assign({}, users);
//   for (const user in copyUsers) {
//     const userValues = Object.values(copyUsers[`${user}`]);
//     console.log(userValues);
//   }
//   return true;
// };
// console.log(findUserValues());
//7.
const countries = [
  {
    name: "Afghanistan",
    capital: "Kabul",
    languages: ["Pashto", "Uzbek", "Turkmen"],
    population: 27657145,
    flag: "https://restcountries.eu/data/afg.svg",
    currency: "Afghan afghani",
  },
  {
    name: "Åland Islands",
    capital: "Mariehamn",
    languages: ["Swedish"],
    population: 28875,
    flag: "https://restcountries.eu/data/ala.svg",
    currency: "Euro",
  },
  {
    name: "Albania",
    capital: "Tirana",
    languages: ["Albanian"],
    population: 2886026,
    flag: "https://restcountries.eu/data/alb.svg",
    currency: "Albanian lek",
  },
  {
    name: "Algeria",
    capital: "Algiers",
    languages: ["Arabic"],
    population: 40400000,
    flag: "https://restcountries.eu/data/dza.svg",
    currency: "Algerian dinar",
  },
  {
    name: "American Samoa",
    capital: "Pago Pago",
    languages: ["English", "Samoan"],
    population: 57100,
    flag: "https://restcountries.eu/data/asm.svg",
    currency: "United State Dollar",
  },
  {
    name: "Andorra",
    capital: "Andorra la Vella",
    languages: ["Catalan"],
    population: 78014,
    flag: "https://restcountries.eu/data/and.svg",
    currency: "Euro",
  },
  {
    name: "Angola",
    capital: "Luanda",
    languages: ["Portuguese"],
    population: 25868000,
    flag: "https://restcountries.eu/data/ago.svg",
    currency: "Angolan kwanza",
  },
  {
    name: "Anguilla",
    capital: "The Valley",
    languages: ["English"],
    population: 13452,
    flag: "https://restcountries.eu/data/aia.svg",
    currency: "East Caribbean dollar",
  },
  {
    name: "Antarctica",
    capital: "",
    languages: ["English", "Russian"],
    population: 1000,
    flag: "https://restcountries.eu/data/ata.svg",
    currency: "Australian dollar",
  },
];
