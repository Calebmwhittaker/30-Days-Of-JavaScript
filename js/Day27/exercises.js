import { asabenehChallenges2020 } from "../../modules/challenge.js";
function randomColor() {
  let colorArray = [];
  for (let i = 0; i < 6; i++) {
    let choice = Math.floor(Math.random() * 2);
    if (choice === 0) {
      const letters = "abcdef";
      const letter = letters[Math.floor(Math.random() * letters.length)];
      colorArray.push(letter);
    } else {
      let number = Math.floor(Math.random() * 10);
      colorArray.push(number);
    }
  }
  const joinedArray = colorArray.join("");
  return `#${joinedArray}`;
}
console.log(randomColor());
let { keywords, challenges, author } = asabenehChallenges2020;
let { titles } = author;
const newTitles = titles.map((title) => title.join(" "));
const div = document.querySelector("#titles-div");
let skillsCounter = 0;
let wordCounter = 0;
let wordLength = keywords.length - 1;
let titlesLength = newTitles.length - 1;
div.textContent = newTitles[0];

function skills() {
  if (skillsCounter === titlesLength) {
    skillsCounter = 0;
    div.textContent = newTitles[skillsCounter];
  } else {
    skillsCounter++;
    div.textContent = newTitles[skillsCounter];
  }
}
setInterval(skills, 2500);

const materialsSection = document.querySelector("#materials");
for (let i = 0; i < 3; i++) {
  let { name } = challenges[i];
  const div = document.createElement("div");
  div.textContent = name;
  div.setAttribute("class", "card");
  div.style.height = "180px";
  div.style.width = "180px";
  div.style.alignItems = "center";
  div.style.justifyContent = "center";
  materialsSection.appendChild(div);
}
const teachingSection = document.querySelector("#teaching");
const teachingParagraph = document.createElement("p");
teachingParagraph.style.display = "inline";
const keywordParagraph = document.createElement("p");
keywordParagraph.setAttribute("id", "keyword");
keywordParagraph.textContent = `${keywords[wordCounter]}`;
keywordParagraph.style.display = "inline";
keywordParagraph.style.fontSize = "40px";
teachingParagraph.textContent = `The technologies I teach `;
teachingParagraph.appendChild(keywordParagraph);
keywordParagraph.style.color = `${randomColor()}`;

function keywordsFunc() {
  if (wordCounter === wordLength) {
    wordCounter = 0;
  } else {
    wordCounter++;
    keywordParagraph.textContent = `${keywords[wordCounter]}`;
    keywordParagraph.style.color = `${randomColor()}`;
  }
}
setInterval(keywordsFunc, 2500);
teachingSection.appendChild(teachingParagraph);
