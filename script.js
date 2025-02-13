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


// --------------------- PhotoChange Animation ---------------------
{
  const photo = document.querySelector("#photo");
  const photoUrls = [
    "img/profilePhoto2.jpg",
    "img/profilePhoto3.jpg",
    "img/profilePhoto4.jpg",
    "img/profilePhoto5.jpg",
  ]
  let i = 0;
  setInterval(() => { 
    photo.src = photoUrls[i];
    i = (i + 1) % photoUrls.length;
  }, 900);  
}


