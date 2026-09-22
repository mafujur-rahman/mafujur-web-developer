"use client";
import React, {
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import Image from "next/image";
import gsap from "gsap";

const menuItems = [
  { id: "home", name: "Homes" },
  { id: "skills", name: "Skills" },
  { id: "brands", name: "Projects" },
  { id: "awards", name: "Achievements" },
  { id: "contact", name: "Contact" },
];

const FullScreenMenu = forwardRef(({ onClose }, ref) => {
  const containerRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const menuRef = useRef(null);
  const topLogoRef = useRef(null);
  const rightElementsRef = useRef([]);

  const animateMenu = (direction) => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.inOut", duration: 0.8 },
      onStart: () => {
        if (direction === "open") containerRef.current.classList.remove("hidden");
      },
      onComplete: () => {
        if (direction === "close") containerRef.current.classList.add("hidden");
      },
    });

    if (direction === "open") {
      tl.to(leftRef.current, { y: 0 })
        .to(rightRef.current, { y: 0 }, "<")
        .fromTo(
          topLogoRef.current,
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.3"
        )
        .fromTo(
          menuRef.current.children,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, stagger: 0.08, duration: 0.5 },
          "-=0.3"
        )
        .fromTo(
          rightElementsRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, stagger: 0.08, duration: 0.5 },
          "-=0.4"
        );
    } else {
      tl.to(
        [topLogoRef.current, ...menuRef.current.children, ...rightElementsRef.current],
        {
          opacity: 0,
          y: -20,
          stagger: 0.05,
          duration: 0.3,
        }
      )
        .to(leftRef.current, { y: "-100%" })
        .to(rightRef.current, { y: "100%" }, "<");
    }
  };

  const handleMenuClick = (id) => {
    animateMenu("close");
    onClose();
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  useImperativeHandle(ref, () => ({
    open: () => animateMenu("open"),
    close: () => animateMenu("close"),
  }));

  useEffect(() => {
    const keyListener = (e) => {
      if (e.key === "Escape") {
        animateMenu("close");
        onClose();
      }
    };
    document.addEventListener("keydown", keyListener);
    return () => document.removeEventListener("keydown", keyListener);
  }, [onClose]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[200] hidden w-screen h-screen overflow-hidden"
    >
      {/* LEFT PANEL */}
      <div
        ref={leftRef}
        className="absolute top-0 left-0 h-full bg-[#151515] w-full md:w-1/2 translate-y-[-100%]"
      />

      {/* RIGHT PANEL */}
      <div
        ref={rightRef}
        className="absolute top-0 right-0 h-full w-full md:w-1/2 bg-black translate-y-[100%]"
      />

      {/* TOP BAR */}
      <div className="absolute top-6 left-6 right-6 z-[300] flex justify-between items-center">
        <div ref={topLogoRef} className="opacity-0">
          <div className="w-[160px] h-auto">
            <Image
              src="/images/logo-update.png"
              alt="logo"
              width={800}
              height={800}
              className="object-cover"
            />
          </div>
        </div>

        {/* X BUTTON */}
        <div
          onClick={() => {
            animateMenu("close");
            onClose();
          }}
          className="cursor-pointer w-9 h-9 relative z-[400] pt-6 mr-1 lg:mr-5 xl:mr-0 2xl:mr-10"
        >
          <span className="absolute block w-full h-[2px] bg-white rotate-45"></span>
          <span className="absolute block w-full h-[2px] bg-white -rotate-45"></span>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="absolute inset-0 flex flex-col md:flex-row w-full h-full overflow-hidden">

        {/* LEFT MENU */}
        <div className="w-full md:w-1/2 px-8 md:px-10 pt-28 text-white flex flex-col">
          <div ref={menuRef} className="space-y-10">
            {menuItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => handleMenuClick(item.id)}
                className="flex justify-between items-center border-b border-[#2b2b2b] cursor-pointer group opacity-0 pb-5"
              >
                <span className="text-lg text-gray-400 tracking-widest">
                  0{index + 1}
                </span>

                <span className="text-5xl font-semibold group-hover:pl-4 transition-all duration-300 tracking-tight">
                  {item.name}
                </span>

                <span className="text-4xl text-gray-400 group-hover:text-white transition">
                  +
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE IMAGE — only for md+ */}
        <div className="hidden md:flex items-end justify-center relative w-1/2 overflow-hidden">

          {/* Vertical MENU text */}
          <div
            ref={(el) => (rightElementsRef.current[0] = el)}
            className="absolute left-0 bottom-[150px] text-[120px] opacity-[0.07] font-extrabold rotate-90 tracking-tight z-10 hidden xl:block"
          >
            MENU
          </div>

          {/* Image constrained to container width */}
          <div
            ref={(el) => (rightElementsRef.current[1] = el)}
            className="relative w-full max-w-full h-full opacity-0 flex items-end"
          >
            <Image
              src="/images/navbar.png"
              alt="menu image"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>

      </div>
    </div>
  );
});

FullScreenMenu.displayName = "FullScreenMenu";
export default FullScreenMenu;
