import Container from '../components/container'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import { client } from '../utils'

export default function Shop() {
  return (
    <>
      <Layout>
          <h1>Shop</h1>
      </Layout>
    </>
  )
}

