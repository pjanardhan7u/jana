// import BlogHeader from "@/app/components/Header";
import PostComponent from "@/app/components/PostComponent";
import { Post } from "@/app/utils/interface";
import { client } from "@/sanity/lib/client";
import React from "react";
import Link from "next/link";

async function getPostsByTag(tag: string) {
  const query = `
  *[_type == "post" && references(*[_type == "tag" && slug.current == "${tag}"]._id)]{
    title,
    slug,
    publishedAt,
    excerpt,
    tags[]-> {
      _id,
      slug,
      name
    }
  }
  `;

  const posts = await client.fetch(query);
  return posts;
}

export const revalidate = 60;

interface Params {
  params: {
    slug: string;
  };
}

const page = async ({ params }: Params) => {
  const posts: Array<Post> = await getPostsByTag(params.slug);
  // console.log(posts, "posts by tag");
  return (
    <div>
      {/* <BlogHeader title={`#${params?.slug}`} tags /> */}

      <div className="w-full text-center my-5">
      <Link href="/blog" className="mx-5">
        #blogs
        </Link>
        <Link href="/tag" className="mx-5">
        #tags
        </Link>
        

      </div>
      <div className="w-[100vw] flex justify-center">
      
      <div className="w-[80vw]">
        {posts.length === 0 && (
          <div className="text-center text-2xl font-bold">
            No posts found for #{params?.slug}
          </div>
        )}
        {posts?.length > 0 && posts?.map((post) => (
          <PostComponent key={post?._id} post={post} />
        ))}
      </div>
        
      </div>
     
    </div>
  );
};

export default page;
