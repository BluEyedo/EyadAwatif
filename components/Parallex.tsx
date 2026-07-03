"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { BiChevronDown } from "react-icons/bi";
import { Lang } from "@/App";

type Props = { lang: Lang };

export default function ParallaxHero({ lang }: Props) {
  const ref = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const spring = {
    stiffness: 100,
    damping: 30,
  };

  const textY = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 250]),
    spring,
  );

  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      ref={ref}
      className="relative mx-auto min-h-screen lg:min-h-[1050px] max-w-screen-sm overflow-hidden shadow-lg shadow-rose-200"
    >
      {/* Scroll Hint */}
      <div
        className={`fixed bottom-3 left-0 right-0 z-[999] flex justify-center transition-all duration-300 ${
          scrollY > 300
            ? "opacity-0 translate-y-4 pointer-events-none"
            : "opacity-100"
        }`}
      >
        <div className="mx-4 flex items-center gap-2 rounded-full border border-yellow-300 bg-yellow-50/90 px-4 py-2 text-orange-700 shadow-lg backdrop-blur">
          <BiChevronDown className="pointing text-2xl" />
          <p className="text-sm font-semibold sm:text-base">
            <span className="font-ar">{lang === "ar" && "مرّر للأسفل"}</span>
            <span className="font-th">{lang === "th" && "เลื่อนลง"}</span>
            <span className="font-en">{lang === "en" && "Scroll down"}</span>
          </p>
        </div>
      </div>
      <motion.div
        style={{ y: textY }}
        className="absolute  h-full w-full inset-0 z-20 pointer-events-none "
      >
        <img src="bg.png" className="h-full w-full object-cover" />
      </motion.div>

      <motion.div
        style={{ y: textY }}
        className="relative z-50 flex min-h-screen flex-col items-center justify-center px-4 text-center sm:px-6 "
      >
        <img
          src="Awatif&Eyad.png"
          alt="Awatif and Eyad"
          className="h-auto w-full max-w-[450px] animate-fadeIn"
        />

        <p className="mt-6 animate-fadeIn-sec text-xl uppercase tracking-[0.2em] text-yellow-600 sm:mt-8 sm:text-2xl sm:tracking-[0.3em] md:text-3xl">
          01.08.2026
        </p>
      </motion.div>
    </section>
  );
}
