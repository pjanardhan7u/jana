"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight} from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/app/lib/hooks";
import { useActiveSectionContext } from "@/app/context/active-section-context";
import TypeEffect from "./typeEffect";
import LtGt from "./lgGt";


export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-30 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/images/about.png"
              alt="Jana portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-[13rem]  w-[7rem] sm:w-[13rem] sm:h-[20rem] rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
        </div>
      </div>

      <motion.h1
        className=" mb-10 mt-4 rounded-full px-4 text-2xl font-medium
         !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div>
          <div className="font-bold">
            Hello World, I&apos;m 
            <div className="flex justify-center" >
              <LtGt>
              {TypeEffect()}
                </LtGt>
           
            
            </div>
            
            
          </div>
        </div>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 
        px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className=" group bg-white/10   text-white px-7 py-3 
          flex items-center gap-2 rounded-full outline-none focus:scale-110 
          hover:scale-110  
            active:scale-105 transition "
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group px-7 border border-white-2 py-3 flex items-center gap-2 
          rounded-full focus:scale-110 hover:scale-110 active:scale-105 
          transition cursor-pointer borderBlack bg-white/10"
          href="/jana_resume.pdf"
          download
        >
          See My Resume{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <div className="flex">
          <a
            className="  p-2 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://www.linkedin.com/in/pjanardhan7u/"
            target="_blank"
          >
           <Image
            src="/images/socialMedia/linkedin.svg"
            width={50}
            height={50}
            alt="as"
           />
          </a>
          
          <a
            className=" p-2 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://github.com/pjanardhan7u"
            target="_blank"
          >
               <Image
            
            src="/images/socialMedia/github.svg"
            width={50}
            height={50}
            alt="as"
           />
          </a>
          
        </div>
      </motion.div>
    </section>
  );
}
