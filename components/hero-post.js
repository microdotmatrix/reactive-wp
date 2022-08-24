import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from '../components/cover-image'
import Link from 'next/link'
import Intro from '../components/intro'

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <section>
      <div className="relative z-0">
        <Intro />
        {coverImage && (
          <CoverImage title={title} coverImage={coverImage} slug={slug} />
          )}
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28 relative z-10">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link href={`/posts/${slug}`}>
              <a
                className="hover:underline"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <Date dateString={date} />
          </div>
        </div>
        <div>
          <div
            className="text-lg leading-relaxed mb-4"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
          <Avatar author={author} />
        </div>
      </div>
    </section>
  )
}
