
const tl = gsap.timeline();

tl.fromTo(".backImage",{
  opacity: 0,
  scale: 1.5,
},{
  delay: .5,
  scale: 1,
  duration: 2.5,
  opacity: 1,
})
tl.to(".myHeading__text", {
  y: "0%",
  duration: 0.7,
  stagger: 0.25,
}, "-=1.5");
tl.fromTo('.subtext', { opacity: 0, }, { opacity: 1, duration: 2, }, "-=1")
tl.to('.ctaContainer__btn', { ease: Bounce.easeOut, y: "0%", opacity: .8, duration: 1, }, "-=1.75")
tl.to('.ctaContainer', { overflow: "visible" }, "-=1.4")

// gsap.to(".myHeading__text", { // selector text, Array, or object
//   x: 100, // any properties (not limited to CSS)
//   duration: 1, // seconds
//   delay: 0.5,
//   ease: "power2.inOut",
//   stagger: 0.1, // stagger start times
//   overwrite: "auto", // default is false
//   repeat: 2, // number of repeats (-1 for infinite)
//   yoyo: true, // if true > A-B-B-A, if false > A-B-A-B
//   yoyoEase: true, // or ease like "power2"
// });