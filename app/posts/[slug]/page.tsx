import {Post} from "@/app/types/Post"
import CommentForm  from "@/app/posts/[slug]/comment-form"
import { LikeButton } from "./like-button"
async function getPost(slug:string): Promise<Post> {

    const res = await fetch('http://localhost:3003/posts/?slug=' + slug)

    const [post] = await res.json()

    return post
}

export default async function PostPage({ params }: {
    params: Promise<{ slug: string}>;
}) {

    const { slug } = await params
    const post = await getPost(slug)
    console.log(post)

    return (
        <>
        <article>
          <h1>{post.title}</h1>
          <h1>{post.content}</h1>
          <hr className="my-2"/>
          <LikeButton/>
        </article>
        <section className="mt-3 ml-2 " >
            <h2 className="text-lg">Comments</h2>
          <CommentForm/>
        </section>
        </>
    )
}