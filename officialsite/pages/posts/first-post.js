import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"

const FirstPost = () => {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyonload"
        onLoad={() => console.log("Hello")}
      />
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
        <Image
          src="/images/profile.jpg"
          height={144}
          width={144}
          alt="Your name"
        />
      </h2>
    </>
  )
}

export default FirstPost
