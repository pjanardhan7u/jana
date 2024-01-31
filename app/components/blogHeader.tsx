import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  tags?: boolean;
}

const BlogHeader = ({ title = "", tags = false }: Props) => {
  return (
    <header className=" px-4 text-center border-b dark:border-purple-900
    flex justify-center ">
      <Link href="/blog" className="mx-5">
        <button
          type="button"
          className=" glow-on-hover text-white bg-black hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 
                  font-medium rounded-lg text-sm px-3 py-2.5 text-center flex items-center justify-center
                  dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
        >
          Blogs
        </button>
      </Link>

      <Link href="/tag" className="mx-5">
        <button
          type="button"
          className=" glow-on-hover text-white bg-black hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 
                  font-medium rounded-lg text-sm px-3 py-2.5 text-center flex items-center justify-center
                  dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
        >
          #Tags
        </button>
      </Link>

    
    </header>
  );
};

export default BlogHeader;
