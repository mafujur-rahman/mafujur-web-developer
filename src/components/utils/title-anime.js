import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

/**
 * Reusable function to animate a title
 * @param {HTMLElement} element - The DOM element to animate
 */
export const titleAnimation = (element) => {
  if (!element) return;

  const splitTitle = new SplitText(element, { type: "lines, words" });
  gsap.set(element, { perspective: 400 });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: element,
      start: "top 90%",
      end: "bottom 60%",
      scrub: false,
      toggleActions: "play none none none",
    },
  });

  tl.from(splitTitle.lines, {
    duration: 1,
    delay: 0.3,
    opacity: 0,
    rotationX: -80,
    transformOrigin: "top center -50",
    force3D: true,
    stagger: 0.1,
  });
};
