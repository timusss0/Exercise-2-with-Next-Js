'use client'
import { createLike } from "@/app/actions";
import { useState , useTransition} from "react";
export function LikeButton(){
    const [pending,setPanding] = useState(false)

    async function handleAction(){
        setPanding(true)
        await createLike();

        setPanding(false)
    }

    return(
         <button className="bg-white text-black p-2 rounded"
         onClick={handleAction}
         >
         {pending ? "liking..." : "like"}
         </button>
    )
}