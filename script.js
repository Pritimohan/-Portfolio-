const moreBtn = document.querySelector("#moreBtn");
const dropBox = document.querySelector("#dropBox");
const closeBtn = document.querySelector("#closeBtn");
const dropBoxOptions = document.querySelectorAll(".hide");
moreBtn.addEventListener("click", () => {
  dropBox.style.display = "block";
});
closeBtn.addEventListener("click", () => {
  dropBox.style.display = "none";
});
dropBoxOptions.forEach((elm) => {
  elm.addEventListener("click", () => {
    dropBox.style.display = "none";
  });
});
