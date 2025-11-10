'use server'

export async function createComment(prevData:any,formData: FormData){
   const comment = formData.get("comment") as string;

   if(!comment){
    return { error: "comment is required"}
   }
}

export async function createLike(){
    await new Promise(resolve => setTimeout(() => resolve(true), 3000))
console.log("like")
}