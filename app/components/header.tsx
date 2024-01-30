"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "../lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "../context/active-section-context";
import { useEffect, useState } from "react";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
    // get the current window size
    const [windowSize, setWindowSize] = useState({
      width: 600,
      height: 600,
    });
    // add event listener to update window size
    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    const { width } = windowSize;
    

    



  return (
    <>
      {width > 650 ? (
        <div className="w-full h-[3rem] z-[998]  fixed top-0 g-opacity-100">
        <header className="z-[999] relative">
          <motion.div
            className=" w-[18rem] mt-2 sm:mt-0 fixed top-0 left-1/2 h-[3.5rem] 
            w-30 px-20 rounded-none border
             dark:border-white border-opacity-40 
             bg-opacity-100 shadow-lg sm:shadow-black/[0.03] 
            backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[47rem] sm:rounded-full
             bg-black/70 border-black/40 dark:bg-opacity-75"
            initial={{ y: -100, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
          ></motion.div>
      
          <nav className="flex fixed mt-2 sm:mt-0 top-[0.15rem] left-1/2 h-5 sm:h-10 -translate-x-1/2
           sm:top-[1.7rem]  sm:py-0">
            
            <ul className="flex w-[18rem] flex-wrap items-center 
             gap-y-1 text-[0.9rem] font-medium text-gray-500 
            sm:w-[initial] sm:flex-nowrap  sm:gap-1">
              {links.map((link) => (
                <motion.li
                  className="h-3/4 my-1  text-gray-400 flex items-center 
                  justify-center relative "
                  key={link.hash}
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  <Link
                    className={clsx(
                      "flex w-full  md:mx-1 font-bold items-center justify-center px-5 py-4 hover:text-gray-200 transition dark:text-gray-400 dark:hover:text-gray-300",
                      {
                        "text-gray-200  ":
                          activeSection === link.name,
                      }
                    )}
                    href={link.hash}
                    onClick={() => {
                      setActiveSection(link.name);
                      setTimeOfLastClick(Date.now());
                    }}
                  >
                    {link.name}
      
                    {link.name === activeSection && (
                      <motion.span
                        className=" rounded-full absolute inset-0 -z-10 bg-gray-700 "
                        layoutId="activeSection"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      ></motion.span>
                    )}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>
        </header>
    </div>
      ) : (
        <div></div>
      )}
    </>

    

  
  );
}
