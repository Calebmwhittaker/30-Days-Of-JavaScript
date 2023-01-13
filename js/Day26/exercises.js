//DAY 26 EXERCISES
//LEVEL 1
//1.
const countriesTemplate = document.querySelector("[data-countries-template]");
const countriesContainer = document.querySelector(".countries-container");
const searchInput = document.querySelector("input");
const startButton = document.querySelector("#start-button");
const searchButton = document.querySelector("#search-any-button");
const flipButton = document.querySelector("#flip-button");

let countriesArray = [];

searchButton.addEventListener("click", () => {
  searchInput.addEventListener("input", function changeCountries() {
    const value = this.value.toLowerCase();
    countriesArray.forEach((country) => {
      const isVisible = country.name.toLowerCase().match(value);
      country.element.classList.toggle("hide", !isVisible);
    });
  });
});

startButton.addEventListener("click", () => {
  searchInput.addEventListener("input", function changeCountries() {
    const value = this.value.toLowerCase();
    countriesArray.forEach((country) => {
      const isVisible = country.name.toLowerCase().startsWith(value);
      country.element.classList.toggle("hide", !isVisible);
    });
  });
});

flipButton.addEventListener("click", () => {
  countriesArray = countriesArray
    .map((country) => country.name)
    .sort((a, b) => (a > b ? -1 : 1));
  console.log(countriesArray);
});

fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    countriesArray = data
      .map((country) => country.name.common)
      .sort((a, b) => (a > b ? 1 : -1))
      .map((country) => {
        const card = countriesTemplate.content.cloneNode(true);
        const countryDiv = card.querySelector(".country-div");
        countryDiv.textContent = country;
        countriesContainer.append(card);
        return { name: country, element: countryDiv };
      });
    const h2 = document.querySelector("h2");
    h2.textContent = `Total Number of Countries: ${data.length}`;
  });
