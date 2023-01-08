//DAY 21 EXERCISES
//LEVEL 1
//1.
// const paragraph = document.querySelector("p");
// console.log(paragraph);
//2.
// const paragraphs = document.querySelectorAll("p");
// console.log(paragraphs);
// const ids = paragraphs.forEach((p) => {
//   console.log(p.getAttribute("id"));
// });
// console.log(ids);
//3.
// const paragraphs = document.querySelectorAll("p");
// console.log(paragraphs);
//4.
// const paragraphs = document.querySelectorAll("p");
// paragraphs.forEach((p) => console.log(p.textContent));
//5.
// const paragraphs = document.querySelectorAll("p");
// const four = (paragraphs[3].textContent = "Fourth Paragraph");
//6.
// const paragraphs = document.querySelectorAll("p");
// // paragraphs.forEach((p, i) => {
// //   p.setAttribute("id", `${i}`);
// //   p.setAttribute("class", "paragraph");
// // });
// // console.log(paragraphs);
// paragraphs[1].id = "second-title";
// paragraphs[2].className = "third";
// console.log(paragraphs);

//LEVEL 2
//1.
// const paragraphs = document.querySelectorAll("p");
// paragraphs.forEach((p) => {
//   p.style.color = "green";
//   p.style.backgroundColor = "gray";
//   p.style.border = "3px";
//   p.style.fontSize = "24px";
//   p.style.fontFamily = "Georgia";
// });
//2.
// const paragraphs = document.querySelectorAll("p");
// paragraphs.forEach((p, i) => {
//   if (i % 2 === 0) {
//     p.style.color = "red";
//   } else {
//     p.style.color = "green";
//   }
// });
// const paragraphs = document.querySelectorAll("p");
// paragraphs.forEach((p, i) => {
//   p.setAttribute("id", `${i}`);
//   p.setAttribute("class", "paragraph");
//   p.textContent = `Number ${i}`;
// });
// console.log(paragraphs);

//LEVEL 3
//1.
// function randomColor() {
//   let randomHexaArray = [];
//   for (let i = 0; i < 6; i++) {
//     const choice = Math.floor(Math.random() * 2);
//     if (choice === 0) {
//       const pattern = "abcdef";
//       randomHexaArray.push(pattern[Math.floor(Math.random() * pattern.length)]);
//     } else {
//       randomHexaArray.push(Math.floor(Math.random() * 10));
//     }
//   }
//   const string = randomHexaArray.join("");
//   return `#${string}`;
// }

// function dateTimeFunc() {
//   const now = new Date();
//   let month = now.getMonth() + 1;
//   const day = now.getDate();
//   const year = now.getFullYear();
//   let hours = now.getHours();
//   let minutes = now.getMinutes();
//   let seconds = now.getSeconds();
//   let timeArray = [hours, minutes, seconds];
//   let newTimeArray = [];
//   for (const element of timeArray) {
//     if (element.length < 2) {
//       element = "0" + element;
//       newTimeArray.push(element);
//     }
//   }
//   const time = `${hours}:${minutes}:${seconds}`;
//   switch (month) {
//     case 1:
//       month = "January";
//       break;
//     case 2:
//       month = "February";
//       break;
//     case 3:
//       month = "March";
//       break;
//     case 4:
//       month = "April";
//       break;
//     case 5:
//       month = "May";
//       break;
//     case 6:
//       month = "June";
//       break;
//     case 7:
//       month = "July";
//       break;
//     case 8:
//       month = "August";
//       break;
//     case 9:
//       month = "September";
//       break;
//     case 10:
//       month = "October";
//       break;
//     case 11:
//       month = "November";
//       break;
//     case 12:
//       month = "December";
//       break;

//     default:
//       break;
//   }
//   return `${month} ${day}, ${year} ${time}`;
// }

// const title = document.querySelector("span");
// const dateTime = document.createElement("p");
// const div = document.createElement("div");
// const h2 = document.querySelector("h2");
// let node = document.createTextNode(``);
// title.style.fontSize = "60px";
// div.append(node);
// h2.append(div);
// setInterval(() => {
//   title.style.color = `${randomColor()}`;
//   div.style.backgroundColor = `${randomColor()}`;
//   node.textContent = `${dateTimeFunc()}`;
// }, 1000);

// const li = document.querySelectorAll("li");
// li.forEach((li, i) => {
//   li.style.listStyleType = "none";
//   if (i === 0) {
//     li.style.backgroundColor = "lightgreen";
//   } else if (i === 1) {
//     li.style.backgroundColor = "yellow";
//   } else {
//     li.style.backgroundColor = "pink";
//   }
// });
