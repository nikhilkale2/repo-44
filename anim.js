let mm = gsap.matchMedia();

mm.add("(min-width: 1400px)", () => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".section3",
      scroller: "body",
      start: "top 60%",
      end: "bottom 40%",
      scrub: true,
      markers: true,
    },
  });
  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".ad-section",
      scroller: "body",
      start: "top 80%",
      end: "bottom 60%",
      scrub: true,
      markers: true,
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
    x: -400,
    opacity: 0,
    duration: 1.5,
  });
});
