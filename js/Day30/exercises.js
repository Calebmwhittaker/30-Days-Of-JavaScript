const countriesTemplate = document.querySelector(".countries-card-template");
const graphTemplate = document.querySelector(".graph-template");
const searchBar = document.querySelector("input");
const nameButton = document.querySelector(".name-button");
const capitalButton = document.querySelector(".capital-button");
const populationButton = document.querySelector(".population-button");
const graphImg = document.querySelector(".graph-img");
const countriesSection = document.body.querySelector(".countries-section");

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

          countriesSection.appendChild(cloneCountries);

          return {
            name: country.name,
            languages: country.languages,
            capital: country.capital,
            population: country.population,
            flags: country.flags,
            element: cloneCountries,
          };
        });
      }

      nameButton.addEventListener("click", () => {
        sortCountries("name");
        for (let i = 0; i < countriesArray.length; i++) {
          countriesSection.removeChild(countriesSection.firstChild);
        }
        createCountryTemplate();
        searchBar.addEventListener("input", () => {
          const value = searchBar.value.toLowerCase();
          countriesArray.forEach((country) => {
            const isVisible = country.name.toLowerCase().match(value);
            country.element.classList.toggle("hide", !isVisible);
          });
        });
      });

      capitalButton.addEventListener("click", () => {
        sortCountries("capital");
        for (let i = 0; i < countriesArray.length; i++) {
          countriesSection.removeChild(countriesSection.firstChild);
        }
        createCountryTemplate();
        searchBar.addEventListener("input", () => {
          const value = searchBar.value.toLowerCase();
          countriesArray.forEach((country) => {
            const stringCapital = country.capital.toString();
            const isVisible = stringCapital.toLowerCase().match(value);
            country.element.classList.toggle("hide", !isVisible);
          });
        });
      });

      populationButton.addEventListener("click", () => {
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
        console.log("hello");
      });
      createCountryTemplate();
    });
  const dataSection = document.querySelector(".data-section");
  const graphTemplate = document.querySelector(".graph-template");
  countriesArray = countriesArray.map((country) => {
    const cloneData = graphTemplate.content.cloneNode(true).children[0];
    const dataCountryName = cloneData.querySelector(".data-country-name");
    const dataProgress = cloneData.querySelector(".data-progress");
    const dataNumbers = cloneData.querySelector(".data-numbers");
  });
} catch (err) {
  console.log(err);
}
