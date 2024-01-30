import React from "react";
import Image from "next/image";
import { imgGalaryData } from "@/app/lib/data";

export default function Gallary() {
  return (
    <div id="gallary" className="my-10 ">
      <h2 className="w-full mb-10 font-bold text-3xl text-center">My galary</h2>
      <div className="galary w-[20rem] h-[20rem] sm:w-[30rem] md:w-[47rem] md:h-[25rem]  mb-10 ">
        {imgGalaryData.map((img, index) => (
          <Image
            src={img.imgURL}
            alt={img.alt}
            width={500}
            height={500}
            className=" images glow-on-hover"
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
