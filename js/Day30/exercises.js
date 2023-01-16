const countriesTemplate = document.querySelector(".countries-card-template");
const graphTemplate = document.querySelector(".graph-template");
const searchBar = document.querySelector("input");
const nameButton = document.querySelector(".name-button");
const capitlaButton = document.querySelector(".capital-button");
const populationButton = document.querySelector(".population-button");

let countriesArray = [];

nameButton.addEventListener("click", () => {
  searchBar.addEventListener("input", () => {
    const value = searchBar.value.toLowerCase();
    countriesArray.forEach((country) => {
      const isVisible = country.name.toLowerCase().match(value);
      country.element.classList.toggle("hide", !isVisible);
    });
  });
});

capitlaButton.addEventListener("click", () => {
  searchBar.addEventListener("input", () => {
    const value = searchBar.value.toLowerCase();
    countriesArray.forEach((country) => {
      if (country.capital) {
        console.table(country.capital[0]);
        const isVisible = country.capital[0].match(value);
        if (isVisible) {
          console.log(isVisible);
        }
        country.element.classList.toggle("hide", !isVisible);
      }
    });
  });
});

try {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => {
      const h2 = document.querySelector("h2");
      h2.textContent = `Currently, we have ${data.length} countries`;

      countriesArray = data
        .map((country) => {
          let { name, languages, population, capital, flags } = country;
          let { common } = name;
          let { png } = flags;
          return {
            name: common,
            languages: languages,
            population: population,
            capital: capital,
            flags: png,
          };
        })
        .sort((a, b) => (a.name > b.name ? 1 : -1));

      countriesArray = countriesArray.map((country) => {
        const countriesSection =
          document.body.querySelector(".countries-section");
        const cloneCountries =
          countriesTemplate.content.cloneNode(true).children[0];
        const countryFlagDiv = cloneCountries.querySelector(".flag-div");
        const countryFlagImg = countryFlagDiv.querySelector(".flag-img");
        const countryName = cloneCountries.querySelector(".name");
        const countryCapital = cloneCountries.querySelector(".capital");
        const countryLanguages = cloneCountries.querySelector(".languages");
        const countryPopulation = cloneCountries.querySelector(".population");
        function getLanguagesOfEachCountry() {
          let languagesArray = [];
          for (const language in country.languages) {
            const newLanguage = country.languages[language];
            languagesArray.push(newLanguage);
          }
          const joined = languagesArray.join(", ");
          return joined;
        }
        countryFlagImg.setAttribute("src", country.flags);
        countryFlagImg.setAttribute("alt", `Flag of the ${country.name}`);
        countryName.textContent = country.name;
        if (country.capital) {
          countryCapital.textContent = `Capital: ${country.capital[0]}`;
        } else {
          countryCapital.textContent = `Capital: No Capital`;
        }
        countryLanguages.textContent = `Languages: ${getLanguagesOfEachCountry()}`;
        countryPopulation.textContent = `Population: ${Intl.NumberFormat(
          "en-US",
          { type: "decimal" }
        ).format(country.population)}`;

        countriesSection.append(cloneCountries);
        return {
          name: country.name,
          languages: country.languages,
          capital: country.capital,
          population: country.population,
          element: cloneCountries,
        };
      });
    });
} catch (err) {
  console.log(err);
}
