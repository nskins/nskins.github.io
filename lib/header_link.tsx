"use client";

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function HeaderLink({ href, children }
  :
  { href: string,
    children: React.ReactNode
  }) {
    const pathname = usePathname()
    const isUserHere = pathname == href

    return (
      <Link href={href} className={`text-xl font-bold ${isUserHere ? "text-yellow-200" : "text-white"}`}>
        {children}
      </Link>
    )
}