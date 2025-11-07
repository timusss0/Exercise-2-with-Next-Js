export default async function productPage({ params } : {
    params: Promise<{id : string}>
}){
    const { id } = await params
    console.log(id)

    return (
        <div>
            <h1>this is detail product</h1>
        </div>
    )
}