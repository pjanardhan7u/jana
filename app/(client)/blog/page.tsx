import { client } from "@/sanity/lib/client";
import { Post } from "@/app/utils/interface";
import PostComponent from "@/app/components/PostComponent";
import BlogHeader from "@/app/components/blogHeader";

async function getPosts() {
  const query = `
  *[_type == "post"] {
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
  const data = await client.fetch(query);
  return data;
}

export const revalidate = 60;

export default async function Home() {
  const posts: Post[] = await getPosts();
  // sort posts by date
  posts.sort((a, b) => {
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });

  return (
    <div className="">
      <BlogHeader title="My blog" />

      <div className="w-[100vw] mt-5 flex justify-center">
        <div className="w-full mx-3 sm:mx-0 sm:w-[80vw] ">

          {posts?.length > 0 &&
            posts?.map((post) => <PostComponent key={post?._id} post={post} />)}
        </div>
      </div>
    </div>
  );
}
