"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/app/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/app/context/active-section-context";
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
    let exclud=["Gallery","Contact"];
    var Mlink;
    if(width < 500){
      Mlink=links.filter((link)=> !exclud.includes(link.name));
    }
    else{
      Mlink=links;
    }
  



  return (
    <>
      {width > 300 ? (

        <header className=" z-[999] relative flex justify-center">
          <motion.div
            className=" w-[95vw] mt-2 sm:mt-0 fixed top-0 left-1/2 h-[2rem] 
            w-30 px-20 rounded-full border
             dark:border-white border-opacity-40 
             bg-opacity-100 shadow-lg sm:shadow-black/[0.03] 
            backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[50rem] 
             bg-black/70 border-black/40 dark:bg-opacity-75"
            initial={{ y: -100, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
          ></motion.div>
      
          <nav className="flex fixed mt-2 sm:mt-0 top-[0.15rem] left-1/2 h-5 sm:h-10 -translate-x-1/2
           sm:top-[1.7rem]  sm:py-0">
            
            <ul className={clsx("flex w-[18rem]  gap-y-1 justify-between  font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-1")}>
              {Mlink.map((link) => (
                
                <motion.li
                  className="h-3/4  my-1  text-gray-400 flex 
                  justify-center relative "
                  key={link.hash}
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  <Link
                    className={clsx(
                      " flex w-full sm:mx-2 font-bold items-center sm:justify-center px-1 py-1 sm:px-4 sm:py-3 text-[14px] sm:text-[1rem] hover:text-gray-300 transition ",
                      {
                        "text-gray-100  ":
                          activeSection === (link.name),
                      }
                    )}
                    href={link.hash}
                    onClick={() => {
                      setActiveSection(link.name);
                      setTimeOfLastClick(Date.now());
                    }}
                  >
                    {link.name}
                 
                    {(link.name === activeSection  ) && (
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

      ) : (
        <div></div>
      )}
    </>

    

  
  );
}
