//DAY 23 LESSON
//Event Listeners
/*Common HTML events:
    onclick
    onchange
    onmouseover
    onkeydown
    onkeyuponload */
/*Use 'addEventListener() method to 'listen' to different types of HTML events on HTML elements */
/*addEventListener() takes two parameters: "eventListener" and callback function */
// selectedElement.addEventListener("eventListener", function (e) {
//   //Activity you want to occur after the even will be in here
// });

// //OR

// selectedElement.addEventListener("eventListener", (e) => {
//   //Activity you want to occur after the even will be in here
// });

//Click
/*To attach an event listener to an element, we first have to select the element we want to attach the addEventListener method to. */
/*The addEventListener() method takes an event type and callback function as an argument */
// const button = document.querySelector("button");
// button.addEventListener("click", (e) => {
//   console.log("e gives the event listener object: ", e);
//   console.log("e.target give the selected element: ", e.target);
//   console.log(
//     "e.target.textContent gives content of selected element: ",
//     e.target.textContent
//   );
// });

//An event can also be attached directly to the HTML element as inline scripts

//Double Click
// const button = document.querySelector("button");
// button.addEventListener("dblclick", (e) => {
//   console.log("e gives the event listener object:", e);
//   console.log("e.target gives the selected element: ", e.target);
//   console.log(
//     "e.target.textContent gives content of selected element: ",
//     e.target.textContent
//   );
// });

//Mouse Enter
// const button = document.querySelector("button");
// button.addEventListener("mouseenter", (e) => {
//   console.log("e gives the event listener object:", e);
//   console.log("e.target gives the selected element: ", e.target);
//   console.log(
//     "e.target.textContent gives content of selected element: ",
//     e.target.textContent
//   );
// });

//Types of JavaScript Events
/*click - when the element clicked
dblclick - when the element double clicked
mouseenter - when the mouse point enter to the element
mouseleave - when the mouse pointer leave the element
mousemove - when the mouse pointer move on the element
mouseover - when the mouse pointer move on the element
mouseout -when the mouse pointer out from the element
input -when value enter to input field
change -when value change on input field
blur -when the element is not focused
keydown - when a key is down
keyup - when a key is up
keypress - when we press any key
onload - when the browser has finished loading a page*/

//Getting values from an input element
// const mass = document.querySelector("#mass");
// const height = document.querySelector("#height");
// const button = document.querySelector("button");

// let bmi;
// button.addEventListener("click", (e) => {
//   bmi = mass.value / height.value ** 2;
//   alert(`Your BMI is ${bmi.toFixed(1)}`);
//   console.log(bmi.toFixed(2));
// });

//Input Event and Change
// const input = document.querySelector("input");
// const p = document.querySelector("p");

// input.addEventListener("input", (e) => {
//   p.textContent = e.target.value; //e.target is the input in this case
// });

//Blur Event
/*The blur event occurs when the input field is not in focus */
// const input = document.querySelector("input");
// const p = document.querySelector("p");

// input.addEventListener("blur", (e) => {
//   p.textContent = "Field is required";
//   p.style.color = "red";
// });

//keypress, keydown, keyup
document.body.addEventListener("keypress", (e) => {
  alert(e.location);
});
