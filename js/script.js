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
function disableScroll() {
  // Get the current page scroll position
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  (scrollLeft = window.pageXOffset || document.documentElement.scrollLeft),
    // if any scroll is attempted, set this to the previous value
    (window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    });
}
!isScroll ? disableScroll() : "";
window.onresize = function () {
  document.querySelector(".bar").classList.remove("active");
  document.querySelector(".nav-list").classList.remove("active");
  removeStart(".star");
  createStart("star");
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

// append star
window.onload = function () {
  createStart("star");
};
function createStart(className) {
  let width = window.innerWidth;
  let height = document.querySelector("header").offsetHeight;
  for (let i = 0; i < width; i += 50) {
    for (let j = 0; j < height; j += 50) {
      let star = document.createElement("span");
      star.className = className;
      star.style.left = Math.round(Math.random() * width) + "px";
      star.style.top = Math.round(Math.random() * height) + "px";
      document.querySelector("header").appendChild(star);
    }
  }
}
function removeStart(className) {
  document.querySelectorAll(className).forEach((element) => {
    element.remove();
  });
}
