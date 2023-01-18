const form = document.querySelector("form");
const firstNameInput = document.querySelector("#first-name");
const lastNameInput = document.querySelector("#last-name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const phoneNumberInput = document.querySelector("#phone");
const bioInput = document.querySelector("#bio");
const button = document.querySelector("button");
const allInputs = document.querySelectorAll("input");

const firstNamePara = document.querySelector(".first-name-paragraph");
const lastNamePara = document.querySelector(".last-name-paragraph");
const emailPara = document.querySelector(".email-paragraph");
const passwordPara = document.querySelector(".password-paragraph");
const phoneNumberPara = document.querySelector(".phone-paragraph");
const bioPara = document.querySelector(".bio-paragraph");

firstNameInput.addEventListener("input", (e) => {
  const regex = /^[\w\d]{3,16}/;
  if (regex.test(e.target.value)) {
    firstNamePara.classList.add("hide");
    firstNameInput.style.borderColor = "green";
  } else {
    firstNamePara.classList.remove("hide");
    firstNameInput.style.borderColor = "red";
  }
});

lastNameInput.addEventListener("input", (e) => {
  const regex = /^[\w\d]{3,16}/;
  if (regex.test(e.target.value)) {
    lastNamePara.classList.add("hide");
    lastNameInput.style.borderColor = "green";
  } else {
    lastNamePara.classList.remove("hide");
    lastNameInput.style.borderColor = "red";
  }
});

emailInput.addEventListener("input", (e) => {
  const regex = /^[\w\d]{3,16}@[\w]{3,10}\.com/;
  if (regex.test(e.target.value)) {
    emailPara.classList.add("hide");
    emailInput.style.borderColor = "green";
  } else {
    emailPara.classList.remove("hide");
    emailInput.style.borderColor = "red";
  }
});

passwordInput.addEventListener("input", (e) => {
  const regex = /^[\w\d@,_-]{6,20}$/;
  if (regex.test(e.target.value)) {
    passwordPara.classList.add("hide");
    passwordInput.style.borderColor = "green";
  } else {
    passwordPara.classList.remove("hide");
    passwordInput.style.borderColor = "red";
  }
});

phoneNumberInput.addEventListener("input", (e) => {
  const regex = /^\d{3}-\d{3}-\d{4}/;
  if (regex.test(e.target.value)) {
    phoneNumberPara.classList.add("hide");
    phoneNumberInput.style.borderColor = "green";
  } else {
    phoneNumberPara.classList.remove("hide");
    phoneNumberInput.style.borderColor = "red";
  }
});

bioInput.addEventListener("input", (e) => {
  const regex = /^[a-z_ -]{8,50}$/;
  if (regex.test(e.target.value)) {
    bioPara.classList.add("hide");
    bioInput.style.borderColor = "green";
  } else {
    bioPara.classList.remove("hide");
    bioInput.style.borderColor = "red";
  }
});

button.addEventListener("click", () => {
  switch (true) {
    case firstNameInput.value === "":
      firstNamePara.classList.remove("hide");
      break;
    case lastNameInput.value === "":
      lastNamePara.classList.remove("hide");
      break;
    case emailInput.value === "":
      emailPara.classList.remove("hide");
      break;
    case passwordInput.value === "":
      passwordPara.classList.remove("hide");
      break;
    case phoneNumberInput.value === "":
      phoneNumberPara.classList.remove("hide");
    case bioInput.value === "":
      bioPara.classList.remove("hide");
      break;
    default:
      break;
  }
});

document.addEventListener("change", () => {
  for (let i = 0; i < allInputs.length; i++) {
    if (allInputs[i].value !== "") {
      if (allInputs[allInputs.length - 1].value !== "") {
        button.classList.remove("btn-dark");
        button.classList.add("btn-success");
      }
    } else {
      break;
    }
  }
});
