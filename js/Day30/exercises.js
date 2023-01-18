const countriesTemplate = document.querySelector(".countries-card-template");
const graphTemplate = document.querySelector(".graph-template");
const searchBar = document.querySelector("input");
const nameButton = document.querySelector(".name-button");
const capitalButton = document.querySelector(".capital-button");
const populationButton = document.querySelector(".population-button");
const graphImg = document.querySelector(".graph-img");
const countriesSection = document.body.querySelector(".countries-section");
const dataSection = document.querySelector(".data-section");
const dataPopulationButton = document.querySelector(".data-population-button");
const dataLanguagesButton = document.querySelector(".data-languages-button");

let countriesArray = [];
let order = false;

function sortCountries(argument) {
  order = !order;
  countriesArray.sort((a, b) => {
    if (order) {
      if (a[argument] > b[argument]) {
        return -1;
      } else {
        return 1;
      }
    } else {
      if (a[argument] > b[argument]) {
        return 1;
      } else {
        return -1;
      }
    }
  });
}

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

      function createCountryTemplate() {
        countriesArray = countriesArray.map((country) => {
          const cloneCountries =
            countriesTemplate.content.cloneNode(true).children[0];
          const countryFlagDiv = cloneCountries.querySelector(".flag-div");
          const countryFlagImg = countryFlagDiv.querySelector(".flag-img");
          const countryName = cloneCountries.querySelector(".name");
          const countryCapital = cloneCountries.querySelector(".capital");
          const countryLanguages = cloneCountries.querySelector(".languages");
          const countryPopulation = cloneCountries.querySelector(".population");

          const graphTemplate = document.querySelector(".graph-template");
          const cloneData = graphTemplate.content.cloneNode(true).children[0];
          const dataCountryName = cloneData.querySelector(".data-country-name");
          const dataProgress = cloneData.querySelector(".data-progress");
          const languageProgress =
            dataProgress.querySelector(".language-progress");
          const populationProgress = dataProgress.querySelector(
            ".population-progress"
          );
          const dataNumbers = cloneData.querySelector(".data-numbers");
          const languageNumbers =
            dataNumbers.querySelector(".language-numbers");
          const populationNumbers = dataNumbers.querySelector(
            ".population-numbers"
          );

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
          countryFlagImg.setAttribute("alt", `Flag of ${country.name}`);
          countryName.textContent = country.name;
          if (country.capital !== undefined) {
            countryCapital.textContent = `Capital: ${country.capital[0]}`;
          } else {
            countryCapital.textContent = `Capital: No Capital`;
            country.capital = "No Capital";
          }
          countryLanguages.textContent = `Languages: ${getLanguagesOfEachCountry()}`;
          countryPopulation.textContent = `Population: ${Intl.NumberFormat(
            "en-US",
            { type: "decimal" }
          ).format(country.population)}`;

          dataCountryName.textContent = country.name;
          languageProgress.setAttribute("value", splitLanguages().length);
          languageProgress.setAttribute("max", 15);
          populationProgress.setAttribute("value", country.population);
          populationProgress.setAttribute("max", 7888000000);

          dataPopulationButton.addEventListener("click", () => {
            languageProgress.classList.add("hide");
            languageNumbers.classList.add("hide");
            populationProgress.classList.remove("hide");
            populationNumbers.classList.remove("hide");
          });

          dataLanguagesButton.addEventListener("click", () => {
            populationProgress.classList.add("hide");
            populationNumbers.classList.add("hide");
            languageProgress.classList.remove("hide");
            languageNumbers.classList.remove("hide");
          });

          function splitLanguages() {
            const splitLang = getLanguagesOfEachCountry().split(", ");
            return splitLang;
          }
          languageNumbers.textContent = splitLanguages().length;
          populationNumbers.textContent = Intl.NumberFormat("en-US", {
            type: "decimal",
          }).format(country.population);

          countriesSection.appendChild(cloneCountries);
          dataSection.appendChild(cloneData);

          return {
            name: country.name,
            languages: country.languages,
            capital: country.capital,
            population: country.population,
            flags: country.flags,
            element: cloneCountries,
            elementData: cloneData,
          };
        });
      }

      nameButton.addEventListener("click", () => {
        sortCountries("name");
        for (let i = 0; i < countriesArray.length; i++) {
          countriesSection.removeChild(countriesSection.firstChild);
          dataSection.removeChild(dataSection.lastChild);
        }
        createCountryTemplate();
        searchBar.addEventListener("input", () => {
          const value = searchBar.value.toLowerCase();
          countriesArray.forEach((country) => {
            const isVisibleName = country.name.toLowerCase().match(value);
            country.element.classList.toggle("hide", !isVisibleName);
            country.elementData.classList.toggle("hide", !isVisibleName);
          });
        });
      });

      capitalButton.addEventListener("click", () => {
        sortCountries("capital");
        for (let i = 0; i < countriesArray.length; i++) {
          countriesSection.removeChild(countriesSection.firstChild);
          dataSection.removeChild(dataSection.lastChild);
        }
        createCountryTemplate();
        searchBar.addEventListener("input", () => {
          const value = searchBar.value.toLowerCase();
          countriesArray.forEach((country) => {
            const stringCapital = country.capital.toString();
            const isVisibleName = stringCapital.toLowerCase().match(value);
            country.element.classList.toggle("hide", !isVisibleName);
            country.elementData.classList.toggle("hide", !isVisibleName);
          });
        });
      });

      populationButton.addEventListener("click", () => {
        for (let i = 0; i < countriesArray.length; i++) {
          dataSection.removeChild(dataSection.lastChild);
        }
        order = !order;
        countriesArray.sort((a, b) =>
          order ? b.population - a.population : a.population - b.population
        );
        for (let i = 0; i < countriesArray.length; i++) {
          countriesSection.removeChild(countriesSection.firstChild);
        }
        createCountryTemplate();
      });

      graphImg.addEventListener("click", () => {
        dataSection.classList.toggle("hide");
      });

      createCountryTemplate();
    });
} catch (err) {
  console.log(err);
}
