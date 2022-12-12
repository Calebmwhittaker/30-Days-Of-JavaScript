//2.
const totalPriceOfProducts = products.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.price, 0;
});
console.log(totalPriceOfProducts);
//4.
const getFirstTenCountries = countries.map((country) => {
  let firstLetterCountry = country.name[0];
  let firstLetterCountryObject = Object.assign({}, firstLetterCountry);
  return firstLetterCountryObject;
});
console.log(getFirstTenCountries);

//7.
const getFirstFrequentLetter = countries
  .map((country) => country.name[0])
  .reduce((nextLetter, currentLetter) => {
    console.log(nextLetter[currentLetter]);
    console.log(currentLetter);
  });
console.log(getFirstFrequentLetter);

//level 3 Exercises
//2.

//EXAMPLE
// const languages = [
//   "English",
//   "Finnish",
//   "English",
//   "French",
//   "Spanish",
//   "English",
//   "French",
// ];
// const langSet = new Set(languages);
// console.log(langSet);
// // console.log(langSet.size);

// const counts = [];
// const count = {};
// for (const l of langSet) {
//   const filteredLang = languages.filter((lng) => lng === l);
//   console.log(filteredLang);
//   counts.push({ lang: l, count: filteredLang.length });
// }
// console.log(counts);

const mostSpokenLanguages = countries
  .map((country) => {
    return country.languages;
  })
  .reduce((acc, cur) => acc.concat(cur), [])
  .reduce((newLanguageArray, currentLanguage) => {
    if (newLanguageArray[currentLanguage]) {
      newLanguageArray[currentLanguage] = newLanguageArray[currentLanguage] + 1;
    } else {
      newLanguageArray[currentLanguage] = 1;
    }
    return newLanguageArray;
  }, []);
console.log(mostSpokenLanguages);
//3.
//4.
