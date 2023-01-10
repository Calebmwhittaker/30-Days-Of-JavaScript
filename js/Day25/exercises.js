//DAY 25 EXERCISES
//LEVEL 1
//1.
const fetchData = async () => {
  //Fetch
  const response = await fetch(`https://restcountries.com/v3.1/all`);
  const data = await response.json();
  const json = JSON.stringify(data, undefined, 4);
  const countries = JSON.parse(json, undefined, 4);

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
  const populationRanking = countriesArray.sort((a, b) =>
    a.population < b.population ? 1 : -1
  );
  const tenMostPopulatedCountries = populationRanking.slice(0, 10);
  // console.log(tenMostPopulatedCountries);

  const countriesMap = new Map();

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
  const dataSection = document.createElement("section");
  dataSection.setAttribute("class", "row d-flex");
  // dataSection.style.justifyContent = "space-around";
  populationButton.addEventListener("click", function populationFunction() {
    dataSection.textContent = "";
    p.textContent = "10 Most Populated Countries in the World";
    for (const country of tenMostPopulatedCountries) {
      const countryDiv = document.createElement("div");
      countryDiv.setAttribute("class", "col-12 d-flex justify-content-around");
      const nameDiv = document.createElement("div");
      nameDiv.textContent = `${country.name}`;
      const progressDiv = document.createElement("div");
      const numberDiv = document.createElement("div");
      numberDiv.textContent = `${country.population}`;
      countryDiv.appendChild(nameDiv);
      countryDiv.appendChild(progressDiv);
      countryDiv.appendChild(numberDiv);
      dataSection.appendChild(countryDiv);
    }
    document.body.appendChild(dataSection);
  });
  const languageButton = document.createElement("button");
  languageButton.textContent = "Languages";
  languageButton.style.backgroundColor = "orange";
  languageButton.addEventListener("click", function languages() {
    p.textContent = "10 Most Spoken Languages in the World";
    dataSection.textContent = "";
  });
  document.body.appendChild(populationButton);
  document.body.appendChild(languageButton);
  document.body.appendChild(p);
  //Data Section
};
fetchData();
