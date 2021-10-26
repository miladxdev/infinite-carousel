// DOM elements
const carousel = document.querySelector(".carousel");
const prevBtn = document.querySelector(".btn-prev");
const nextBtn = document.querySelector(".btn-next");
const slides = document.querySelectorAll(".carousel img");

// variables
const imageSize = slides[0].clientWidth;
let direction = "";

// next button event
nextBtn.addEventListener("click", () => {
  if (direction === "left") {
    // to fix image order
    carousel.prepend(carousel.lastElementChild);
  }

  direction = "right";
  carousel.style.justifyContent = "flex-start";
  carousel.style.transform = `translateX(${-imageSize}px)`;
});

// prev button event
prevBtn.addEventListener("click", () => {
  if (direction === "right") {
    carousel.appendChild(carousel.firstElementChild);
  }

  direction = "left";
  carousel.style.justifyContent = "flex-end";
  carousel.style.transform = `translateX(${+imageSize}px)`;
});

carousel.addEventListener("transitionend", function () {
  if (direction === "right") {
    this.appendChild(this.firstElementChild);
  } else {
    this.prepend(this.lastElementChild);
  }
  // reset transition
  this.style.transition = "none";
  // reset because we dont want to see translaetX to 0
  this.style.transform = "translateX(0)";
  setTimeout(() => {
    // set transition to "none" and after 1ms to "all 0.5s"
    // if you dont use timeout(), transition "none" doesn't work!!!
    this.style.transition = "all 0.5s";
  }, 1);
});
