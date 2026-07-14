import Link from 'next/link'

export default function PageLink({ href, children }
  :
  { href: string,
    children: React.ReactNode
  }) {
    return (
      <Link href={href} className="text-blue-800 underline">
        {children}
      </Link>
  )
}