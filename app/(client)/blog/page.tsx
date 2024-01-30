import { client } from "@/sanity/lib/client";
import { Post } from "@/app/utils/interface";
import PostComponent from "@/app/components/PostComponent";
// import BlogHeader from "@/app/components/Header";

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
    <div>
      {/* <BlogHeader title="Blog" tags /> */}
      <div>

        {posts?.length > 0 &&
          posts?.map((post) => <PostComponent key={post?._id} post={post} />)}
      </div>
    </div>
  );
}
