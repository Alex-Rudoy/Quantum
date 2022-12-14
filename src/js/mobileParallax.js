const backgrounds = document.querySelectorAll(".bg");
const backgrounds2 = document.querySelectorAll(".bg2");

window.addEventListener("deviceorientation", (event) => {
  backgrounds.forEach((bg) => {
    bg.style.transform = `translate(${event.gamma}px, ${event.beta - 35}px)`;
  });
  backgrounds2.forEach((bg) => {
    bg.style.transform = `translate(${event.gamma / 2}px, ${
      (event.beta - 35) / 2
    }px)`;
  });
});
