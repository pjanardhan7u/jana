
import Link from "next/link";
import React from "react";
import BlogHeader from "@/app/components/blogHeader";
const NotFound = () => {
  return (
    <div>
            <BlogHeader title=""/>
      <div className="mt-5">
        <Link href="/">Return Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
