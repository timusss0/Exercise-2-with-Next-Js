import {Setting } from "@/app/types/Settings"

export async function getSetting(): Promise<Setting>{
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve(true)
        }, 3000)
    })
    const res = await fetch("http://localhost:3003/settings")
    const setting = await res.json()

    return setting;
}
