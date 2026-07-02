"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function ParallaxHero() {
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

  return (
    <section
      ref={ref}
      className="relative mx-auto min-h-screen lg:min-h-[1050px] max-w-screen-sm overflow-hidden shadow-lg shadow-rose-200"
    >
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
