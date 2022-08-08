import Head from 'next/head'
import Container from '../components/container'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import { CMS_NAME } from '../lib/constants'
import { storefront } from '../utils'

export default function Shop({ products }) {
  return (
    <Layout>
      <Head>
        <title>{CMS_NAME}</title>
      </Head>
      <Container>
        <div className="product-container">
          {products.edges.map((item) => {
            const product = item.node
            const image = product.images.edges[0].node
            return (
              <Link key={product.handle} href={`products/${product.handle}`}>
                <a className="group">
                  <div className="w-full rounded-lg overflow-hidden">
                    <Image src={image.transformSrc} alt={image.altText} className="w-full h-full object-cover object-center group-hover:opacity-75" />
                  </div>
                  <div className="items-center justify-between flex">
                    <h3>{product.title}</h3>
                    <p>${product.priceRange.minVariantPrice.amount}0</p>
                  </div>
                  <p className="text-sm text-slate-500">{product.description}</p>
                </a>
              </Link>
            )}
          )}
        </div>
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const { data } = await storefront(productsQuery)
  return {
    props: {
      products: data.products,
    }
  }
}

const gql = String.raw
const productsQuery = gql`
  query getProducts {
    products(first: 6) {
      edges {
        node {
          title
          id
          handle
          tags
          description
          priceRange {
            minVariantPrice {
              amount
            }
          }
          images(first: 3) {
            edges {
              node {
                transformedSrc
                altText
              }
            }
          }
        }
      }
    }
  }
`