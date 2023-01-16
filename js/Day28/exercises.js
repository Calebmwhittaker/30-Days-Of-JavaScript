const inputs = document.querySelector(".inputs");
const addPlayerButton = document.querySelector(".add-player");
const usersTemplate = document.querySelector("[data-users-template]");
const userSection = document.querySelector(".users-section");
const firstNameInput = document.querySelector(".first-name-input");
const lastNameInput = document.querySelector(".last-name-input");
const countryInput = document.querySelector(".country-input");
const scoreInput = document.querySelector(".score-input");

function dateTime() {
  const date = Date.now();
  const newDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
  }).format(date);
  return newDate;
}

addPlayerButton.addEventListener("click", () => {
  if (firstNameInput.value && lastNameInput.value && countryInput.value) {
    const pattern = /^\d+$/gi;
    if (!scoreInput.value.match(pattern)) {
      const error = document.createElement("p");
      error.textContent = "Please type a numerical value for a score";
      inputs.after(error);
      scoreInput.addEventListener("change", () => {
        error.textContent = "";
      });
    } else {
      const card = usersTemplate.content.cloneNode(true).children[0];
      const name = card.querySelector(".name");
      const firstName = name.querySelector(".first-name");
      const lastName = name.querySelector(".last-name");
      const date = card.querySelector(".date");
      const country = card.querySelector(".country");
      const score = card.querySelector(".score");
      let scoreValue = +scoreInput.value;
      const buttons = card.querySelector(".buttons");
      const deleteButton = buttons.querySelector(".delete");
      const addButton = buttons.querySelector(".add-5");
      const removeButton = buttons.querySelector(".remove-5");

      firstName.textContent = firstNameInput.value;
      date.textContent = dateTime();
      lastName.textContent = lastNameInput.value;
      country.textContent = countryInput.value;
      score.textContent = scoreInput.value;

      deleteButton.addEventListener("click", () => {
        card.remove();
      });

      addButton.addEventListener("click", () => {
        scoreValue += 5;
        score.textContent = scoreValue;
      });

      removeButton.addEventListener("click", () => {
        scoreValue -= 5;
        score.textContent = scoreValue;
      });

      userSection.append(card);
    }
  } else {
    const error = document.createElement("p");
    error.textContent = "All Fields Required";
    inputs.after(error);
    inputs.addEventListener("change", () => {
      error.textContent = "";
    });
  }
});
