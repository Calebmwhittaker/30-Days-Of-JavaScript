//DAY 12 LESSON
//Regular Expressions
/*RegEx is a small programming language that helps to find patterns in data */
/*The syntax to start a RegEx is to use two forward slashes ('//') */

//RegEx Parameters
/*RegEx takes two parameters: Search pattern and an optional flag */
/*A pattern can be a text or any form of pattern */
/*Flags are optional parameters in a RegEx and determines the type of searching */
/*g: A global flag which looks for a pattern in a whole text */
/*i: A case-sensitive flag (Searches for lowercase and uppercase) */
/*m: Multiline flag */

//Creating a Pattern with RegEx Constructor
/*Declaring RegEx without global flag */
// let pattern = "love";
// let RegEx = new RegExp(pattern);
// console.log(RegEx);
// console.log("hi");

/*Declaring RegEx with global flag */
// let pattern = "love";
// let flag = "gi";
// let RegEx = new RegExp(pattern, flag);
// console.log(RegEx);

/*Declaring a RegEx object with the pattern and flag inside the RegExp constructor */
// let RegEx = new RegExp("love", "gi");
// console.log(RegEx);

//Creating a pattern without RegExp Constructor
/*Declaring RegEx with global and case-sensitive flag */
// let regEx = new RegExp(/love/gi);
// console.log(regEx);

//RegExp Object Methods
/*Testing for a match */
/*test(): A method that tests for a match in a string; returns true or false */
// const str = "I love JavaScript";
// const pattern = /love/;
// const result = pattern.test(str);
// console.log(result);
/*Tests to see if the pattern is found in the str */

//Array Containing all of the Match
/*match(): A method that return an array containing all of the matches */
// const str = "I love JavaScript";
// const pattern = /love/gi;
// const result = str.match(pattern);
// console.log(result);

/*search(): A method that tests for a match in a string; returns the index of the match or -1 if the search fails */
// const str = "I love JavaScript";
// const pattern = /love/g;
// const result = str.search(pattern);
// console.log(result);

/*Replacing a Substring */
/*replace(): A method that executes a search for a match in a string and replaces the matched substring with a replacement substring */
// const txt =
//   "Python is the most beautiful language that a human begin has ever created.\
// I recommend python for a first programming language";
// const matchReplaced = txt.replace(/python/gi, "JavasScript");
// console.log(matchReplaced);

// const txt =
//   "%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
// T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
// p%e%o%ple.\
// I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
// D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.";
// const matches = txt.replace(/%/g, "");
// console.log(matches);

//Square Bracket
/*Includes lowercase and uppercase */
// const pattern = "[Aa]pple";
// const txt =
//   "Apple and Banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. ";
// const matches = txt.match(pattern);

// console.log(matches);

// const pattern = /[Aa]pple/g;
// const txt =
//   "Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. ";
// const matches = txt.match(pattern);
// console.log(matches);

//Escape Character in RegExp
// const pattern = /\d/g;
// const txt = "This regular expression example was made in January 12,  2020.";
// const matches = txt.match(pattern);
// console.log(matches);
/*The \d is a special character that means digits */

//One or more Times(+)
// const pattern = /\d+/g;
// const txt = "This regular expression example was made in January 12,  2020.";
// const matches = txt.match(pattern);
// console.log(matches);
/*Pulls all the digits out until it encounters a non-digit value and then places a space between the sets of digits */

//Period
// const pattern = /[a].+/gi;
// const txt = "Apple and banana are fruits";
// const matches = txt.match(pattern);
// console.log(matches);

//Zero or More Times(*)
/*Zero or many times */
// const pattern = /[a].*/gi;
// const txt = "Apple and banana are fruits";
// const matches = txt.match(pattern);
// console.log(matches);

//Zero or one times (?)
// const txt =
//   "I am not sure if there is a convention how to write the word e-mail.\
// Some people write it email others may write it as Email or E-mail.";
// const pattern = /[Ee]-?mail/g;
// const matches = txt.match(pattern);
// console.log(matches);

//Quantifier in RegEx
/*We can specify the length of the substring using curly brackets */
// const txt = "This regular expression example was made in December 6,  2019.";
// const pattern = /\b\w{4}\b/g;
// const matches = txt.match(pattern);
// console.log(matches);

// const txt = "This regular expression example was made in December 6,  2019.";
// const pattern = /\b[a-zA-Z]{4}\b/g;
// const matches = txt.match(pattern);
// console.log(matches);

// const txt = "This regular expression example was made in December 6,  2019.";
// const pattern = /\d{4}/g;
// const matches = txt.match(pattern);
// console.log(matches);

// const txt = "This regular expression example was made in December 6,  2019.";
// const pattern = /\d{1,4}/g;
// const matches = txt.match(pattern);
// console.log(matches);

//Cart (^)
// const txt = "This regular expression example was made in December 6,  2019.";
// const pattern = /^This/g;
// const matches = txt.match(pattern);
// console.log(matches);

// const txt = "This regular expression example was made in December 6,  2019.";
// const pattern = /[^A-Za-z,. ]+/g; /*No letters, commas, or periods */
// const matches = txt.match(pattern);
// console.log(matches);
/*Inside a set character, the cart character (^) means negation */

//Exact Match
// const txt = "This regular expression example was made in December 6,  2019.";
// const pattern = /^[A-Z][a-z]{3,6}$/;
// const name = "Asabeneh";
// const result = pattern.test(name);
// console.log(result);
