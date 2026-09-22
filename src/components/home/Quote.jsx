"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Quote = () => {
    const containerRef = useRef(null);
    const imageRef = useRef(null);
    const cardRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const image = imageRef.current;
        const card = cardRef.current;

        // IMAGE PARALLAX → ALWAYS ACTIVE
        gsap.fromTo(
            image,
            { y: "-15%" },
            {
                y: "0%",
                ease: "none",
                scrollTrigger: {
                    trigger: container,
                    start: "top bottom",
                    end: "bottom bottom",
                    scrub: 1,
                },
            }
        );

        // CARD PARALLAX → ONLY ON LARGE DEVICES
        ScrollTrigger.matchMedia({
            "(min-width: 1024px)": function () {
                gsap.fromTo(
                    card,
                    { y: 0 },
                    {
                        y: "-15%",
                        ease: "none",
                        scrollTrigger: {
                            trigger: container,
                            start: "top bottom",
                            end: "bottom bottom",
                            scrub: 1,
                        },
                    }
                );
            },
            "(max-width: 1023px)": function () {
                gsap.set(card, { y: 0 });
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative w-full h-[80vh] overflow-hidden z-20"
        >
            {/* Background Image */}
            <div
                ref={imageRef}
                className="absolute top-0 left-0 w-full h-[130%] bg-cover bg-center"
                style={{ backgroundImage: "url('/images/quote.png')" }}
            ></div>

            {/* White card overlay */}
            <div
                ref={cardRef}
                className="bg-white p-6 w-full md:max-w-2xl lg:max-w-3xl xl:max-w-4xl
                z-30 right-0 md:right-10 md:-bottom-5 bottom-0 absolute 
                xl:right-20 xl:-bottom-10 mx-auto flex items-center gap-6 md:gap-8 lg:gap-10"
            >
                {/* Icon */}
                <div className="flex-shrink-0 flex items-center">
                    <Image
                        src="/images/awerd-icon.png"
                        alt="Award Icon"
                        width={80}
                        height={80}
                        className="object-contain md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28"
                    />
                </div>

                <div className="w-px bg-[#121212] h-20 md:h-24 lg:h-28 xl:h-32"></div>

                {/* Text */}
                <div className="flex items-center flex-1">
                    <p className="text-[16px] lg:text-[32px] text-[#121212] font-semibold leading-tight">
                        Every bug is a lesson. Every project, a new skill.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Quote;