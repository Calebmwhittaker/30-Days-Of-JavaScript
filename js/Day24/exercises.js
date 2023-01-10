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
  { planet: "Mercury", gravity: 3.7 },
  { planet: "Venus", gravity: 8.87 },
  { planet: "Earth", gravity: 9.81 },
  { planet: "Mars", gravity: 3.72 },
  { planet: "Jupiter", gravity: 24.79 },
  { planet: "Saturn", gravity: 10.44 },
  { planet: "Uranus", gravity: 8.87 },
  { planet: "Neptune", gravity: 11.15 },
  { planet: "Pluto", gravity: 0.62 },
];
for (const pair of solarSystemArray) {
  let { planet, gravity } = pair;
  const option = document.createElement("option");
  option.setAttribute("value", gravity);
  option.textContent = planet;
  option.setAttribute("name", planet);
  select.appendChild(option);
}
const button = document.createElement("button");
button.addEventListener("click", function e() {
  const div = document.createElement("div");
  div.style.margin = "40px 0";
  const img = document.createElement("img");
  img.setAttribute(
    "src",
    `./js/Day24/images/${solarSystemArray[select.selectedIndex].planet}.png`
  );
  img.style.maxWidth = "500px";
  div.appendChild(img);
  document.body.appendChild(div);
  const p = document.createElement("p");
  div.after(p);
  select.addEventListener("focusout", function focus() {
    img.removeAttribute("src");
    button.addEventListener("click", e);
    div.remove();
    img.remove();
    p.remove();
  });
  input.addEventListener("change", function change() {
    p.remove();
    div.remove();
    img.remove();
    button.addEventListener("click", e);
  });
  button.removeEventListener("click", e);
  p.textContent = `${
    input.value * solarSystemArray[select.selectedIndex].gravity
  } N`;
  p.style.color = "white";
});

button.textContent = "Calculate Weight";
document.body.appendChild(h1);
document.body.appendChild(input);
document.body.appendChild(select);
document.body.appendChild(button);
