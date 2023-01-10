//DAY 24 EXERCISES
//LEVEL 1
//1.
document.body.style.backgroundColor = "black";
document.body.style.textAlign = "center";
const h1 = document.createElement("h1");
h1.textContent = "Calculate the weight of an object on a planet";
h1.style.color = "white";

const input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "mass");
input.setAttribute("placeholder", "Mass in Kilograms");
const select = document.createElement("select");
let solarSystemArray = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
  "Pluto",
];
for (let i = 1; i <= solarSystemArray.length; i++) {
  const option = document.createElement("option");
  option.setAttribute("value", i);
  option.textContent = solarSystemArray[i - 1];
  select.appendChild(option);
  console.log(option);
}
const button = document.createElement("button");
button.textContent = "Calculate Weight";
document.body.appendChild(h1);
document.body.appendChild(input);
document.body.appendChild(select);
document.body.appendChild(button);

const div = document.createElement("div");
switch (select.children) {
  case "Earth":
    console.log("earth");
    break;
  default:
    break;
}
