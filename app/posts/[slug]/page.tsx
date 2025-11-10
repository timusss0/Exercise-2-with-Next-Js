import {Post} from "@/app/types/Post"
import { createComment } from "@/app/actions"

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
        </article>
        <section className="mt-3 ml-2 " >
            <h2 className="text-lg">Comments</h2>
            <form action={createComment} className="flex flex-col">
                <textarea placeholder="Commentar here..." className="w-sm h-40 border border-white" name="comment"/>
            <button className="mt-3 p-4 w-sm rounded-xl bg-blue-700">Submit comment</button>
            </form>
        </section>
        </>
    )
}