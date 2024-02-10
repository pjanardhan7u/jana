"use client";

import { useRef } from "react";
import { projectsData } from "@/app/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";


type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  gitHubLink,
  link,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="glow-on-hover group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-purple-500  bg-opacity-40 text-white max-w-[42rem] 
      border border-black/5 rounded-lg overflow-hidden sm:pr-8 
      relative sm:h-[20rem] hover:bg-purple-700 hover:bg-opacity-30 transition 
      sm:group-even:pl-8  
        ">
        <div className="pt-0 pb-3 px-5 sm:pl-10 sm:pr-0 sm:pt-4 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl  font-semibold">{title}</h3>
          <p className="my-2 text-white leading-relaxed  dark:text-white/70">
            {description}
          </p>

          
            
            <div className="flex ">
              <Link
              href={gitHubLink}
              target="_blank"
              className="mx-3"
              >
                <button
                  type="button"
                  className=" text-white bg-black hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 
                  font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center justify-center
                  dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2 glow-on-hover"
                >
                  <svg
                    className="w-4 h-4 me-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Github
                </button>
              </Link>
              
              <Link
              href={link}
              target="_blank"
              >
                <button
                  type="button"
                  className=" glow-on-hover text-white bg-black hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 
                  font-medium rounded-lg text-sm px-3 py-2.5 text-center flex items-center justify-center
                  dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
                >
                  Live Site
                </button>
              </Link>
            </div>

          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          width={1100}
          height={1100}
          alt="Project I worked on"
          quality={95}
          className=" absolute hidden
          sm:block top-8 -right-40 w-[25rem] h-[20rem]
          rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
        />

        
      </section>


      
    </motion.div>
  );
}
