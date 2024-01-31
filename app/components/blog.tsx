import React from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "./section-heading";

const Blog = () => {
  return (
    <div className="my-[5rem] text sm:w-[45rem] 
    h-[40vh] flex-row justify-center">
      
      <div><SectionHeading>My Blog</SectionHeading></div>
      <div className="">
        <div className="border-[2px] border-purple-400 border-opacity-50 ">
          <div className="mx-2">
            <h2 className=" sm:text-[1.5rem] font-bold ">My bucket list of impossible things.</h2>
            <p className="sm:text-[1rem] mb-5 mt-2">
            Go to space and walk on MARS ,
            Drink coffee with Billie Eilish,
            skydiving ...etc
            
            </p>
          </div>
        </div>

        <div className="my-3 border-[2px]  border-purple-400 border-opacity-50">
          <div className="mx-2">
            <h2 className="sm:text-[1.5rem]  font-bold">My first love story.</h2>
            <p className="sm:text-[1rem] mb-5 mt-2">It happed in 2011 when I was 11 years old.</p>
          </div>
        </div>

        
      </div>

      <div className=" w-full flex justify-center ">
        <Link href="/blog" className="">
          <Link
            href="https://github.com/pjanardhan7u?tab=repositories"
            target="_blank"
            className=""
          >
            <button
              type="button"
              className="glow-on-hover md:w-[15rem] md:h-[3rem]  text-white bg-black hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 
                    font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center justify-center
                    dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2 md:text-[1.5rem]"
            >
              Read More
            </button>
          </Link>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
