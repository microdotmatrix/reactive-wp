import { data } from 'autoprefixer'
import Head from 'next/head'
import Container from '../components/container'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import { CMS_NAME } from '../lib/constants'
import { client } from '../utils'

export default function Shop() {
  return (
    <>
      <Head>
        <title>{CMS_NAME} - Shop</title>
      </Head>
      <Layout>
          <h1>Shop</h1>
      </Layout>
    </>
  )
}
