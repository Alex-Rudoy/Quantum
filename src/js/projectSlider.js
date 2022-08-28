const projectSlider = (slider) => {
  const prevButton = slider.querySelector(
    ".projectSlider_controls .slider_button_left"
  );
  const nextButton = slider.querySelector(
    ".projectSlider_controls .slider_button_right"
  );
  const sliderContent = slider.querySelector(".projectSlider_content");
  const fullScreenSlider = document.querySelector(
    `.fullScreenSlider[data-sliderid="${slider.getAttribute("data-sliderid")}"]`
  );
  const fullScreenSliderContent = fullScreenSlider.querySelector(
    ".fullScreenSlider_content"
  );
  const fullScreenPrevButton = fullScreenSlider.querySelector(
    ".fullScreenSlider_controls .slider_button_left"
  );
  const fullScreenNextButton = fullScreenSlider.querySelector(
    ".fullScreenSlider_controls .slider_button_right"
  );

  const numberOfSlides = sliderContent.children.length;

  let currentSlide = 0;
  let fullScreenCurrentSlide = 0;

  const animateSlider = () => {
    const slideToMove = sliderContent.children[currentSlide];
    prevButton.classList.remove("disabled");
    nextButton.classList.remove("disabled");
    if (currentSlide === 0) prevButton.classList.add("disabled");
    if (currentSlide === numberOfSlides - 1 - (window.innerWidth > 768 ? 1 : 0))
      nextButton.classList.add("disabled");
    sliderContent.style.transform = `translateX(-${slideToMove.offsetLeft}px)`;
  };

  const animateFullSlider = () => {
    fullScreenSlider.classList.add("visible");
    const slideToMove =
      fullScreenSliderContent.children[fullScreenCurrentSlide];

    for (let i = 0; i < numberOfSlides; i++) {
      fullScreenSliderContent.children[i].classList.remove("active");
    }
    fullScreenSliderContent.children[fullScreenCurrentSlide].classList.add(
      "active"
    );

    fullScreenPrevButton.classList.remove("disabled");
    fullScreenNextButton.classList.remove("disabled");
    if (fullScreenCurrentSlide === 0)
      fullScreenPrevButton.classList.add("disabled");
    if (fullScreenCurrentSlide === numberOfSlides - 1)
      fullScreenNextButton.classList.add("disabled");

    console.log(fullScreenCurrentSlide);
    console.log(slideToMove);

    fullScreenSliderContent.style.transform = `translateX(${
      -slideToMove.offsetLeft + (window.innerWidth / 100) * 15
    }px)`;

    console.log(slideToMove.offsetLeft - (window.innerWidth / 100) * 15);
    console.log("ololo");
  };

  animateSlider();

  prevButton.addEventListener("click", () => {
    if (currentSlide === 0) return;
    currentSlide--;
    animateSlider();
  });

  nextButton.addEventListener("click", () => {
    if (currentSlide === numberOfSlides - (window.innerWidth > 768 ? 1 : 0))
      return;
    currentSlide++;
    animateSlider();
  });

  fullScreenPrevButton.addEventListener("click", (e) => {
    e.stopPropagation();
    if (fullScreenCurrentSlide === 0) return;
    fullScreenCurrentSlide--;
    animateFullSlider();
  });

  fullScreenNextButton.addEventListener("click", (e) => {
    e.stopPropagation();
    if (fullScreenCurrentSlide === numberOfSlides - 1) return;
    fullScreenCurrentSlide++;
    animateFullSlider();
  });

  for (let i = 0; i < numberOfSlides; i++) {
    sliderContent.children[i].addEventListener("click", () => {
      if (window.innerWidth < 768) return;
      fullScreenCurrentSlide = i;
      animateFullSlider();
    });
  }

  fullScreenSlider.addEventListener("click", () => {
    fullScreenSlider.classList.remove("visible");
  });
};

const sliders = document.querySelectorAll(".projectSlider");
sliders.forEach((slider) => projectSlider(slider));
