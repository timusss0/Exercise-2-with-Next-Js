import Link from "next/link";
import {Post} from "../types/Post"


async function getPost(): Promise <Post[]>{
    const res = await fetch("http://localhost:3003/posts")
    const posts = (await res.json()) as Post[];

    return posts;
}
export default async function PostsPage(){
 const posts = await getPost()
    return (
        <div>
            <h1>Post Page</h1>

            {posts.map((post) => (
            <article key = {post.id}>
                <h2>
                    <Link href={`/posts/${post.slug}`}>
                    {post.title}
                    </Link>
                </h2>
            </article>
            ))}
        </div>
    )
}