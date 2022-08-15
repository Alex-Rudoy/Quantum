let goalsShown = 0;
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);

        if (entry.target.classList.contains("video_trigger")) {
          document.querySelector("video").classList.add("visible");
        }

        if (entry.target.classList.contains("goals_1")) {
          goalsShown = Math.max(goalsShown, 1);
          document.querySelector(".quarter_1").classList.add("visible");
          document.querySelector(".dot_1").classList.add("visible");
          document.querySelector(".line").classList.add("line_1");
        }

        if (entry.target.classList.contains("goals_2")) {
          goalsShown = Math.max(goalsShown, 2);
          document.querySelector(".quarter_2").classList.add("visible");
          document.querySelector(".dot_2").classList.add("visible");
          document.querySelector(".line").classList.add("line_2");
        }

        if (entry.target.classList.contains("goals_3")) {
          goalsShown = Math.max(goalsShown, 3);
          document.querySelector(".quarter_3").classList.add("visible");
          document.querySelector(".dot_3").classList.add("visible");
          document.querySelector(".line").classList.add("line_3");
        }

        document.querySelector(".quarter_1").classList.remove("active");
        document.querySelector(".quarter_2").classList.remove("active");
        document.querySelector(".quarter_3").classList.remove("active");
        document
          .querySelector(`.quarter_${goalsShown}`)
          .classList.add("active");
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
    threshold: 0.2,
  }
);

const toAnimate = document.querySelectorAll(".toAnimate");
toAnimate.forEach((item) => observer.observe(item));

const blobs = document.querySelectorAll(".blob");
blobs.forEach((item) => blobserver.observe(item));
