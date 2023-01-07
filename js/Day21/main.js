//DAY 21 LESSON
//Document Object Model (DOM)
/*The HTML document is strucutred as a JavaScript Object */
/*Every HTML element has different properties which can be helped to manipulate it */
/*It's possinle to get, create, append, or remove HTML elements using JavaScript */
/*To select an HTML element, we use the tag name, id, class name, or other attributes */

//Getting Element
//Getting Elements by Tag Name
/*getElementsByTagName(): Takes a tag name as a string parameter and returns an HTMLCollection Object; similar to an array of objects of HTML elements */
/*The length property provides the size of the HTML collection */
/*You can access inidividual elements using an index or looping through each individual item */
/*The HTMLCollection does NOT support all array methods; therefore, we should use regular 'for loops' instead of 'forEach loops */
// document.getElementsByTagName("h1");
// const allTitles = document.getElementsByTagName("h1");

// console.log(allTitles); //Returns an HTMLCollection
// console.log(allTitles.length); //Returns the length of the HTMLCollection

// for (let i = 0; i < allTitles.length; i++) {
//   console.log(allTitles[i]);
// }

//Getting Elements by ClassNamw
/*getElementsByClassName(): A method that returns an HTML collection as an array of HTML elements */
// document.getElementsByClassName("className");
// const allTitles = document.getElementsByClassName("title");
// console.log(allTitles);
// console.log(allTitles.length);
// for (let i = 0; i < allTitles.length; i++) {
//   console.log(allTitles[i]);
// }

//Getting an Element by id
/*getElementById(): A method that targets a single HTML element */
// document.getElementById('id');

// let firstTitle = document.getElementById("first-title");
// console.log(firstTitle);

//Getting Elements by Using querySelector Methods
/*querySelector(): A method that can select HTML or HTML elements by tag name, id, or className */
/*When using the querySelector() method to select an HTMl element by its tag name, it will only select the first element with that tagName */
// let firstTitle = document.querySelector("h1");
// let firstTitleClass = document.querySelector(".title");
// let firstTitleId = document.querySelector("#first-title");

//querySelectorAll(): A method that can be used to select HTML elements by its tag name or class
/*Returns a nodeList which is an array-like object which supports array methods; therefore, we can us a for loop or a forEach loop */
// const allTitles = document.querySelectorAll("h1");
// console.log(allTitles); //Returns all h1 tags in a nodeList
// allTitles.forEach((element) => console.log(element));

//Adding Attribute
/*Attributes are added in the opening tag of HTMl which gives additional information about the elemnt */
/*Common HTML attributes:
    id
    class
    src
    style
    href
    disabled
    title
    alt
 */

// const titles = document.querySelectorAll("h1");
// titles[3].className = "title";
// titles[3].id = "fourth-title";
// console.log(titles);
/*This method does not always work so you should use another method such as setAttribute() instead */

//Adding Attribute Using setAttribute
/*setAttribute(): A method that allows you to set any HTML attribute */
/*Takes two parameters: type of attribute and name of attribute */
// const titles = document.querySelectorAll("h1");
// titles[3].setAttribute("class", "title");
// titles[3].setAttribute("id", "fourth-title");
// console.log(titles);

//Adding Class Using ClassList
/*Appends a class to an existing class */
/*Does NOT override the original class */
// const titles = document.querySelectorAll("h1");
// titles[3].classList.add("title", "header-title");
// console.log(titles);

//Removing a Class Using Remove
/*Similar to adding, we can also remove classes from an element */
// const titles = document.querySelectorAll("h1");
// titles[3].classList.add("title", "header-title"); //Must include classList before the remove method
// console.log(titles);
// titles[3].classList.remove("title", "header-title");
// console.log(titles);

//Adding Text to HTML element
//Adding Text content using textContent
// const titles = document.querySelectorAll("h1");
// titles[3].textContent = "Fourth Title";
// console.log(titles);

//Adding Text Content using innerHTML
/*textContent is meant to add text to an HTML element */
/*innerHTML can add text and HTML elements as children */
/*We use innerHTML when we would like to replace or add new children content to a parent element */
// const lists = `<li>30DaysOfPython Challenge Done</li>
// <li>30DaysOfJavaScript Challenge Ongoing</li>
// <li>30DaysOfReact Challenge Coming</li>
// <li>30DaysOfFullStack Challenge Coming</li>
// <li>30DaysOfDataAnalysis Challenge Coming</li>
// <li>30DaysOfReactNative Challenge Coming</li>
// <li>30DaysOfMachineLearning Challenge Coming</li>`;
// const ul = document.querySelector("ul");
// ul.innerHTML = lists;
/*JSX can be included if it is included within a string */

/*The innerHTML property can allows us to remove all the children of a parent element instead of using removeChild() */
// const lists = `<li>30DaysOfPython Challenge Done</li>
// <li>30DaysOfJavaScript Challenge Ongoing</li>
// <li>30DaysOfReact Challenge Coming</li>
// <li>30DaysOfFullStack Challenge Coming</li>
// <li>30DaysOfDataAnalysis Challenge Coming</li>
// <li>30DaysOfReactNative Challenge Coming</li>
// <li>30DaysOfMachineLearning Challenge Coming</li>`;
// const ul = document.querySelector("ul");
// ul.innerHTML = lists;

//Adding Style
//Adding Style Color
// const titles = document.querySelectorAll("h1");
// titles.forEach((title, i) => {
//   title.style.fontSize = "24px"; //All titles have a 24px font size
//   if (i % 2 === 0) {
//     title.style.color = "green";
//   } else {
//     title.style.color = "red";
//   }
// });

//Adding Style Background Color
// const titles = document.querySelectorAll("h1");
// titles.forEach((title, i) => {
//   title.style.fontSize = "24px";
//   if (i % 2 === 0) {
//     title.style.backgroundColor = "green";
//   } else {
//     title.style.backgroundColor = "red";
//   }
// });

//Adding Style Font Size
// const titles = document.querySelectorAll("h1");
// titles.forEach((title, i) => {
//   title.style.fontSize = "24px";
//   if (i % 2 === 0) {
//     title.style.fontSize = "20px";
//   } else {
//     title.style.fontSize = "30px";
//   }
// });

/*The properties of CSS when used in JavaScript are going to be in camelCase */
