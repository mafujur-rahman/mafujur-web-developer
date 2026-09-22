"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import {
    FaCode,
    FaLaptopCode,
    FaMicrophone,
    FaHandsHelping,
} from "react-icons/fa";
import { titleAnimation } from "../utils/title-anime";

const AchievementCard = React.forwardRef(function AchievementCard(
    { year, category, description, Icon },
    ref
) {
    return (
        <div
            ref={ref}
            className="
                w-full bg-black border border-[#828282] px-[30px] py-[40px]
                grid 
                grid-cols-1 
                md:grid-cols-1
                lg:grid-cols-[100px_minmax(150px,1fr)_80px]
                xl:grid-cols-[110px_minmax(300px,1fr)_110px]
                items-start gap-[20px] opacity-0
            "
        >
            {/* COLUMN 1 — YEAR */}
            <div className="text-left">
                <p className="text-[#f5f7f5b3] text-[22px] font-light">
                    {year}
                </p>
            </div>

            {/* COLUMN 2 — CATEGORY + DESCRIPTION */}
            <div className="flex flex-col text-left gap-1">
                <p className="text-[#f5f7f5b3] text-[22px]">{category}</p>
                <p className="text-[#f5f7f5] text-[22px] font-semibold">
                    {description}
                </p>
            </div>

            {/* COLUMN 3 — ICON */}
            <div className="flex justify-start md:justify-start lg:justify-end items-center mt-4 md:mt-0">
                {Icon && (
                    <Icon
                        className="w-20 h-20 lg:w-24 lg:h-24 text-[#f5f7f5b3]"
                        style={{ color: "#f5f7f5b3" }}
                    />
                )}
            </div>

        </div>
    );
});

AchievementCard.displayName = "AchievementCard";

/* ---------- Parent: Achievemnt component ---------- */
const Achievemnt = () => {
    const achievements = [
        {
            year: "Ongoing",
            category: "Full-Stack Web Development",
            description:
                "Building production-grade full-stack applications with Next.js, React, Node.js, and Express.",
            Icon: FaCode,
        },
        {
            year: "Completed",
            category: "Frontend Engineering",
            description:
                "Mastered responsive, accessible, and pixel-perfect interfaces using React, TypeScript, and modern CSS.",
            Icon: FaLaptopCode,
        },
        {
            year: "2026",
            category: "Guest Speaker — Programming Hero",
            description:
                "Delivered a session on modern web development workflows to the Programming Hero community.",
            Icon: FaMicrophone,
        },
        {
            year: "2025",
            category: "Mentor — Level 1 Coders",
            description:
                "Guiding beginner Level 1 coders through the fundamentals of web development and problem solving.",
            Icon: FaHandsHelping,
        },
    ];

    const cardRefs = useRef([]);
    const titleRef = useRef(null);
    const ParRef = useRef(null);

    useEffect(() => {
        titleAnimation(titleRef.current);
        titleAnimation(ParRef.current);
    }, []);

    useEffect(() => {
        let ctx = gsap.context(() => {
            cardRefs.current.forEach((card, index) => {
                if (!card) return;

                const isLeft = index % 2 === 0;
                const direction = isLeft ? "-150" : "150";

                gsap.fromTo(
                    card,
                    { x: direction, opacity: 0 },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 1.6,
                        ease: "power4.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 85%",
                            end: "top 50%",
                            scrub: 0.3,
                        },
                    }
                );
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div id="awards" className="min-h-screen bg-black text-[#f5f7f5] pt-[100px] lg:pt-[140px]">
            <div className="section-padding 2xl:max-w-[1350px] 2xl:mx-auto">
                <p ref={ParRef} className="text-[16px] font-bold tracking-widest uppercase">
                    Milestones
                </p>

                <h1
                    ref={titleRef}
                    className="text-[40px]  md:text-[72px] xl:text-[90px] font-bold leading-none mt-[22px] mb-[50px] xl:mb-[70px]"
                >
                    My journey
                    <br />
                    as a developer
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {achievements.map((achievement, index) => (
                        <AchievementCard
                            key={index}
                            {...achievement}
                            ref={(el) => (cardRefs.current[index] = el)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Achievemnt;