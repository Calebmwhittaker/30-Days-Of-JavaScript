//DAY 22 EXERCISES
//LEVEL 1

//1.
// const isPrime = (x) => {
//   for (let i = 2; i <= 100; i++) {
//     for (let j = 2; j <= i; j++) {
//       if (i * j == x) return false;
//     }
//   }
//   return true;
// };
// const div = document.querySelector(".row");
// for (let s = 1; s < 101; s++) {
//   const p = document.createElement("p");
//   p.textContent = s;
//   p.style.textAlign = "center";
//   p.setAttribute("class", "col-2 mx-1");
//   p.style.height = "30px";
//   if (s % 2 === 0) {
//     p.style.backgroundColor = "lightgreen";
//   } else {
//     p.style.backgroundColor = "yellow";
//   }
//   if (isPrime(s) && s != 1) {
//     p.style.backgroundColor = "red";
//   }

//   div.appendChild(p);
// }

//LEVEL 2
// const div = document.querySelector(".row");
// const size = document.querySelector(".size");
// const fetchData = async () => {
//   const response = await fetch("https://restcountries.com/v3.1/all");
//   const countries = await response.json();
//   const json = JSON.stringify(countries, undefined, 4);
//   const obj = JSON.parse(json);
//   let names = [];
//   for (const pair of obj) {
//     let { name } = pair;
//     let { common } = name;
//     names.push(common);
//   }
//   const sortedNames = names.sort();
//   console.log(sortedNames);
//   for (const name of names) {
//     const countryName = document.createElement("p");
//     const countryDiv = document.createElement("div");
//     countryDiv.setAttribute(
//       "class",
//       "country-div col-2 mx-1 my-1 text-center card justify-content-center"
//     );
//     countryName.setAttribute("class", "country-name my-0");
//     countryName.textContent = name;
//     countryDiv.style.height = "110px";
//     countryDiv.style.backgroundColor = "lightgray";
//     countryDiv.appendChild(countryName);
//     div.appendChild(countryDiv);
//   }
//   size.textContent = `Total Number of Countries: ${names.length}`;
// };
// fetchData();

//LEVEL 3
import { asabenehChallenges2020 } from "./modules/challenge.js";
//1.
let {
  description,
  challengeTitle,
  challengeSubtitle,
  challengeYear,
  keywords,
  author,
  challenges,
} = asabenehChallenges2020;

const h2 = document.createElement("h2");
const h2Text = (h2.textContent = "Caleb Whittaker Challenges in ");
const p = document.createElement("p");
const pText = (p.textContent = "30 Days of JavaScript Challenge");
const date = document.createElement("p");
const dateText = (date.textContent = `${getTime()}`);
const span = document.createElement("span");
span.textContent = "2023";
h2.appendChild(span);
span.style.color = `${randomColor()}`;
date.style.backgroundColor = `${randomColor()}`;
span.style.fontSize = "45px";

function randomColor() {
  let randomHexaArray = [];
  for (let i = 0; i < 6; i++) {
    const choice = Math.floor(Math.random() * 2);
    if (choice === 0) {
      const pattern = "abcdef";
      randomHexaArray.push(pattern[Math.floor(Math.random() * pattern.length)]);
    } else {
      randomHexaArray.push(Math.floor(Math.random() * 10));
    }
  }
  const string = randomHexaArray.join("");
  return `#${string}`;
}

function getTime() {
  const now = new Date();
  let month = now.getMonth() + 1;
  const second = now.getSeconds();
  const hours = now.getHours();
  const day = now.getDate();
  const year = now.getFullYear();
  const minutes = now.getMinutes();
  switch (month) {
    case 1:
      month = "January";
      break;
    case 2:
      month = "February";
      break;
    case 3:
      month = "March";
      break;
    case 4:
      month = "April";
      break;
    case 5:
      month = "May";
      break;
    case 6:
      month = "June";
      break;
    case 7:
      month = "July";
      break;
    case 8:
      month = "August";
      break;
    case 9:
      month = "September";
      break;
    case 10:
      month = "October";
      break;
    case 11:
      month = "November";
      break;
    case 12:
      month = "December";
      break;

    default:
      break;
  }
  return `${month} ${day}, ${year} ${hours}:${minutes}:${second}`;
}

document.body.appendChild(h2);
document.body.appendChild(p);
document.body.appendChild(date);
h2.style.textAlign = "center";
p.style.textAlign = "center";
date.style.textAlign = "center";
setInterval(() => {
  date.style.backgroundColor = `${randomColor()}`;
  span.style.color = `${randomColor()}`;
  date.textContent = `${getTime()}`;
}, 1000);

const div = document.createElement("div");
for (const challenge of challenges) {
  const separateDiv = document.createElement("div");
  const details = document.createElement("details");
  let { name, topics, status } = challenge;
  const p = document.createElement("p");
  const statusParagraph = document.createElement("p");
  const summary = document.createElement("summary");
  const ul = document.createElement("ul");
  for (const topic of topics) {
    const li = document.createElement("li");
    li.textContent = `${topic}`;
    ul.appendChild(li);
  }
  const skillName = name.slice(11);
  statusParagraph.textContent = `${status}`;
  p.textContent = `${name}`;
  switch (status) {
    case "Done":
      separateDiv.style.backgroundColor = "lightgreen";
      break;
    case "Ongoing":
      separateDiv.style.backgroundColor = "orange";
      break;
    case "Coming":
      separateDiv.style.backgroundColor = "pink";

    default:
      break;
  }
  summary.textContent = `${skillName}`;
  details.appendChild(ul);
  details.appendChild(summary);
  separateDiv.appendChild(p);
  separateDiv.appendChild(details);
  separateDiv.appendChild(statusParagraph);
  separateDiv.style.display = "flex";
  separateDiv.style.justifyContent = "space-around";
  div.appendChild(separateDiv);
}
document.body.appendChild(div);

const h3 = document.createElement("h3");
document.body.appendChild(h3);
h3.textContent = "Caleb Whittaker";
h3.style.textAlign = "center";
const iconDiv = document.createElement("div");
const newDiv = document.createElement("div");
let { socialLinks, titles, bio, skills, qualifications } = author;
for (const socialLink of socialLinks) {
  let { fontawesomeIcon, url } = socialLink;
  const icon = document.createElement("div");
  icon.innerHTML = fontawesomeIcon;
  iconDiv.appendChild(icon);
  iconDiv.setAttribute("class", "icon-div");
}
iconDiv.style.display = "flex";
iconDiv.style.width = "25%";
iconDiv.style.margin = "0 auto";
iconDiv.style.justifyContent = "space-around";
newDiv.appendChild(iconDiv);
document.body.appendChild(newDiv);

const bioParagraph = document.createElement("p");
bioParagraph.textContent = `${bio}`;
bioParagraph.style.textAlign = "center";
document.body.appendChild(bioParagraph);

const infoDiv = document.createElement("div");
const skillsDiv = document.createElement("div");
const titlesDiv = document.createElement("div");
const qualificationsDiv = document.createElement("div");

for (const title of titles) {
  const skillsParagraph = document.createElement("p");
  const skillsEmoji = document.createElement("p");
  skillsParagraph.textContent = `${title[0]} ${title[1]}`;
  skillsDiv.appendChild(skillsEmoji);
  skillsDiv.appendChild(skillsParagraph);
}

for (const skill of skills) {
  const skillP = document.createElement("p");
  const icon = document.createElement("i");
  const iconSkillsDiv = document.createElement("div");
  icon.setAttribute("class", "fas fa-check-square");
  skillP.textContent = `${skill}`;
  skillP.style.marginTop = "16px";
  skillP.style.marginLeft = "5px";
  iconSkillsDiv.appendChild(icon);
  iconSkillsDiv.appendChild(skillP);
  titlesDiv.appendChild(iconSkillsDiv);
  iconSkillsDiv.style.display = "flex";
  iconSkillsDiv.style.alignItems = "center";
  iconSkillsDiv.style.justifyContent = "left";
  icon.style.color = "green";
}

for (const qualification of qualifications) {
  const qualificationParagraph = document.createElement("p");
  qualificationParagraph.textContent = `${qualification}`;
  qualificationsDiv.appendChild(qualificationParagraph);
}
infoDiv.appendChild(skillsDiv);
infoDiv.appendChild(titlesDiv);
infoDiv.appendChild(qualificationsDiv);
infoDiv.style.display = "flex";
infoDiv.style.justifyContent = "space-around";
document.body.appendChild(infoDiv);

const keywordsSection = document.createElement("h4");
keywordsSection.textContent = "Keywords";
document.body.appendChild(keywordsSection);
const keywordsDiv = document.createElement("div");
let keywordArray = [];
for (const item of keywords) {
  keywordArray.push(`#${item}`);
}
for (const item of keywordArray) {
  const keywordParagraph = document.createElement("p");
  keywordParagraph.textContent = `${item}`;
  keywordParagraph.style.backgroundColor = `${randomColor()}`;
  keywordParagraph.style.width = "fit-content";
  keywordParagraph.style.display = "inline-block";
  keywordParagraph.style.padding = "3px";
  keywordParagraph.style.margin = "5px";
  keywordParagraph.style.borderRadius = "15px";
  keywordsDiv.appendChild(keywordParagraph);
}
keywordsDiv.style.display = "inline-block";
document.body.appendChild(keywordsDiv);
