//LEVEL 1 Exercises
//3.
const isValid = (variable) => {
  const badPattern = /^[^0-9].*[\w].*/g;
  if (variable.match(badPattern)) {
    return false;
  } else {
    return true;
  }
};
console.log(isValid("1"));
