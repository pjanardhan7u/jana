// import BlogHeader from "@/app/components/Header";
import Navbar from "@/app/components/Navbar";
import { Tag } from "@/app/utils/interface";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import React from "react";

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
      {/* <BlogHeader title="Tags" /> */}
      <div className="w-full text-center my-5">
      <Link href="/blog" className="mx-5">
        #blogs
        </Link>
        <Link href="/tag" className="mx-5">
        #tags
        </Link>
        

      </div>
      <div className="w-[100vw] h-[62vh] flex justify-center">
      
      <div className="w-[80vw]">
        {tags?.length > 0 &&
          tags?.map((tag) => (
            <Link key={tag?._id} href={`/tag/${tag.slug.current}`}>
              <div className="mb-2 p-2 text-sm lowercase dark:bg-gray-950 border dark:border-gray-900 hover:text-purple-500">
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
