"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

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

  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const frontY = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 650]),
    spring,
  );
  const textY = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 250]),
    spring,
  );
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden bg-[#FDF3EC]">
      <motion.div
        style={{ y: frontY, scale: backgroundScale }}
        className="absolute inset-0"
      >
        <img
          src="bg.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 " />
      </motion.div>

      {/* <motion.div style={{ y: frontY }} className="absolute inset-0 z-40 pointer-events-none">
        <img
          src="bg.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
      </motion.div> */}

      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-50 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <img
          src="Awatif&Eyad.png"
          alt="Awatif and Eyad"
          className="h-auto w-[700px] max-w-full animate-fadeIn"
        />

        <p className="mt-8 text-2xl md:text-4xl uppercase tracking-[0.3em] animate-fadeIn-sec text-yellow-600">
          01.08.2026
        </p>
      </motion.div>
    </section>
  );
}
