const slider = document.querySelector(".slider");

const prevButton = document.getElementById("slider_button_left");
const nextButton = document.getElementById("slider_button_right");

let currentSlide = 1;

const animateSlider = () => {
  const slideToMove = document.getElementById(`slide${currentSlide}`);

  prevButton.classList.remove("disabled");
  nextButton.classList.remove("disabled");
  if (currentSlide === 1) prevButton.classList.add("disabled");
  if (currentSlide === 3) nextButton.classList.add("disabled");
  slider.style.transform = `translateX(${-slideToMove.offsetLeft}px)`;
};

animateSlider();

prevButton.addEventListener("click", () => {
  if (currentSlide === 1) return;
  currentSlide--;
  animateSlider();
});

nextButton.addEventListener("click", () => {
  if (currentSlide === 3) return;
  currentSlide++;
  animateSlider();
});
