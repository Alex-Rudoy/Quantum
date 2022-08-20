const video = document.querySelector("video");
let triggered = false;

const playVideo = async () => {
  if (triggered) return;
  try {
    await video.play();
    document.querySelector(".bgIntro img").remove();
  } catch (e) {
    // do nothing
  }
};

playVideo();

document.addEventListener("click", playVideo);
document.addEventListener("touchstart", playVideo);
