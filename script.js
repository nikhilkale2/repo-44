let mm = gsap.matchMedia();

let el = gsap.timeline();
el.from(".logo h1", {
  y: -180,
  opacity: 0,
  duration: 0.9,
});
el.from(".menuicon #menu", {
  y: -180,
  duration: 0.9,
  opacity: 0,
});
mm.add("(min-width:1440px)", () => {
  let el = gsap.timeline();

  el.from(".links li", {
    y: -200,
    opacity: 0,
    duration: 0.9,
    stagger: 0.3,
  });
  el.from(".icons i", {
    y: -150,
    opacity: 0,
    duration: 0.4,
    stagger: 0.2,
  });
});
mm.add("(max-width:1024px)", () => {
  let el = gsap.timeline();

  el.to(".links", {
    left: 0,
    duration: 0.6,
  });
  el.from(".logo-h2 img", {
    x: -100,
    duration: 0.7,
    opacity: 0,
  });
  el.from(".links li", {
    x: -100,
    opacity: 0,
    duration: 0.6,
    stagger: 0.3,
  });
  el.from(".icons i", {
    y: 100,
    opacity: 0,
    duration: 0.5,
    stagger: 0.3,
  });
  el.from(".closebtn i", {
    scale: 2,
    duration: 0.4,
    opacity: 0,
  });

  el.pause();

  document.querySelector("#menu").addEventListener("click", function () {
    el.play();
  });

  document.querySelector(".closebtn i").addEventListener("click", function () {
    el.reverse();
  });

  return () => {
    el.kill();
  };
});

// mm.add("(min-width:769px) and (max-width:1024px)", () => {
//   let el = gsap.timeline();

//   el.from(".links li", {
//     y: -200,
//     opacity: 0,
//     duration: 0.9,
//     stagger: 0.3,
//   });
//   el.from(".icons i", {
//     y: -150,
//     opacity: 0,
//     duration: 0.4,
//     stagger: 0.2,
//   });
// });
