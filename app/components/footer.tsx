import React from "react";
import Image from "next/image";
import { SocialMediaData } from "@/app/lib/data";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" bg-black/30 h-[7rem] px-6  text-center text-gray-500 ">
      <div className="h-10 pt-2 social-media w-full flex justify-center">

        {SocialMediaData.map((socialMedia, index) => (
          
          <Link href={socialMedia.link} key={socialMedia.name} target="_blank">
          <Image
            key={socialMedia.name}
            src={socialMedia.imgURL}
            alt={socialMedia.name}
            
            width={34}
            height={34}
            className="m-2 cursor-pointer border-4  border-none
              rounded-full hover:w-9 "
            
          />
            </Link>
        ))}
      


      </div>
      <small className="my-5 block text-xs text-white/60">
        &copy; Copyright © 2014 Jana . All rights reserved.
      </small>
      {/* <a href="">go to Home</a> */}
    </footer>
  );
}
