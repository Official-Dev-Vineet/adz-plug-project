let isScroll = true;
let classes = document.querySelector(".nav-list");
window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 0);
});
document.querySelector(".bar").addEventListener("click", function () {
  document.querySelector(".bar").classList.toggle("active");
  document.querySelector(".nav-list").classList.toggle("active");
  classes.className.includes("active") ? (isScroll = false) : (isScroll = true);
});
window.onresize = function () {
  document.querySelector(".bar").classList.remove("active");
  document.querySelector(".nav-list").classList.remove("active");
};
const waves = document.querySelectorAll(".waves .wave");
// prevent memory consuming while user is not active
window.onblur = function () {
  waves.forEach((element) => {
    element.style = "animation-play-state:paused";
  });
};
window.onfocus = function () {
  waves.forEach((element) => {
    element.style = "animation-play-state:running";
  });
};

