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
        
        <Link href="/posts/12" target="_blank">
          <div className="border-[2px] rounded-md border-purple-400  border-opacity-50 hover:bg-black hover:bg-opacity-30">
            <div className="mx-2">
              <h2 className=" sm:text-[1.5rem] font-bold ">My bucket list of impossible things.</h2>
              <p className="sm:text-[1rem] mb-5 mt-2">
              Go to space and walk on MARS ,
              Drink coffee with Billie Eilish,
              skydiving ...read more
              
              </p>
            </div>
          </div>
        </Link>

        <Link href="/posts/two-decisions-that-changed-my-life">
          <div className="my-3 border-[2px] rounded-md  border-purple-400 border-opacity-50 hover:bg-black hover:bg-opacity-30">
            <div className="mx-2">
              <h2 className="sm:text-[1.5rem]  font-bold">Two decisions that changed my life.</h2>
              <p className="sm:text-[1rem] mb-5 mt-2">My life is like more than a thrilling movie and 
              thats because of 2 decisions that I took in my life one about love and one about 
              my goal. ...read more</p>
            </div>
          </div>
        </Link>

        
      </div>

      <div className=" w-full flex justify-center ">
        <Link href="/blog" className="" target="_blank">
          
            <button
              type="button"
              className="glow-on-hover md:w-[15rem] md:h-[3rem]  text-white bg-black hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 
                    font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center justify-center
                    dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2 md:text-[1.5rem]"
            >
              Goto Blog
            </button>
          </Link>
        
      </div>
    </div>
  );
};

export default Blog;
