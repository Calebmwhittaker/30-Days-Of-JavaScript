//DAY 25 EXERCISES
//LEVEL 1
//1.
const fetchData = async () => {
  //Fetch
  try {
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
    const languageMap = new Map();
    for (const country of countriesArray) {
      let { languages } = country;
      for (const language of languages) {
        if (!languageMap.has(language)) {
          languageMap.set(language, 1);
        } else {
          languageMap.set(language, languageMap.get(language) + 1);
        }
      }
    }
    let languageArray = [];
    for (const languagePair of languageMap) {
      let [language, count] = languagePair;
      languageArray.push({ language: language, count: count });
    }
    languageArray.sort((a, b) => (a.count < b.count ? 1 : -1));
    const tenMostPopularLanguages = languageArray.slice(0, 10);

    const populationRanking = countriesArray.sort((a, b) =>
      a.population < b.population ? 1 : -1
    );
    const tenMostPopulatedCountries = populationRanking.slice(0, 10);

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
    dataSection.setAttribute("class", "row d-flex m-0");
    populationButton.addEventListener("click", function populationFunction() {
      p.textContent = "10 Most Populated Countries in the World";
      dataSection.textContent = "";
      const worldDiv = document.createElement("div");
      worldDiv.setAttribute("class", "col-12 d-flex justify-content-left");
      const worldNameDiv = document.createElement("div");
      worldNameDiv.setAttribute("class", "col-2");
      worldNameDiv.textContent = "World";
      const worldProgressDiv = document.createElement("div");
      worldProgressDiv.setAttribute("class", "col-8");
      const worldProgressBar = document.createElement("progress");
      worldProgressBar.setAttribute("value", "7888000000");
      worldProgressBar.setAttribute("max", "7888000000");
      worldProgressDiv.appendChild(worldProgressBar);
      const worldNumberDiv = document.createElement("div");
      worldNumberDiv.setAttribute("class", "col-2");
      worldNumberDiv.textContent = `${new Intl.NumberFormat("en", {
        style: "decimal",
        minimumFractionDigits: 0,
      }).format(7888000000)}`;
      worldDiv.appendChild(worldNameDiv);
      worldDiv.appendChild(worldProgressDiv);
      worldDiv.appendChild(worldNumberDiv);
      dataSection.appendChild(worldDiv);
      for (const country of tenMostPopulatedCountries) {
        const countryDiv = document.createElement("div");
        countryDiv.setAttribute("class", "col-12 d-flex justify-content-left");
        const nameDiv = document.createElement("div");
        nameDiv.setAttribute("class", "col-2");
        nameDiv.textContent = `${country.name}`;
        const progressDiv = document.createElement("div");
        progressDiv.setAttribute("class", "col-8");

        const progressBar = document.createElement("progress");
        progressBar.setAttribute("value", `${country.population}`);
        progressBar.setAttribute("max", `7888000000`);
        progressDiv.appendChild(progressBar);
        const numberDiv = document.createElement("div");
        numberDiv.setAttribute("class", "col-2");
        numberDiv.textContent = `${new Intl.NumberFormat("en", {
          style: "decimal",
          minimumFractionDigits: 0,
        }).format(country.population)}`;
        countryDiv.appendChild(nameDiv);
        countryDiv.appendChild(progressDiv);
        countryDiv.appendChild(numberDiv);
        dataSection.appendChild(countryDiv);
      }
    });
    const languageButton = document.createElement("button");
    languageButton.textContent = "Languages";
    languageButton.style.backgroundColor = "orange";
    languageButton.addEventListener("click", function languages() {
      p.textContent = "10 Most Spoken Languages in the World";
      dataSection.textContent = "";
      for (const country of tenMostPopularLanguages) {
        const countryDiv = document.createElement("div");
        countryDiv.setAttribute("class", "col-12 d-flex justify-content-left");
        const nameDiv = document.createElement("div");
        nameDiv.setAttribute("class", "col-2");
        nameDiv.textContent = `${country.language}`;
        const progressDiv = document.createElement("div");
        progressDiv.setAttribute("class", "col-8");
        const progressBar = document.createElement("progress");
        progressBar.setAttribute("value", `${country.count}`);
        progressBar.setAttribute("max", "100");
        progressDiv.appendChild(progressBar);
        const numberDiv = document.createElement("div");
        numberDiv.setAttribute("class", "col-2");
        numberDiv.textContent = `${country.count}`;
        countryDiv.appendChild(nameDiv);
        countryDiv.appendChild(progressDiv);
        countryDiv.appendChild(numberDiv);
        dataSection.appendChild(countryDiv);
      }
    });
    document.body.appendChild(populationButton);
    document.body.appendChild(languageButton);
    document.body.appendChild(p);
    document.body.appendChild(dataSection);
  } catch (err) {
    console.log(err);
    console.log(`A ${err.name} has occurred`);
  }
};
fetchData();
