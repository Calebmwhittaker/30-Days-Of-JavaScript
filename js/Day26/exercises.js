//DAY 26 EXERCISES
//LEVEL 1
//1.
async function fetchData() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const data = await response.json();
  const json = JSON.stringify(data, undefined, 4);
  const countriesObj = JSON.parse(json, undefined, 4);
  document.body.style.textAlign = "center";
  const header = document.createElement("header");
  const headerDiv = document.createElement("div");
  headerDiv.style.display = "inline-block";
  header.style.backgroundImage = 'url("./js/Day26/images/globe.jpeg")';
  header.style.opacity = "85%";
  header.style.height = "600px";
  header.style.display = "flex";
  header.style.alignItems = "center";
  header.style.justifyContent = "center";
  const h1 = document.createElement("h1");
  h1.textContent = "WORLD COUNTRIES LIST";
  h1.style.color = "white";
  headerDiv.appendChild(h1);
  const h2 = document.createElement("h2");
  h2.textContent = `Total number of countries: ${countriesObj.length} `;
  h2.style.color = "white";
  h2.style.marginBottom = "20px";
  h2.style.fontSize = "20px";
  headerDiv.appendChild(h2);
  header.appendChild(headerDiv);
  document.body.appendChild(header);
  const startWordButton = document.createElement("button");
  startWordButton.textContent = "STARTING WORD";
  headerDiv.appendChild(startWordButton);
  const searchWordButton = document.createElement("button");
  searchWordButton.textContent = "SEARCH WITH ANY WORD";
  headerDiv.appendChild(searchWordButton);
  const flipOrderButton = document.createElement("button");
  flipOrderButton.textContent = `=>`;
  headerDiv.appendChild(flipOrderButton);
  const searchBarInput = document.createElement("input");
  searchBarInput.setAttribute("placeholder", "Search Country");
  searchBarInput.style.display = "block";
  searchBarInput.style.width = "100%";
  searchBarInput.style.marginTop = "20px";
  headerDiv.appendChild(searchBarInput);
  const countriesSection = document.createElement("section");
  countriesSection.setAttribute("class", "row m-0 justify-content-around");

  let countriesArray = [];
  for (const country of countriesObj) {
    let { name } = country;
    let { common } = name;
    countriesArray.push(common);
  }
  countriesArray.sort((a, b) => (a < b ? -1 : 1));
  for (const country of countriesArray) {
    const countryDiv = document.createElement("div");
    countryDiv.setAttribute("class", "col-2 mx-1 card justify-content-center");
    countryDiv.style.width = "180px";
    countryDiv.style.height = "120px";
    countryDiv.textContent = `${country}`;
    countriesSection.appendChild(countryDiv);
  }
  document.body.appendChild(countriesSection);

  searchBarInput.addEventListener("input", function changeCountries() {
    const countriesSectionInput = document.createElement("section");
    countriesSectionInput.setAttribute(
      "class",
      "row m-0 justify-content-around"
    );
    for (const country of countriesArray) {
      if (country.match(this.value)) {
        countriesSection.remove();
        countriesSectionInput.remove();
        const countryDiv = document.createElement("div");
        countryDiv.setAttribute(
          "class",
          "col-2 mx-1 card justify-content-center"
        );
        countryDiv.style.width = "180px";
        countryDiv.style.height = "120px";
        countryDiv.textContent = `${country}`;
        countriesSectionInput.appendChild(countryDiv);
      }
    }
    document.body.appendChild(countriesSectionInput);
  });
}
fetchData();
