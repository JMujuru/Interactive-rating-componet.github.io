const mainContainer = document.querySelector(".main-container");
const responseContainer = document.querySelector(".response-container");
const submit = document.getElementById("submit");
const changeRating = document.getElementById("change-rating");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn")


submit.addEventListener("click", () => {
  if (!rating.innerHTML) {
    alert("You haven't chosen a rating");
    return;
  }
  responseContainer.classList.remove("hidden");
  mainContainer.style.display = "none";
});

changeRating.addEventListener("click", () => {
  responseContainer.classList.add("hidden");
  mainContainer.style.display = "block";
  rating.innerHTML = ""; 
});

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
  });
});
