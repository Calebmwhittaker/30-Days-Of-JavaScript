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
const allTitles = document.getElementsByTagName("h1");

console.log(allTitles); //Returns an HTMLCollection
console.log(allTitles.length); //Returns the length of the HTMLCollection

for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i]);
}
