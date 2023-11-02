import { jsonEN } from "./languageJson/jsonEN.js";
import { jsonAR } from "./languageJson/jsonAR.js";
const languageBtn = document.querySelector(".language");

const clearError = () => {
  let errors = document.querySelectorAll(".error");
  let inputs = document.querySelectorAll("form .rem__error");
  errors.forEach((ele) => {
    ele.textContent = "";
  });
  inputs.forEach((ele) => {
    ele.parentElement.classList.remove("bg-color");
    ele.classList.remove("red");
  });
};

const arabicDirection = () => {
  const head = document.getElementsByTagName("head");
  const arabicStyle = document.createElement("link");
  arabicStyle.rel = "stylesheet";
  arabicStyle.href = "../assets/CSS/arabic-style.css";
  arabicStyle.classList.add("arabic-style");
  head[0].appendChild(arabicStyle);
};
const removeArabicDirection = () => {
  const head = document.getElementsByTagName("head");
  const arabicStyle = document.querySelector(".arabic-style");
  if (arabicStyle) head[0].removeChild(arabicStyle);
};

const changeLanguage = () => {
  if (window.location.pathname === "/contactus/index.html") clearError();
  if (languageBtn && languageBtn.textContent === "English") {
    for (const key of Object.keys(jsonEN)) {
      const el = document.querySelector(`.${key}`);
      if (el) el.textContent = jsonEN[key];
    }
    localStorage.setItem("language", "English");
    removeArabicDirection();
  } else {
    for (const key of Object.keys(jsonAR)) {
      const el = document.querySelector(`.${key}`);
      if (el) el.textContent = jsonAR[key];
    }
    localStorage.setItem("language", "العربية");
    arabicDirection();
  }
};
if (languageBtn) languageBtn.addEventListener("click", changeLanguage);

//....................................
if (localStorage.getItem("language")) {
  if (languageBtn) languageBtn.textContent = localStorage.getItem("language");
  changeLanguage();
} else {
  localStorage.setItem("language", "English");
  languageBtn.textContent = "العربية";
  changeLanguage();
}
