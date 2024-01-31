"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/app/lib/hooks";
import Image from "next/image";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="w-full my-20 sm:w-[40rem] max-w-[50rem] text-justify 
      leading-8 sm:mb-40 
      scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <div className=" sm:w-[40rem] 
        mb-5">
        <p >
          <span className="ml-10"></span> At the ripe age of 23 (as of 2024),
          I&apos;m a <span className="font-bold">science enthusiast </span>
            and lover
          nature and a mind <span className="font-bold">
            endlessly curious </span> about the mysteries of 
          the cosmos.
        </p>
      </div>

      <div className="text-left sm:w-[40rem]
       flex-row sm:flex justify-center  ">
        <div
          className="rounded-xl  w-full h-[18rem] flex justify-center
           sm:w-[12rem] sm:h-[20rem] md:w-[15rem] md:h-[28rem] "
        >
          <Image
            src="/images/jana.png"
            alt="Jana"
            width={1000}
            height={1000}
            className=" sm:ml-5 rounded-xl w-[10rem]  h-[18rem] sm:w-[12rem] 
            sm:h-[20rem] md:w-[13rem] md:h-[26rem] "
          />

        </div>

        <div
          className=" md:w-[25rem] sm:w-[20rem]
            mt-[30px]    sm:text-[22px] sm:ml-[20px] mx-2"
        >
          <p className="mb-5  ">
            <span className="ml-10"></span>Armed with a{" "}
            <span className="font-bold">B.Sc in Computer Science,</span> I&apos;m
            currently pursuing <span className="font-bold">MCA</span>   (Master of Computer Application) at the
            prestigious
            <span className="font-bold"> NIT Trichy.</span>
          </p>

          <p className="mt-10 ">
            <span className="ml-6"></span>When I&apos;m not decoding the secrets of
            algorithms, you will find me immersed in 
            documentaries,studying biographies and psycology.
          </p>
        </div>
      </div>

      <div className=" sm:w-[40rem]  ">
        <p className=" md:mx-5 mx-2">
          <span className="ml-10"></span>  I&apos;m
          currently exploring the fascinating world of
          Next.js, turning every line of code into a portal of endless
          possibilities.I am on the <span className="font-bold">hunt</span>  for
            a full-time position.
        </p>
   
      </div>
    </motion.section>
  );
}
