"use client";
import Image from "next/image";
import helixImage from "../assets/images/helix2.png";
import emojiStarImage from "../assets/images/emojistar.png";
import { useEffect, useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

export const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  useEffect(() => {
    scrollYProgress.on("change", (value) => {
      console.log(value);
    });
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  return (
    <div
      className="bg-black text-white py-[72px] sm:py-24 text-center"
      ref={containerRef}
    >
      <div className="container max-w-xl relative">
        <motion.div style={{ translateY }}>
          <Image
            src={helixImage}
            alt=""
            className="absolute top-6 left-[calc(100%+36px)]"
          />
        </motion.div>

        <motion.div style={{ translateY }}>
          <Image
            src={emojiStarImage}
            alt=""
            className="absolute -top-[120px] right-[calc(100%+24px)]"
          />
        </motion.div>

        <h2 className="text-5xl font-bold tracking-tighter sm:text-6xl">
          Get instant access
        </h2>
        <p className="text-4xl text-white/70 mt-5">
          Celebrate the joy of accomplishment with an app designed to track your
          progress, motivate your efforts, and celebrate your successes, one
          task at a time.
        </p>

        <form className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row">
          <input
            type="email"
            placeholder="your@example.com"
            required
            className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9ca3af] sm:flex-1"
          />
          <button
            type="submit"
            className="bg-white text-black h-12 rounded-lg px-5"
          >
            Get access
          </button>
        </form>
      </div>
    </div>
  );
};
