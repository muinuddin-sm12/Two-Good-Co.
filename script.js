// locomotive scoll
const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});


// Moving cursor
const playButtonAnimation = () => {
  const videoContainer = document.getElementById("video-container");
  const playButton = document.getElementById("play");
  videoContainer.addEventListener("mouseenter", function () {
    gsap.to(playButton, {
      scale: 1,
      opacity: 1,
    });
  });
  videoContainer.addEventListener("mouseleave", function () {
    gsap.to(playButton, {
      scale: 0,
      opacity: 0,
    });
  });
  videoContainer.addEventListener("mousemove", function (e) {
    gsap.to(playButton, {
      left: e.x - 75 ,
      top: e.y - 60,
    });
  });
};
playButtonAnimation();

const headingAnimation = () => {
    gsap.from('#heading', {
        y:100,
        opacity: 0,
        delay: .5,
        duration: 0.9,
        stagger: 0.3
    })
    gsap.from('#video-container', {
        scale: .9,
        opacity: 0,
        delay: 1.3,
        duration: 0.5
    })
}
headingAnimation()