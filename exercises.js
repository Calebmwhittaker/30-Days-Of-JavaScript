//DAY 23 EXERCISES
//LEVEL 1
//1.
document.body.style.textAlign = "center";

const h1 = document.createElement("h1");
const h2 = document.createElement("h2");
const h3 = document.createElement("h3");

const input = document.createElement("input");
const button = document.createElement("button");

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
input.addEventListener("focus", removeNewRow);
document.body.appendChild(button);
button.textContent = "Generate Numbers";
button.style.backgroundColor = "green";
button.style.color = "white";
button.addEventListener("click", clickEventHandler);

const newRow = document.createElement("div");

const isPrime = (x) => {
  for (let i = 2; i <= 100; i++) {
    for (let j = 2; j <= i; j++) {
      if (i * j == x) return false;
    }
  }
  return true;
};

function clickEventHandler() {
  newRow.style.margin = "20px auto";
  newRow.style.justifyContent = "space-around";
  const value = input.value;
  const pattern = /[0-9]/;
  if (value.match(pattern)) {
    for (let i = 1; i <= value; i++) {
      const numberParagraph = document.createElement("p");
      const col = document.createElement("div");
      col.setAttribute("class", "col-2 m-1");
      col.style.alignContent = "center";
      col.appendChild(numberParagraph);
      numberParagraph.style.marginBottom = "0";
      if (i % 2 === 0) {
        col.style.backgroundColor = "red";
      } else {
        col.style.backgroundColor = "lightblue";
      }
      if (isPrime(i) && i !== 1) {
        col.style.backgroundColor = "yellow";
      }
      numberParagraph.textContent = i;
      newRow.appendChild(col);
    }
    newRow.setAttribute("class", "row");
    document.body.appendChild(newRow);
    button.removeEventListener("click", clickEventHandler);
  }
}

function removeNewRow() {
  newRow.remove();
  button.addEventListener("click", clickEventHandler);
}
