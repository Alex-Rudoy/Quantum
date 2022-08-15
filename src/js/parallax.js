const backgrounds = document.querySelectorAll(".bg");

document.addEventListener("mousemove", (event) => {
  backgrounds.forEach((bg) => {
    bg.style.transform = `translate(${event.clientX / 10}px, ${
      event.clientY / 10
    }px)`;
  });
});

window.addEventListener("deviceorientation", (event) => {
  backgrounds.forEach((bg) => {
    bg.style.transform = `translate(${event.beta / 10}px, ${
      event.gamma / 10
    }px)`;
  });
});
