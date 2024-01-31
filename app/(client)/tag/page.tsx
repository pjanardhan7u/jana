// import BlogHeader from "@/app/components/Header";
import Navbar from "@/app/components/Navbar";
import { Tag } from "@/app/utils/interface";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import React from "react";
import BlogHeader from "@/app/components/blogHeader";

async function getAllTags() {
  const query = `
  *[_type == "tag"] {
    name,
    slug,
    _id,
    "postCount": count(*[_type == "post" && references("tags", ^._id)])
  }
  `;
  const tags = client.fetch(query);
  return tags;
}

export const revalidate = 60;

const page = async () => {
  const tags: Tag[] = await getAllTags();
  // console.log(tags, "tags");
  return (
    <div>
      <BlogHeader title="Tags" />

      <div className="w-[100vw] mt-5  flex justify-center">
      
      <div className="w-[80vw]">
        {tags?.length > 0 &&
          tags?.map((tag) => (
            <Link key={tag?._id} href={`/tag/${tag.slug.current}`}>
              <div className="mb-2 p-2 text-sm lowercase 
              dark:bg-gray-950 border dark:border-gray-900 
              hover:bg-black hover:bg-opacity-40">
                #{tag.name} ({tag?.postCount})
              </div>
            </Link>
          ))}
      </div>
      </div>


      
    </div>
  );
};

export default page;
