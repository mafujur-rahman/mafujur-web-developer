import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Reusable function to animate content moving down and back up smoothly
 * @param {HTMLElement} element - The DOM element to animate
 * @param {Object} options - Optional settings
 */
export const scrollContentAnimation = (element, options = {}) => {
  if (!element) return;

  const {
    distance = 50, // how much the content moves down
    duration = 1,  // animation duration
    delay = 0.3,   // small delay before animation starts
  } = options;

  gsap.set(element, { y: distance, opacity: 0 });

  gsap.to(element, {
    y: 0,
    opacity: 1,
    duration: duration,
    delay: delay,
    ease: "power2.out",
    scrollTrigger: {
      trigger: element,
      start: "top 90%",
      end: "bottom 60%",
      toggleActions: "play none none none",
    },
  });
};
