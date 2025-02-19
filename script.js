const heroForm = document.querySelector(".hero__form");
const heroErrorMessages = document.querySelectorAll(".error-message");

const getAccessForm = document.querySelector(".get-access__form");
const getAccessInfo = document.querySelector(".get-access__check-email");
const getAccessInput = document.querySelector(".get-access__input");

function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

heroForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = heroForm.querySelector("input");
  const isValid = isValidEmail(input.value);
  heroErrorMessages.forEach((error) => {
    error.style.visibility = isValid ? "hidden" : "visible";
  });
});

getAccessForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const isValid = isValidEmail(getAccessInput.value);
  getAccessInfo.style.visibility = isValid ? "hidden" : "visible";
});
