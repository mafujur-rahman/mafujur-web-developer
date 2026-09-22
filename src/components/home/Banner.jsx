"use client";
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowDownLong } from "react-icons/fa6";
import { MdWavingHand } from "react-icons/md";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { titleAnimation } from '../utils/title-anime';
import { scrollContentAnimation } from '../utils/content-anime';

gsap.registerPlugin(ScrollToPlugin);

const Banner = () => {
  const helloRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const socialRef = useRef(null);

  useEffect(() => {
    titleAnimation(titleRef.current);
  }, []);

  useEffect(() => {
    scrollContentAnimation(contentRef.current, { distance: 50, duration: 1, delay: 0.5 });
    scrollContentAnimation(socialRef.current, { distance: 50, duration: 1, delay: 0.5 });
  }, []);

  useEffect(() => {
    const wrapLetters = (element) => {
      element.innerHTML = element.textContent
        .split("")
        .map(char => {
          if (char === " ") return `<span class="letter">&nbsp;</span>`;
          return `<span class="letter">${char}</span>`;
        })
        .join("");
    };

    const helloText = helloRef.current;
    wrapLetters(helloText);

    const tl = gsap.timeline();
    tl.from(helloText.querySelectorAll(".letter"), {
      x: 50,
      opacity: 0,
      stagger: 0.05,
      duration: 0.8,
      ease: "power2.out",
    });
  }, []);

  // Scroll down on arrow click
  const handleScrollDown = () => {
    const scrollDistance = window.innerHeight;
    gsap.to(window, {
      duration: 1.2,
      ease: "power2.inOut",
      scrollTo: scrollDistance,
    });
  };

  return (
    <section id='home' className="bg-black text-white h-auto  overflow-hidden ">
      <div className="flex flex-col lg:flex-row section-padding 2xl:max-w-[1800px] 2xl:mx-auto">

        {/* Left Image */}
        <div className="w-full lg:w-1/2 relative h-screen md:mt-16">
          <Image
            src="/images/navbar.png"
            alt="Fardeen Ahmed"
            fill
            className="object-cover"
            priority
          />
        </div>



        {/* Right Text */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between pt-[100px] lg:pt-[140px] xl:pt-[140px]">
          <div className="flex flex-col justify-center flex-1">

            <div className='flex items-center justify-start overflow-hidden'>
              <span className="mr-2">
                <img
                  src="/images/title-icon.png"
                  alt="Waving hand"
                  className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                />
              </span>
              <p
                ref={helloRef}
                className="text-[22px]  md:text-[30px] lg:text-[26px] xl:text-[30px] text-[#f5f7f5] tracking-wider flex items-center justify-start overflow-hidden "
              >
                Hello, I’m Mafujur Rahman
              </p>
            </div>

            <h1
              ref={titleRef}
              className="text-[55px]  md:text-[90px] lg:text-[70px] xl:text-[105px] font-bold leading-none overflow-hidden text-[#f5f7f5] mt-[22px] "
            >
              Web <br /> Developer
            </h1>

            {/* Founder text and line */}
            <div ref={contentRef} className="md:max-w-xl lg:max-w-4xl xl:mx-0 flex flex-col xl:flex-row items-start xl:items-center gap-8 xl:gap-20 mt-[35px]  2xl:mt-[55px] ">
              <div className="w-72 h-0.5 bg-[#f5f7f5] mx-auto xl:mx-0 hidden xl:block mb-[35px] xl:mb-[55px] " />
              <p className="text-[22px] lg:text-[16px] 2xl:text-[22px] text-start text-[#f5f7f5b3] font-light">
                I’m Mafujur Rahman Jewel, a web developer with 2+ years of experience specializing in Next.js, React, and TypeScript. I transform Figma designs into clean, responsive, and pixel-perfect web interfaces with a strong focus on performance and user experience.
              </p>
            </div>

            {/* Social Icons */}
            <div ref={socialRef} className="flex flex-col w-fit md:flex-row md:flex-wrap justify-start lg:justify-start gap-3 md:gap-2 lg:gap-3 mt-[35px] 2xl:mt-[55px] ">
              {[
                { label: 'LINKEDIN', href: 'https://www.linkedin.com/in/mafujurrahman?original_referer=' },
                { label: 'GITHUB', href: 'https://github.com/mafujur-rahman' },
                { label: 'INSTAGRAM', href: 'https://www.instagram.com/jewel__98x?stkn=MXR0Y3pkbWVwOWtobg==' },
              ].map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#f5f7f5]/50 text-[#f5f7f5] py-[7px] px-[46px] text-[18px] font-medium tracking-wider hover:bg-white hover:text-gray-900 transition duration-300 rounded-full"
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Keep Scrolling */}
            <div className="relative lg:mt-6 xl:mt-2 2xl:mt-12 md:-mt-30 md:pb-30 lg:pb-0  cursor-pointer hidden md:block ml-auto" onClick={handleScrollDown}>
              <div className="flex items-center justify-end gap-2">
                <p className="text-[16px] tracking-widest text-white ">
                  Keep <br /> Scrolling
                </p>
                <div className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="72"
                    viewBox="0 0 16 72"
                    fill="none"
                    className="relative top-0" // Adjust this to fine-tune
                  >
                    <path
                      d="M16 63C11.578 63 7.99989 66.5781 7.99989 71C7.99989 66.5781 4.42196 63 0 63M7.30078 1H8.80078V71H7.30078V1Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
