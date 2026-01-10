let mm = gsap.matchMedia();

mm.add("(min-width: 1400px)", () => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".section3",
      scroller: "body",
      start: "top 60%",
      end: "bottom 40%",
      scrub: true,
    },
  });
  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".ad-section",
      scroller: "body",
      start: "top 80%",
      end: "bottom 60%",
      scrub: true,
    },
  });
  let navbar = gsap.timeline();
  let el = gsap.timeline();
  navbar.from("nav .logo h1, .links a, .icons i", {
    y: -150,
    opacity: 0,
    duration: 0.8,
    delay: 0.5,
    stagger: 0.3,
  });

  el.from(
    ".hero-box .hero-img img",
    {
      x: -300,
      opacity: 0,
      duration: 0.9,
    },
    "a"
  );
  el.from(
    ".hero-box .hero-info h1, p, button",
    {
      x: 300,
      opacity: 0,
      duration: 0.9,
      stagger: 0.4,
    },
    "a"
  );

  tl.from(
    ".item1",
    {
      x: -300,
      opacity: 0,
      duration: 1,
    },
    "b"
  );
  tl.from(
    ".item2",
    {
      x: 300,
      opacity: 0,
      duration: 1,
    },
    "b"
  );
  tl.from(
    ".item3",
    {
      x: -300,
      duration: 1,
      opacity: 0,
    },
    "c"
  );
  tl.from(
    ".item4",
    {
      x: 300,
      duration: 1,
      opacity: 0,
    },
    "c"
  );
  tl.from(
    ".item5",
    {
      x: -300,
      duration: 1.3,
      opacity: 0,
    },
    "d"
  );
  tl.from(
    ".item6",
    {
      x: 300,
      duration: 1.3,
      opacity: 0,
    },
    "d"
  );
  tl2.from(".ad-section .ad-box", {
    x: 400,
    opacity: 0,
    duration: 1.2,
  });
});

mm.add("(max-width:768px)", () => {
  let navbar = gsap.timeline();
  let hero = gsap.timeline();
  let about = gsap.timeline();
  navbar.from(".section1 .logo h1, .links a, .icons i", {
    x: -200,
    opacity: 0,
    duration: 1.3,
    stagger: 0.3,
  });
  hero.from(
    ".hero-img img",
    {
      y: -800,
      duration: 1.2,
      opacity: 0,
    },
    "hero"
  );
  hero.from(
    ".hero-info h1, p, button",
    {
      y: 300,
      duration: 1.1,
      opacity: 0,
      stagger: 0.4,
    },
    "hero"
  );

  about.from(".item1", {
    y: -450,
    duration: 1.2,
    opacity: 0,
    scrollTrigger: {
      trigger: ".item1",
      scroller: "body",
      start: "top 40%",
      end: "top 15%",
      scrub: true,
    },
  });
  about.from(".item2", {
    y: -450,
    duration: 1.2,
    opacity: 0,
    scrollTrigger: {
      trigger: ".item2",
      scroller: "body",
      start: "top 40%",
      end: "top 15%",
      scrub: true,
    },
  });
  about.from(".item3", {
    y: -450,
    duration: 1.3,
    opacity: 0,
    scrollTrigger: {
      trigger: ".item3",
      scroller: "body",
      start: "top 40%",
      end: "top 15%",
      scrub: true,
    },
  });
  about.from(".item4", {
    y: -450,
    duration: 1.3,
    opacity: 0,
    scrollTrigger: {
      trigger: ".item4",
      scroller: "body",
      start: "top 40%",
      end: "top 15%",
      scrub: true,
    },
  });
  about.from(".item5", {
    y: -450,
    opacity: 0,
    duration: 0.9,
    scrollTrigger: {
      trigger: ".item5",
      scroller: "body",
      start: "top 40%",
      end: "top 15%",
      scrub: true,
    },
  });
  about.from(".item6", {
    y: -450,
    opacity: 0,
    duration: 0.9,
    scrollTrigger: {
      trigger: ".item6",
      scroller: "body",
      start: "top 40%",
      end: "top 15%",
      scrub: true,
    },
  });

  let ads = gsap.timeline();
  gsap.from(".ad-box img, .ad-theory h1,.ad-theory p", {
    y: -450,
    opacity: 0,
    duration: 0.9,
    stagger: 0.5,
    scrollTrigger: {
      trigger: ".ad-section",
      scroller: "body",
      start: "top 40%",
      end: "top 15%",
      scrub: true,
    },
  });
});

// let ads = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".ad-box",
//     scroller: "body",
//     start: "top 60%",
//     end: "top 30%",
//     scrub: true,
//   },
// });
// ads.from(".ad-box img", {
//   y: -450,
//   opacity: 0,
//   duration: 0.9,
// });
