import { client } from "@/sanity/lib/client";
import { Post } from "@/app/utils/interface";
import PostComponent from "@/app/components/PostComponent";
import Link from "next/link";


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
  // console.log(posts, "posts");

  return (
    <div className="">
      {/* <BlogHeader title="Blog" tags /> */}


      <div className="w-full text-center my-5">
      <Link href="/blog" className="mx-5">
        #blogs
        </Link>

        <Link href="/tag" className="mx-5">
        #tags
        </Link>
        

      </div>
      <div className="w-[100vw] flex justify-center">
        
        <div className="w-full mx-3 sm:mx-0 sm:w-[80vw] ">
          {posts?.length > 0 &&
            posts?.map((post) => <PostComponent key={post?._id} post={post} />)}
        </div>
      </div>
    </div>
  );
}
