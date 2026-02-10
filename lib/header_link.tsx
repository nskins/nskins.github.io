import Link from 'next/link'

export default function HeaderLink({ href, children }
  :
  { href: string,
    children: React.ReactNode
  }) {
  return (
    <Link href={href} className="text-xl font-bold text-white">
      {children}
    </Link>
  )
}