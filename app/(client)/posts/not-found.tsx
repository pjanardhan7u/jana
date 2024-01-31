
import Link from "next/link";
import React from "react";
const NotFound = () => {
  return (
    <div>
            
      <div className=" h-[70vh] mt-[5rem]">
        <div className="text-4xl font-bold text-[5rem] text-center">
          404
          </div>
          <h2 className="mt-3 text-center">Looks like the pagee that you are looking for is not found </h2>
          <Link href="/blog" className=" w-full flex justify-center my-[5rem]">
        <button
          type="button"
          className=" glow-on-hover text-white bg-black hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 
                  font-medium rounded-lg text-sm px-3 py-2.5 text-center flex items-center justify-center
                  dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
        >
          Goto Home
        </button>
      </Link>
      </div>
    </div>
  );
};

export default NotFound;
