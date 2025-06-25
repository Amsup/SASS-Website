"use client";
import ArrowIcon from "../assets/icons/arrow-w.svg";
import CursorImage from "../assets/images/cursor.png";
import MessageImage from "../assets/images/message.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden text-white bg-black bg-[linear-gradient(to_bottom,#000,#200d42_34%,#4f21a1_65%,#a35edb_82%)] py-[72px] sm:py-24">
      <div className="absolute top-[calc(100%-96px)] sm:top-[calc(100%-120px)] h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px]  lg:w-[2400px] lg:h-[1200px]  rounded-[100%] left-1/2 -translate-x-1/2 bg-[radial-gradient(closest-side,#000_82%,#9560eb)]"></div>
      <div className="container">
        <div className="flex items-center justify-center">
          <a
            href="#"
            className="inline-flex gap-3 border py-1 px-2 rounded-lg border-white/30"
          >
            <span className="bg-[linear-gradient(to_right,#f87aff,#fb93d0,#ffdd99,#c3f0b2,#2fd8fe)] text-transparent bg-clip-text [-webkit-background-clip:text]">
              Version 2.0 is here
            </span>
            <span className="inline-flex items-center gap-1">
              <span>Read more</span>
              <ArrowIcon />
            </span>
          </a>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <div className="inline-flex relative">
          <motion.div
            className="absolute right-[476px] top-[108px] hidden sm:inline"
            drag
            dragSnapToOrigin
          >
            <Image
              src={CursorImage}
              alt=""
              className="max-w-none"
              height="200"
              width="200"
              draggable="false"
            />
          </motion.div>
          <motion.div
            className="absolute left-[489px] top-[56px] hidden sm:inline"
            drag
            dragSnapToOrigin
          >
            <Image
              src={MessageImage}
              alt=""
              className="max-w-none"
              height="200"
              width="200"
              draggable="false"
            />
          </motion.div>

          <h1 className="text-7xl font-bold tracking-tighter text-center  inline-flex sm:text-9xl">
            One task <br /> at a time
          </h1>
        </div>
      </div>
      <div className="flex justify-center">
        <p className="relative text-center text-xl mt-8 max-w-md">
          Celebrate the joy of accomplishment with an app designed to track
          progress, motivate your efforts, and celebrates your successes.
        </p>
      </div>
      <div className="relative flex justify-center mt-8">
        <button className="bg-white text-black py-3 px-5 rounded-lg font-medium">
          Get for free
        </button>
      </div>
    </div>
  );
};
