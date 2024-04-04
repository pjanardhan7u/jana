import PostComponent from "@/app/components/PostComponent";
import { Post } from "@/app/utils/interface";
import { client } from "@/sanity/lib/client";
import React from "react";
import BlogHeader from "@/app/components/blogHeader";
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

export const revalidate = 10;

interface Params {
  params: {
    slug: string;
  };
}

const page = async ({ params }: Params) => {
  const posts: Array<Post> = await getPostsByTag(params.slug);
  // sort posts by date
  posts.sort((a, b) => {
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });

  return (
    <div>
      <BlogHeader title="" />

      <div className="w-[100vw] mt-5 flex justify-center">
        <div className="w-[80vw]">
          {posts.length === 0 && (
            <div className="text-center text-2xl font-bold">
              No posts found for #{params?.slug}
            </div>
          )}
          {posts?.length > 0 &&
            posts?.map((post) => <PostComponent key={post?._id} post={post} />)}
        </div>
      </div>
    </div>
  );
};

export default page;
