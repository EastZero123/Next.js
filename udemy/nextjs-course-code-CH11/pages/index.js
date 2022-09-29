import Head from "next/head"
import { Fragment } from "react"
import FeaturedPosts from "../components/home-page/featured-posts"
import Hero from "../components/home-page/hero"

const DUMMY_POSTS = []

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>EZ bolg</title>
        <meta name="description" content="content" />
      </Head>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  )
}

export default HomePage
