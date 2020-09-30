const btn = document.querySelector("button");
const popup = document.querySelector(".popup-wrapper");
const popupclose = document.querySelector(".popup-close");

btn.addEventListener("click", () => {
  popup.style.display = "block";
});
popupclose.addEventListener("click", () => {
  popup.style.display = "none";
});
