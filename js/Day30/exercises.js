const countriesTemplate = document.querySelector(".countries-card-template");
const graphTemplate = document.querySelector(".graph-template");
const searchBar = document.querySelector("input");

try {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => {
      data.map((country) => {
        let { name, languages, population, capital, flags } = country;
        let { common } = name;
        let { png } = flags;

        const h2 = document.querySelector("h2");
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
          for (const language in languages) {
            const newLanguage = languages[language];
            languagesArray.push(newLanguage);
          }
          const joined = languagesArray.join(", ");
          return joined;
        }

        h2.textContent = `Currently, we have ${data.length} countries`;

        countryFlagImg.setAttribute("src", png);
        countryFlagImg.setAttribute("alt", `Flag of the ${common}`);
        countryName.textContent = common;
        if (capital) {
          countryCapital.textContent = `Capital: ${capital[0]}`;
        } else {
          countryCapital.textContent = `Capital: No Capital`;
        }
        countryLanguages.textContent = `Languages: ${getLanguagesOfEachCountry()}`;
        countryPopulation.textContent = `Population: ${Intl.NumberFormat(
          "en-US",
          { type: "decimal" }
        ).format(population)}`;

        countriesSection.append(cloneCountries);
      });
    });
} catch (err) {
  console.log(err);
}
