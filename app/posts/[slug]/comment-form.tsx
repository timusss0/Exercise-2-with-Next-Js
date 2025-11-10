'use client'
import {createComment} from "@/app/actions"
import { useActionState } from "react"


const initialState = {
    error:"",
}
export default function CommentForm(){

    const [state,formAction,pending] = useActionState(createComment,initialState)
    return (
    
            <form action={formAction} className="flex flex-col">
                {state?.error && (
                    <div className="text-red-500" role="alert">
                        {state.error}
                    </div>
                )}
                <textarea placeholder="Commentar here..." className="w-sm h-40 border border-white" name="comment"/>
            <button className="mt-3 p-4 w-sm rounded-xl bg-blue-700" disabled={pending}>Submit comment</button>
            </form>
    )
}