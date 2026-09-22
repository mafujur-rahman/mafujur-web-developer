"use client";
import React from "react";
import Image from "next/image";

export default function Footer() {
  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Projects", id: "brands" },
    { name: "Skills", id: "skills" },
    { name: "Achievements", id: "awards" },
    { name: "Contact", id: "contact" },
  ];

  const socialLinks = [
    { label: "LINKEDIN", href: "https://www.linkedin.com/in/mafujurrahman?original_referer=" },
    { label: "GITHUB", href: "https://github.com/mafujur-rahman" },
    { label: "INSTAGRAM", href: "https://www.instagram.com/jewel__98x?stkn=MXR0Y3pkbWVwOWtobg==" },
  ];

  const currentYear = new Date().getFullYear();

  const handleScroll = (id) => {
    const target = document.getElementById(id);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="bg-black text-[#f5f7f5] w-full pt-[100px] lg:pt-[140px]">
      <div className="section-padding 2xl:max-w-[1500px] 2xl:mx-auto">

        {/* BIG EMAIL */}
        <h1 className="text-[7vw] sm:text-[6vw] md:text-[7vw] xl:text-[5vw] font-semibold text-center leading-tight break-words">
          mdmafuj000@gmail.com
        </h1>

        {/* TOP BORDER */}
        <div className="w-full border-t border-[#828282] mt-[40px] mb-[75px]"></div>

        {/* GRID CONTENT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-y-12 md:gap-x-4 lg:gap-x-8 xl:gap-x-12 2xl:gap-x-16">

          {/* NAME + TAGLINE */}
          <div className="flex flex-col h-full w-full justify-start">
            <h2 className="text-[26px] md:text-[30px] font-bold tracking-wide text-[#f5f7f5]">
              Mafujur Rahman
            </h2>
            <p className="text-[#bfbfbf] leading-relaxed mt-4">
              Full-stack web developer building secure, scalable, and modern digital experiences.
            </p>
          </div>

          {/* NAVIGATION */}
          <div className="flex flex-col h-full w-full justify-start">
            <h3 className="text-xl md:text-[26px] font-semibold">Navigation</h3>
            <ul className="space-y-2 mt-4 text-[#f5f7f5]">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleScroll(link.id)}
                    className="hover:text-white transition-colors text-left cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ADDRESS */}
          <div className="flex flex-col h-full w-full justify-start xl:-ml-10 2xl:-ml-16">
            <h3 className="text-xl md:text-[26px] font-semibold">Address</h3>
            <p className="text-[#cdcdcd] leading-relaxed mt-4">
              Dhaka, <br /> Bangladesh
            </p>
            <p className="text-[#cdcdcd] mt-2">mdmafuj000@gmail.com</p>
          </div>

          {/* CONTACT FORM */}
          <div className="flex flex-col h-full w-full justify-start xl:-ml-10 2xl:-ml-14">
            <h3 className="text-xl md:text-[26px] font-semibold">Contact</h3>
            <form className="flex flex-col gap-3 mt-4 w-full xl:w-[110%] 2xl:w-[120%]">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-[#828282] px-5 py-3 bg-transparent text-white placeholder:text-[#bfbfbf] focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border border-[#828282] px-5 py-3 bg-transparent text-white placeholder:text-[#bfbfbf] focus:outline-none"
              />
              <textarea
                placeholder="Your Message"
                className="border border-[#828282] px-5 py-3 bg-transparent text-white placeholder:text-[#bfbfbf] focus:outline-none resize-none h-[84px]"
              />
              <button
                type="submit"
                className="px-6 py-3 border border-[#828282] bg-white text-black hover:bg-transparent hover:text-white transition-all"
              >
                Send
              </button>
            </form>
          </div>

        </div>

      </div>

      {/* SOCIAL + COPYRIGHT */}
      <div className="section-padding 2xl:max-w-[1500px] 2xl:mx-auto border-t border-[#828282] mt-[40px]">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between py-[35px]">
          <p className="text-[#f5f7f5bc] text-left lg:text-left">
            All rights reserved — {currentYear} © Mafujur Rahman
          </p>

          <div className="flex flex-wrap items-center justify-left gap-4 mt-[22px] lg:mt-0">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-[36px] py-[4px] text-[14px] rounded-full border border-[#828282] hover:bg-white hover:text-black transition-all"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}