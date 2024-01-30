"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "../lib/data";
import Project from "./project";
import { useSectionInView } from "../lib/hooks";
import Link from "next/link";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28 ">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
        <div className="w-full h-[10rem] flex-row justify-center ">
          <div className="w-full flex justify-center">
            <h1 className="text-[1rem] md:text-[2rem] ">See my other project works</h1>
          </div>
          
          <div className="w-full md:h-[5rem]  flex justify-center">
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
                <svg
                  className="w-6 h-6 me-2 mr-6"
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
          </div>
       
        </div>
      </div>
    </section>
  );
}