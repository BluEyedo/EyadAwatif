"use client";

import { Lang } from "@/App";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { BsArrowDown } from "react-icons/bs";
import { GiVanillaFlower } from "react-icons/gi";
import { LuCalendarDays, LuClock3, LuMapPin } from "react-icons/lu";

const mapUrl = "https://maps.app.goo.gl/vKCMsrikEJEEQS466";
const text = {
  ar: {
    invite: "يشرفنا دعوتكم لحضور",
    wedding: "حفل زفاف",
    groom: "إياد محمد تؤيه فواسا",
    groomParent: "(والدته)فائزة عبدالهادي ساسور",
    bride: "عواطف يوسف لوديغ",
    brideParent: "(والدتها)شريفة علي",
    day: "السبت",
    month: "أغسطس",
    year: "2026",
    time1: "10:00 صباحًا",
    time2: "03:00 مساءً",
    venue: "مطعم حسنة فلوء فاكو",
    location: "محافظة يالا 95000",
    mapTitle: "عرض الموقع",
    mapSmall: "اضغط لفتح خرائط Google",
    invitation: "دعوة",
  },

  en: {
    invite: "We are honored to invite you to attend",
    wedding: "The Wedding Ceremony",
    groom: "Eyad Muhammad Haji said",
    groomParent: "Faizah Abdulhadi Sasor",
    bride: "Alwatif Yusuf Luding",
    brideParent: "Sharifah Ali",
    day: "Saturday",
    month: "AUGUST",
    year: "2026",
    time1: "10:00 AM",
    time2: "03:00 PM",
    venue: "Hasnah Restaurant Phlo Phako",
    location: "368/1 Suan Khwan Mueang Rd. Sateng, Mueang Yala Yala 95000",
    mapTitle: "View Venue",
    mapSmall: "Tap to open Google Maps",
    invitation: "INVITATION",
  },

  th: {
    invite: "เราเรียนเชิญทุกท่านร่วมรับประทานอาหารในงานแต่ง",
    wedding: "ระหว่าง",
    groom: "อียาด มูฮัมหมัด หะยีสะอิ",
    groomParent: "ไฟซะห์ อับดุลฮาดี ซาซูร",
    bride: "อัลวาติฟ ยูโซ๊ะ ลูดิง",
    brideParent: "ซารีพ๊ะ อาลี",
    day: "วันเสาร์",
    month: "สิงหาคม",
    year: "2569",
    time1: "10:00 น.",
    time2: "15:00 น.",
    venue: "ร้านอาหารฮาซานะห์",
    location: "368/1 ถ.สวนขวัญเมือง ต.สะเตง อ.เมืองยะลา จ.ยะลา 95000",
    mapTitle: "ดูสถานที่",
    mapSmall: "แตะเพื่อเปิด Google Maps",
    invitation: "คำเชิญ",
  },
};

type Props = { lang: Lang };

export default function Information({ lang }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const t = text[lang];

  const fontClass =
    lang === "ar" ? "font-ar" : lang === "th" ? "font-th" : "font-en";

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const { scrollYProgress: reverseProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const flowerY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const flowerY2 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -120]), {
    stiffness: 120,
    damping: 30,
  });

  const flowerY3 = useTransform(reverseProgress, [1, 0], [-200, 0]);

  const flowerY4 = useSpring(useTransform(reverseProgress, [1, 0], [-120, 0]), {
    stiffness: 120,
    damping: 30,
  });

  const logoScale = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [1, 1.12]),
    {
      stiffness: 100,
      damping: 25,
    },
  );
  
  return (
    <section
      ref={ref}
      className={`relative  bg-[#FDF3EC] ${fontClass} shadow-[0_10px_40px_rgba(0,0,0,0.18)] overflow-hidden z-30 scale-100`}
    >
      {/* Background Flowers */}
      <motion.img
        src="top-left.png"
        alt=""
        style={{ y: flowerY2 }}
        className="pointer-events-none fixed left-0 top-0 w-[210px] opacity-70 sm:w-[550px] z-10"
      />

      <motion.img
        src="top-right.png"
        alt=""
        style={{ y: flowerY2 }}
        className="pointer-events-none fixed right-0 top-0 w-[210px] scale-x-[-1] opacity-70 sm:w-[550px] z-10"
      />

      <motion.img
        src="top-left.png"
        alt=""
        style={{ y: flowerY3 }}
        className="pointer-events-none absolute bottom-0 right-0 !rotate-180 w-[250px] opacity-70 sm:w-[550px] z-10"
      />

      <motion.img
        src="top-right.png"
        alt=""
        style={{ y: flowerY2 }}
        className="pointer-events-none absolute bottom-0 left-0 !rotate-180 w-[250px] opacity-70 sm:w-[550px] z-10"
      />

      <div className="flex w-full justify-center">
        <motion.img
          src="iconic-pic.png"
          alt=""
          style={{ y: flowerY3 }}
          className="pointer-events-none absolute bottom-0 w-[180px] opacity-70 sm:w-[200px] z-10"
        />
      </div>

      {/* Floating Petals */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`left-top-${i}`}
          animate={{ y: [0, 80, 0], rotate: [0, 20, -20, 0] }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="fixed opacity-30"
          style={{ left: `${10 + i * 7}%`, top: `${20 + i * 5}%` }}
        >
          <GiVanillaFlower size={30} color="#f9a8d4" />
        </motion.div>
      ))}

      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`right-top-${i}`}
          animate={{ y: [0, 80, 0], rotate: [0, 20, -20, 0] }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="fixed opacity-30"
          style={{ right: `${10 + i * 7}%`, top: `${20 + i * 5}%` }}
        >
          <GiVanillaFlower size={30} color="#f9a8d4" className="rotate-180" />
        </motion.div>
      ))}

      {/* Main Card */}
      <motion.div className="sticky top-10 flex justify-center px-3 pb-[130px] sm:px-4 z-20">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full max-w-3xl overflow-hidden"
        >
          <div className="px-5 py-12 text-center sm:px-8">
            <motion.div
              initial={{ scale: 0.2 }}
              whileInView={{ scale: 1 }}
              style={{ scale: logoScale }}
              className="mb-8 flex justify-center text-[#34104b]"
            >
              <img className="w-[80px]" src="logo.png" alt="Wedding logo" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex justify-center"
            >
              <img src="tabreek.png" alt="Congratulations" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mt-8"
            >
              <p className="text-xl text-[#34104b] sm:text-2xl">{t.invite}</p>

              <p className="mt-2 text-xl font-bold text-[#34104b] sm:text-2xl">
                {t.wedding}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="mt-10"
            >
              <h2 className="text-2xl font-bold text-[#c7963b] sm:text-4xl">
                {t.groom}
              </h2>

              <p className="text-sm text-[#34104b] sm:text-2xl">
                {t.groomParent}
              </p>
            </motion.div>

            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              className="my-3 flex items-center gap-4"
            >
              <div className="h-px flex-1 bg-[#c7963b]" />
              <span className="text-4xl text-[#c7963b]">&</span>
              <div className="h-px flex-1 bg-[#c7963b]" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-2xl font-bold text-[#c7963b] sm:text-4xl">
                {t.bride}
              </h2>

              <p className="text-sm text-[#34104b] sm:text-2xl">
                {t.brideParent}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="my-12 flex items-center justify-center gap-4"
            >
              <div className="flex flex-col items-center justify-between gap-5">
                <LuCalendarDays size={50} className="text-[#c7963b]" />
                <span className="mt-2 text-xl font-semibold text-[#34104b] sm:text-3xl">
                  {t.day}
                </span>
              </div>

              <div className="flex flex-col items-center gap-3 border-x border-[#c7963b] px-5">
                <div className="text-xl font-bold text-[#34104b] sm:text-3xl">
                  {t.month}
                </div>

                <div className="text-3xl font-bold text-[#c7963b] sm:text-6xl">
                  01
                </div>

                <div className="text-xl font-semibold text-[#34104b] sm:text-2xl">
                  {t.year}
                </div>
              </div>

              <div className="flex flex-col items-center gap-3">
                <LuClock3 size={50} className="text-[#c7963b]" />
                <div className="flex flex-col font-semibold text-[#34104b] sm:text-xl">
                  <span>{t.time1}</span>
                  <span>{t.time2}</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center justify-between gap-3 sm:justify-center sm:gap-16 sm:text-2xl"
            >
              <LuMapPin className="text-[30px] text-[#c7963b] sm:text-[50px]" />

              <div>
                <h3 className="font-bold text-[#34104b]">{t.venue}</h3>
                <p className="text-[#34104b]">{t.location}</p>
              </div>

              <div className="flex flex-col items-center gap-3">
                <img src={"scan.png"} className="w-[80px] sm:w-[100px]" />
                <button
                  className="
                  rounded-xl
                  duration-200
                  hover:bg-slate-200
                p-1 shadow-sm text-sm
                "
                  onClick={() => {
                    window.open(
                      "https://maps.app.goo.gl/vKCMsrikEJEEQS466",
                      "_blank",
                    );
                  }}
                >
                  📍 Open Map
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
