"use client";

import React, { useEffect, useRef, useState } from "react";
import { titleAnimation } from "../utils/title-anime";
import { gsap } from "gsap";

const Brand = () => {
  const titleRef = useRef(null);
  const peraRef = useRef(null);
  const btnRef = useRef(null);
  const buttonIconRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Animate titles separately, without affecting button container
    if (titleRef.current) titleAnimation(titleRef.current);
    if (peraRef.current) titleAnimation(peraRef.current);
  }, []);

  // Rotate SVG on hover
  useEffect(() => {
    if (buttonIconRef.current) {
      gsap.to(buttonIconRef.current, {
        rotation: isHovered ? 0 : -45,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [isHovered]);

  return (
    <section
      id="brands"
      className="bg-black text-[#f5f7f5] pt-[100px] lg:pt-[140px]  z-10"
    >
      <div className="flex flex-col lg:flex-row justify-between items-start lg:gap-20 xl:gap-8 section-padding 2xl:max-w-[1500px] 2xl:mx-auto">
        {/* TITLE */}
        <div className="flex flex-col justify-start">
          <h1
            ref={titleRef}
            className="text-[45px] md:text-[55px] xl:text-[90px] font-bold leading-none lg:max-w-3xl xl:max-w-4xl 2xl:max-w-3xl"
          >
            Some of the impressive Projects I have
          </h1>
        </div>

        {/* DESCRIPTION + BUTTON */}
        <div className="flex flex-col justify-start lg:items-start">
          <p
            ref={peraRef}
            className="text-[18px] text-[#f5f7f5cc] leading-relaxed my-[20px] lg:my-0 max-w-2xl lg:max-w-sm xl:max-w-2xl text-left"
          >
            These are just a few Projects that I personally enjoy the most. I would
            be glad to show you a bunch of other Projects that I have done so far.
            Would you like to have a look at them?
          </p>

          {/* Button + Text */}
          <div className="inline-flex items-center gap-4 mt-5">
            {/* Text */}
            <span
              className="common-btn-size text-[#f5f7f5] transition-colors duration-300 cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              All Projects
            </span>

            {/* Circle button with SVG */}
            <button
              className={`rounded-full w-16 h-16 flex justify-center items-center text-3xl flex-shrink-0 border-2 border-[#f5f7f5] transition-colors duration-300 ${
                isHovered ? "bg-white text-black" : "bg-transparent text-[#f5f7f5]"
              }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <svg
                ref={buttonIconRef}
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="26"
                viewBox="0 0 36 26"
                fill="none"
                className="transition-transform duration-300 ease-out"
                style={{ transform: `rotate(-45deg)` }}
              >
                <path
                  d="M20.5078 0C20.5051 7.18628 27.3242 13.0013 35.754 13.0013M35.7432 12.999C27.3134 12.999 20.49 18.814 20.4873 26.0003M0.75 13.0039H33.3462"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brand;