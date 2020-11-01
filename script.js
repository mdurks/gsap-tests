gsap.to(".myHeading", { // selector text, Array, or object
  x: 100, // any properties (not limited to CSS)
  duration: 1, // seconds
  delay: 0.5,
  ease: "power2.inOut",
  stagger: 0.1, // stagger start times
  overwrite: "auto", // default is false
  repeat: 2, // number of repeats (-1 for infinite)
  yoyo: true, // if true > A-B-B-A, if false > A-B-A-B
  yoyoEase: true, // or ease like "power2"
});