let goalsShown = 0;
let updateQuarter = false;
const quarter1 = document.querySelector(".quarter_1");
const quarter2 = document.querySelector(".quarter_2");
const quarter3 = document.querySelector(".quarter_3");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);

        if (entry.target.classList.contains("goals_1")) {
          goalsShown = Math.max(goalsShown, 1);
          updateQuarter = true;
          quarter1.classList.add("visible");
          document.querySelector(".dot_1").classList.add("visible");
          document.querySelector(".line").classList.add("line_1");
        }

        if (entry.target.classList.contains("goals_2")) {
          goalsShown = Math.max(goalsShown, 2);
          updateQuarter = true;
          quarter2.classList.add("visible");
          document.querySelector(".dot_2").classList.add("visible");
          document.querySelector(".line").classList.add("line_2");
        }

        if (entry.target.classList.contains("goals_3")) {
          goalsShown = Math.max(goalsShown, 3);
          updateQuarter = true;
          quarter3.classList.add("visible");
          document.querySelector(".dot_3").classList.add("visible");
          document.querySelector(".line").classList.add("line_3");
        }

        if (updateQuarter) {
          quarter1.classList.remove("gradientText", "accent");
          quarter2.classList.remove("gradientText", "accent");
          quarter3.classList.remove("gradientText", "accent");
          document
            .querySelector(`.quarter_${goalsShown}`)
            .classList.add("gradientText", "accent");
          updateQuarter = false;
        }
      }
    });
  },
  {
    threshold: 0.5,
  }
);

const blobserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
  }
);

const slider_observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("slider_visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
  }
);

const toAnimate = document.querySelectorAll(".toAnimate");
toAnimate.forEach((item) => observer.observe(item));

const blobs = document.querySelectorAll(".blob");
blobs.forEach((item) => blobserver.observe(item));

const slider = document.querySelector(".slider");
slider_observer.observe(slider);
