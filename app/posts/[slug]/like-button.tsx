'use client'
import { createLike } from "@/app/actions";
import { useTransition} from "react";
export function LikeButton(){
    const [pending,setTransition] = useTransition()

    async function handleLike(){
        setTransition(async () => {
            await createLike()
        })
    }

    return(
         <button className="bg-white text-black p-2 rounded"
         onClick={handleLike}
         >
         {pending ? "liking..." : "like"}
         </button>
    )
}