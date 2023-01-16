const h1 = document.querySelector("h1");
const h1Text = h1.textContent;
const split = h1Text.split("");

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
function createLetterArray() {
  let letterArray = [];
  for (const letter of split) {
    letterArray.push(letter);
  }
  return letterArray;
}
function differentColorH1() {
  document.body.style.backgroundColor = randomColor();
  h1.textContent = "";
  createLetterArray().map((letter) => {
    const span = document.createElement("span");
    span.textContent = letter;
    span.style.color = randomColor();
    h1.append(span);
  });
}

differentColorH1();

setInterval(differentColorH1, 2000);
