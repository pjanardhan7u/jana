"use client";

import React, { useState } from "react";
import Image from "next/image";

const people = [
  {
    id: 1,
    image: "/images/people/jana.jpg",
    name: "Jana",
    title:"Explorer",
    quote:
      "In the heart of your being, acaptive lion lies,Confined within a self-woven cage of your own ties. Day by day, you feed it leaves and grass. It is very tired of eating them. The other animals are laughing at the lion. It is dreaming of hunting. Break the shackles once and see its prey beneath the moon and stars.",
  },
  {
    id: 2,
    image: "/images/people/sreenu2.png",
    name: "Sreenu",
    title:"Physics Lecturer",
    quote:
      "A frog in the well thinks that he is the king of the world and knows nothing about the sea.",
  },
  {
    id: 3,
    image: "/images/people/maadhavi.png",
    name: "Maadhavi",
    title:"Maths Lecturer",
    quote:"The future belongs to those who believe in the beauty of their dreams.",
  },
  {
    id: 4,
    image: "/images/people/rgv.jpg",
    name: "RGV",
    title:"Philosopher",
    quote:"The sooner you let go of what you heard from your parents, what you learned in school, what you learned from society, the sooner you become intelligent.",
  },
  {
    id: 5,
    image: "/images/people/nietzche.jpg",
    name: "Friedrich Nietzsche",
    title:"Philosopher",
    quote: "Faith is not wanting to know what is true.",
  },
  {
    id: 6,
    image: "/images/people/ayand-rand.jpg",
    name: "Ayn Rand",
    title:"Philosopher",
    quote: "We live the life of others when we read their thoughts.",
  },

];

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
      <section className="section w-[70vw] mb-20 mt-10">
        <div className=" ">
          <div>
            
            <p className="my-10  text-3xl capalize font-medium 
            text-center">People I Like</p>
            <div className="w-[70vw] h-[12rem]">
            
            <div className="w-[70vw] flex justify-center ">
                <Image
                  src={image}
                  width={100}
                  height={100}
                  alt={name}
                  className="rounded-full mb-2"
                />
              </div>
            
               <div className=" md:w-full md:h-5rem  md:flex md:justify-center ">
                 <p className="text-center text-white/90 md:w-[30rem]">{quote}</p>
                
               </div>
                <h4 className="text-end w-[60vw]">{"--" + name}</h4>
            
            </div>
          </div>

          <div className="w-[70vw] flex justify-between mt-[5rem] sm:mt-0">
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
