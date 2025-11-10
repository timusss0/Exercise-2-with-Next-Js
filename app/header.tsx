import { getSetting } from "@/app/queries/getSettings"
import { Nav } from "@/app/nav"
export default async function Header() {
    const setting = await getSetting()

    return (
       <header className="border-b border-white py-2 mb-2">
        <div className="text-2xl">{setting.siteName}</div>
        <Nav/>
        </header>
    )
}