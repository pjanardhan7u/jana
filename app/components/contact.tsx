"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/app/lib/hooks";
import Gt from "./gt";
import Lt from "./lt";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center mt-20"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading><Lt/>Get in Touch<Gt/></SectionHeading>

      <p className="text-gray-300 mt-6 dark:text-white/80 text-[1.2rem]">
        Please <span className="font-bold">contact me</span> directly at{" "}
     
          <a className="underline font-bold" href="mailto:pjanardhan7u@gmail.com" target="_blank">
          <span>
            pjanardhan7u@gmail.com 
            </span>
          </a>
          {" "}
           or you can find my mobile number in my resume.Resume 
        you can download at the home page.

      </p>

  
    </motion.section>
  );
}
