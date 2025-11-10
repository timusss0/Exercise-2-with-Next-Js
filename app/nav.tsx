'use client'
import Link from "next/link"

export function Nav(){
    return (
          <nav className="space-x-4">
            <Link href="/">Home</Link>
            <Link href="/about">Admin</Link>
            <Link href="/about/team">Team</Link>
            <Link href="/posts">Post</Link>

          </nav>
)
}