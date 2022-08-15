const backgrounds = document.querySelectorAll(".bg");
const backgrounds2 = document.querySelectorAll(".bg2");

console.log(backgrounds);

document.addEventListener("mousemove", (event) => {
  backgrounds.forEach((bg) => {
    bg.style.transform = `translate(${
      event.clientX / 10 - window.innerWidth / 20
    }px, ${event.clientY / 10 - window.innerHeight / 20}px)`;
  });
  backgrounds2.forEach((bg) => {
    bg.style.transform = `translate(${
      event.clientX / 20 - window.innerWidth / 40
    }px, ${event.clientY / 20 - window.innerHeight / 40}px)`;
  });
});

// move background based on mobile phone tilt
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
