import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

export default function CoverImage({ title, coverImage, slug }) {
  const image = (
    <Image
      width={2000}
      height={1200}
      layout="responsive"
      alt={`Cover Image for ${title}`}
      src={coverImage?.node.sourceUrl}
      className={cn('shadow-small object-cover w-full h-full', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
    />
  )
  return (
    <div className="sm:mx-0 z-0 w-full h-[680px] overflow-clip shadow-xl shadow-slate-900/50">
      {slug ? (
        <Link href={`/posts/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
