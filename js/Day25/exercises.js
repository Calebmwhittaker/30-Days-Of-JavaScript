//DAY 25 EXERCISES
//LEVEL 1
//1.
const fetchData = async () => {
  //Fetch
  const response = await fetch(`https://restcountries.com/v3.1/all`);
  const data = await response.json();
  const json = JSON.stringify(data, undefined, 4);
  const countries = JSON.parse(json, undefined, 4);

  //Header
  document.body.style.textAlign = "center";
  const header = document.createElement("header");
  header.style.backgroundColor = "rgb(231 231 231)";
  const h1 = document.createElement("h1");
  h1.textContent = "World Countries Data";
  h1.style.color = "orange";
  h1.style.textShadow = "1px 1px rgb(151 151 151)";
  header.appendChild(h1);
  const h2 = document.createElement("h2");
  h2.textContent = `Currently we have ${countries.length} countries`;
  h2.style.fontSize = "20px";
  header.appendChild(h2);
  document.body.appendChild(header);

  //Button Section
  const p = document.createElement("p");
  const populationButton = document.createElement("button");
  populationButton.textContent = "Population";
  populationButton.style.backgroundColor = "orange";
  populationButton.addEventListener("click", function population() {
    p.textContent = "10 Most Populated Countries in the World";
  });
  const languageButton = document.createElement("button");
  languageButton.textContent = "Languages";
  languageButton.style.backgroundColor = "orange";
  languageButton.addEventListener("click", function languages() {
    p.textContent = "10 Most Spoken Languages in the World";
  });
  document.body.appendChild(populationButton);
  document.body.appendChild(languageButton);
  document.body.appendChild(p);
  //Data Section
  const dataSection = document.createElement("section");
  let countriesArray = [];
  for (const country of countries) {
    let { population, languages, name } = country;
    let { common } = name;
    let languagesArray = [];
    for (const language in languages) {
      const newLanguage = languages[language];
      languagesArray.push(newLanguage);
    }
    countriesArray.push({
      name: common,
      languages: languagesArray,
      population: population,
    });
  }
  const sortedArray = countriesArray.sort((item) => item.name);
  console.log(sortedArray); //NOT Working Yet
  const countryNamesDiv = document.createElement("div");
  const countryProgressBar = document.createElement("progress");
  const countryCountDiv = document.createElement("div");
  document.body.appendChild(dataSection);
};
fetchData();
