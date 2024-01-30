"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "../lib/data";
import { useSectionInView } from "../lib/hooks";
import { motion } from "framer-motion";
import { nonTectSkillsData } from "../lib/data";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <>
    <section
      id="skills"
      ref={ref}
      className=" rounded-xl mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Technical skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className=" px-4 py-1 text-[1rem] md:text-[1.5rem] rounded-xl sm:px-5 sm:py-3 dark:bg-white/10  dark:text-white/80 
              dark:bg-white cursor-pointer glow-on-hover "
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>

    <section
      id="skills2"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Non-Technical skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {nonTectSkillsData.map((skill, index) => (
          <motion.li
            className="px-4 py-1 text-[1rem] md:text-[1.5rem]   rounded-xl sm:px-5 sm:py-3 dark:bg-white/10 dark:text-white/80  cursor-pointer glow-on-hover"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
    </>
    
  );
}
