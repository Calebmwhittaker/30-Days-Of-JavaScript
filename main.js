//DAY 22 LESSON
//Creating an Element
/*createElement('tagname'): A document method that allows you to create a new HTML element by taking a tagname as a string parameter */
// document.createElement("tagname");
// let title = document.createElement("h1");
// title.className = "title";
// title.style.fontSize = "24px";
// title.textContent = "Creating HTML element DOM Day 2";
// console.log(title);

//Creating Elements
/**\To create multiple elements, we should use a loop */
// let title;
// for (let i = 0; i < 3; i++) {
//   title = document.createElement("h1");
//   title.className = "title";
//   title.style.fontSize = "24px";
//   title.textContent = i;
//   console.log(title);
// }

//Appending Child to a Parent Element
/*To see a created element on the document, we should append it to the parent as a child element */
/*appendChild(): A document method that allows you to append a child element to a parent element */
// let title;
// for (let i = 0; i < 3; i++) {
//   title = document.createElement("h1");
//   title.className = "title";
//   title.style.fontSize = "24px";
//   title.textContent = i;
//   document.body.appendChild(title);
// }
/*Body is the parent element when using the appendChild method */

//Remove a Child Element from a Parent Node
/*After creating an HTML element, you may want to remove the element */
/*removeChild(): A document method that allows you to remove a child element from a parent element */
// const ul = document.querySelector("ul");
// document.body.appendChild(ul);
// const lists = document.querySelectorAll("li");
// document.appendChild(lists);
// for (const list of lists) {
//   ul.removeChild(lists);
// }
// const ul = document.querySelector("ul");
// document.body.appendChild(ul);
// const li = document.querySelectorAll("li");
// document.ul.appendChild(li);
// for (const list of li) {
//   console.log(list);
//   ul.removeChild(list);
// }

const ul = document.querySelector("ul");
ul.textContent = "";
