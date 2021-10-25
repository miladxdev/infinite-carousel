const carousel = document.querySelector(".carousel");
const prevBtn = document.querySelector(".btn-prev");
const nextBtn = document.querySelector(".btn-next");
const slides = document.querySelectorAll(".carousel img");

let counter = 0;
const imageSize = slides[0].clientWidth;

nextBtn.addEventListener("click", () => {
  counter++;
  carousel.style.transform = `translateX(${-imageSize * counter}px)`;
});

prevBtn.addEventListener("click", () => {
  counter--;
  carousel.style.transform = `translateX(${-imageSize * counter}px)`;
});

// carousel.addEventListener("transitionend", () => {
//   carousel.style.transform = "translateX(0)";
// });
