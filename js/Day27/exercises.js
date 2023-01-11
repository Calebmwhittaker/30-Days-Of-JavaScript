import { asabenehChallenges2020 } from "../../modules/challenge.js";
let { keywords, challenges, author } = asabenehChallenges2020;
let { titles } = author;
const div = document.querySelector("#titles-div");
const titleParagraph = document.createElement("p");
div.appendChild(titleParagraph);
titleParagraph.textContent = titles[0];
for (const title of titles) {
  const p = document.createElement("p");
  const joinedTitle = title.join("");
  p.textContent = joinedTitle;
  div.appendChild(p);
}
const materialsSection = document.querySelector("#materials");
for (let i = 0; i < 3; i++) {
  let { name } = challenges[i];
  const div = document.createElement("div");
  div.textContent = name;
  div.setAttribute("class", "card");
  materialsSection.appendChild(div);
}
const teachingSection = document.querySelector("#teaching");
const teachingDiv = document.createElement("div");
for (const keyword of keywords) {
  teachingDiv.textContent = `The technologies I teach ${keyword}`;
  teachingSection.appendChild(teachingDiv);
}
