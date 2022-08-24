import Link from 'next/link'

export default function Header() {
  return (
    <h2 className="tracking-tight md:tracking-tight leading-tight mb-20 mt-8">
      <Link href="/">
        <a className="hover:underline">Blog</a>
      </Link>
      .
    </h2>
  )
}
