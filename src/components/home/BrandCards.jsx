"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BrandCards() {
  const cardsRef = useRef([]);
  const containerRef = useRef(null);
  const leftRefs = useRef([]);
  const [windowWidth, setWindowWidth] = useState(0);
  const [heights, setHeights] = useState([]);
  const [hoveredButtonIndex, setHoveredButtonIndex] = useState(null);
  const buttonRefs = useRef([]);

  const items = [
    {
      title: "Ethical Den",
      desc: "A cybersecurity-driven tech collective empowering the next generation of ethical hackers, builders and innovators.",
      role: "Web Developer",
      category: "Software Company",
      tag: "Cybersecurity, Tech, EdTech",
      img: "/images/company/Ethicalden.png",
      link: "https://www.ethicalden.com/"
    },
    {
      title: "Eduden",
      desc: "A next-gen learning platform helping students master ethical hacking & emerging technologies through real-world labs.",
      role: "Web Developer",
      category: "EdTech Platform",
      tag: "EdTech, Cybersecurity",
      img: "/images/company/Eduden.jpg",
      link: "https://www.eduden.io/"
    },
    {
      title: "Hivyr",
      desc: "AI-powered workflow intelligence tools designed to automate operations and scale businesses efficiently.",
      role: "Web Developer",
      category: "SaaS / AI Tools",
      tag: "AI, Productivity",
      img: "/images/company/hivyr.png",
      link: "https://new-hivyr.vercel.app/"
    },
    {
      title: "Corvtron",
      desc: "Leading innovative robotics solutions to automate tasks, enhance efficiency, and transform industries with cutting-edge technology.",
      role: "Web Developer",
      category: "Robotics Company",
      tag: "Robotics, Tech",
      img: "/images/company/corvtron-2.png",
      link: "https://corvtron-six.vercel.app/"
    },
  ];

  // Track window width
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Capture left content heights
  useEffect(() => {
    const leftHeights = leftRefs.current.map((ref) => ref?.offsetHeight || 0);
    setHeights(leftHeights);
  }, [windowWidth]);

  // GSAP animations for LG+ devices
  useEffect(() => {
    if (windowWidth < 1024) return;

    const ctx = gsap.context(() => {
      const cards = cardsRef.current;

      cards.forEach((card, i) => {
        if (!card) return;
        const leftContent = leftRefs.current[i];

        gsap.from(leftContent, {
          x: -200,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 40%",
            toggleActions: "play none none none",
          },
        });

        const nextCard = cards[i + 1];
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          endTrigger: nextCard || card,
          end: nextCard ? "top top" : "bottom bottom",
          pin: true,
          pinSpacing: false,
        });
      });

      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, [windowWidth]);

  // Button hover animation
  const handleButtonHover = (index, isHovered) => {
    setHoveredButtonIndex(isHovered ? index : null);
    const svg = buttonRefs.current[index];
    if (svg) {
      gsap.to(svg, {
        rotation: isHovered ? 0 : -45,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  return (
    <section
      ref={containerRef}
      className="bg-black text-[#f5f7f5] w-full min-h-screen pt-[50px] xl:pt-[100px]"
    >
      <div className="w-full">
        {items.map((item, i) => (
          <div
            key={i}
            className={`w-full border-t border-[#828282]/40 ${i === items.length - 1 ? "border-b border-[#828282]/40" : ""} bg-black relative z-10`}
          >
            <div
              ref={(el) => (cardsRef.current[i] = el)}
              className="grid grid-cols-1 lg:grid-cols-2 gap-14 py-[50px] xl:py-[100px] section-padding 2xl:max-w-[1500px] 2xl:mx-auto bg-black items-start"
            >
              {/* LEFT SIDE */}
              <div
                ref={(el) => (leftRefs.current[i] = el)}
                className="flex flex-col justify-between w-full order-1"
              >
                <div className="space-y-4 w-max">
                  <h1 className="text-[45px] md:text-[60px] font-bold leading-none">
                    {item.title}
                  </h1>
                  <p className="text-[18px] text-[#f5f7f5cc] leading-relaxed max-w-[280px] md:max-w-xl lg:max-w-md xl:max-w-lg my-[40px] md:my-[50px] lg:my-[40px]">
                    {item.desc}
                  </p>
                </div>

                <div className="flex flex-col divide-y divide-[#2c2c2c] border-t border-[#2c2c2c] w-full lg:max-w-lg">
                  <div className="flex items-center gap-4 py-[7px]">
                    <span className="font-semibold w-28 text-[16px] text-[#f5f7f5cc]">Role:</span>
                    <span className="text-[16px] text-[#f5f7f5cc]">{item.role}</span>
                  </div>
                  <div className="flex items-center gap-4 py-[7px]">
                    <span className="font-semibold text-[16px] text-[#f5f7f5cc] w-28">Category:</span>
                    <span className="text-[16px] text-[#f5f7f5cc]">{item.category}</span>
                  </div>
                  <div className="flex items-center border-b border-[#2c2c2c] gap-4 py-[7px]">
                    <span className="font-semibold w-28 text-[16px] text-[#f5f7f5cc]">Tag:</span>
                    <span className="text-[16px] text-[#f5f7f5cc]">{item.tag}</span>
                  </div>
                </div>

                {/* Button + Text */}
                <div className="inline-flex items-center gap-6 mt-[40px] md:mt-[50px] xl:mt-[100px] flex-nowrap">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="common-btn-size text-[#f5f7f5] transition-colors duration-300 cursor-pointer"
                    onMouseEnter={() => handleButtonHover(i, true)}
                    onMouseLeave={() => handleButtonHover(i, false)}
                  >
                    View Project
                  </a>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`rounded-full w-16 h-16 flex justify-center items-center text-3xl flex-shrink-0 border-2 border-[#f5f7f5] transition-colors duration-300 ${hoveredButtonIndex === i ? "bg-white text-black" : "bg-transparent text-[#f5f7f5]"
                      }`}
                    onMouseEnter={() => handleButtonHover(i, true)}
                    onMouseLeave={() => handleButtonHover(i, false)}
                  >
                    <svg
                      ref={(el) => (buttonRefs.current[i] = el)}
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="26"
                      viewBox="0 0 36 26"
                      fill="none"
                      className="transition-transform duration-300 ease-out"
                    >
                      <path
                        d="M20.5078 0C20.5051 7.18628 27.3242 13.0013 35.754 13.0013M35.7432 12.999C27.3134 12.999 20.49 18.814 20.4873 26.0003M0.75 13.0039H33.3462"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                    </svg>
                  </a>
                </div>

              </div>

              {/* RIGHT IMAGE */}
              {windowWidth < 1024 ? (
                <div className="w-full my-[40px] md:my-[50px] order-2">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={1200}
                    height={700}
                    className="w-full h-auto object-contain"
                  />
                </div>
              ) : windowWidth >= 1024 && windowWidth < 1280 ? (
                // LG devices
                <div className="w-full order-2 flex items-start justify-start">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={heights[i] ? heights[i] * 1.3 : 600}
                    height={heights[i] ? heights[i] * 1.3 : 600}
                    className="object-contain"
                  />
                </div>
              ) : (
                // XL / 2XL devices
                <div
                  className="relative w-full flex items-start justify-center order-2"
                  style={{ height: heights[i] || 650 }}
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>
              )}

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}