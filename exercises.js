//DAY 23 EXERCISES
//LEVEL 1
//1.
const h1 = document.createElement("h1");
const h2 = document.createElement("h2");
const h3 = document.createElement("h3");

const input = document.createElement("input");
const button = document.createElement("button");

document.body.style.textAlign = "center";

document.body.appendChild(h1);
h1.textContent = "Number Generator";
document.body.appendChild(h2);
h2.textContent = "30DaysOfJavaScript Day 23";
document.body.appendChild(h3);
h3.textContent = "Author: Caleb Whittaker";

document.body.appendChild(input);
input.setAttribute("type", "text");
input.setAttribute("id", "number");
input.setAttribute("placeholder", "Type in a number");
document.body.appendChild(button);
button.textContent = "Generate Numbers";

const row = document.createElement("div");
row.style.margin = "20px auto";

button.addEventListener(
  "click",
  () => {
    const value = input.value;
    const pattern = /[0-9]/;
    if (value.match(pattern)) {
      for (let i = 1; i <= value; i++) {
        const numberParagraph = document.createElement("p");
        const col = document.createElement("div");
        col.setAttribute("class", "col-2");
        col.appendChild(numberParagraph);
        numberParagraph.textContent = i;
        row.appendChild(col);
      }
      row.setAttribute("class", "row");
      document.body.appendChild(row);
    }
  },
  { once: true }
);
