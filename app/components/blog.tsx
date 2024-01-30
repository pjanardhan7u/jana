import React from "react";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  return (
    <div>
      <div className="text-[3rem] font-bold">Read my blog</div>
      <div>
        <div>
          <Link href="/blog">
            <button>Read more</button>
          </Link>
        </div>
        <div>
          <Link href="/blog">
            <Image
              src="/images/about.png"
              width={400}
              height={400}
              alt="Picture of the author"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
