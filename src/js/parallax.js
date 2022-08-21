import { throttle } from "./throttle";

const backgrounds = document.querySelectorAll(".bg .parallax");
const backgrounds2 = document.querySelectorAll(".bg2 .parallax");

const applyParallax = (bg, coefficient) => {
  const section = bg.parentElement.parentElement;
  const H2 = section.querySelector("h2");
  const H2Y = H2.getBoundingClientRect().top;
  const offset = H2Y - section.getBoundingClientRect().top;
  bg.style.transform = `translateY(${-H2Y / coefficient + offset - 100}px)`;
};

const parallaxEffect = () => {
  backgrounds.forEach((bg) => applyParallax(bg, 4));
  backgrounds2.forEach((bg) => applyParallax(bg, 8));
};

setTimeout(parallaxEffect, 100);

const throttledParallaxEffect = throttle(parallaxEffect, 100);

window.addEventListener("scroll", throttledParallaxEffect);
