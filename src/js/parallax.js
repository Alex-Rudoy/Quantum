import { throttle } from "./throttle";

const backgrounds = document.querySelectorAll(".bg");
const backgrounds2 = document.querySelectorAll(".bg2");
const parallax = document.querySelectorAll(".bg .parallax");
const parallax2 = document.querySelectorAll(".bg2 .parallax");

const parallaxEffect = () => {
  parallax.forEach((bg) => {
    const section = bg.parentElement.parentElement;
    const H2 = section.querySelector("h2");
    const H2Y = H2.getBoundingClientRect().top;
    const offset = H2Y - section.getBoundingClientRect().top;
    bg.style.transform = `translateY(${-H2Y / 4 + offset - 100}px)`;
  });
  parallax2.forEach((bg) => {
    const section = bg.parentElement.parentElement;
    const H2 = section.querySelector("h2");
    const H2Y = H2.getBoundingClientRect().top;
    const offset = H2Y - section.getBoundingClientRect().top;
    bg.style.transform = `translateY(${-H2Y / 8 + offset - 100}px)`;
  });
};

setTimeout(parallaxEffect, 100);

const throttledParallaxEffect = throttle(parallaxEffect, 100);

window.addEventListener("scroll", throttledParallaxEffect);

const deviceOrientationEffect = (event) => {
  backgrounds.forEach((bg) => {
    bg.style.transform = `translate(${event.gamma}px, ${event.beta - 35}px)`;
  });
  backgrounds2.forEach((bg) => {
    bg.style.transform = `translate(${event.gamma / 2}px, ${
      (event.beta - 35) / 2
    }px)`;
  });
};

const throttledDeviceOrientationEffect = throttle(deviceOrientationEffect, 100);

window.addEventListener("deviceorientation", throttledDeviceOrientationEffect);
