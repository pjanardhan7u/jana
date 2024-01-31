"use client";

import React, { useState } from "react";
import Image from "next/image";
import {people} from "@/app/lib/data";


const Slider = () => {
  const [state, setState] = useState(0);
  const { id, name, image, quote } = people[state];

  const Next = () => {
    setState((state + 1) % people.length);
  };
  const Prev = () => {
    const newState = state - 1;
    if (newState < 0) {
      setState(people.length - 1);
    } else {
      setState(state - 1);
    }
  };

  return (
    <>
      <section className="section w-[90vw] sm:w-[70vw] mb-20 mt-10">
        <div className="">

          <div className="flex justify-center w-full">
            <div>
              
              <p className="my-10  text-3xl capalize font-medium 
              text-center">People I Like</p>
              <div className="w-full h-[12rem]">
              
              <div className="w-full flex justify-center ">
                  <Image
                    src={image}
                    width={100}
                    height={100}
                    alt={name}
                    className="rounded-full mb-2"
                  />
                </div>
              
                 <div className=" md:w-full md:h-5rem  md:flex md:justify-center ">
                   <p className="text-[20px] text-center text-white/90 md:w-[30rem]">
                    {quote}
                    </p>
                  
                 </div>
                  <h4 className="text-[20px] text-end w-[60vw]">{"--" + name}</h4>
              
              </div>
            </div>
          </div>

          <div className="w-full flex justify-between mt-[5rem] sm:mt-0">
            <div>
              <button className="prev " onClick={Prev}>
                <Image
                  src="/images/icons/left_arrow.png"
                  alt=""
                  width={50}
                  height={50}
                  className=""
                />
              </button>
            </div>

            <div >
              <button className="next " onClick={Next}>
                <Image
                  src="/images/icons/right_arrow.png"
                  alt=""
                  width={50}
                  height={50}
                  className=""
                />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slider;
