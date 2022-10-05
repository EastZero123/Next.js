import Head from "next/head"

import { MongoClient } from "mongodb"
import { Fragment } from "react"

import MeetupList from "../components/meetups/MeetupList"

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta name="description" content="React Meetups" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  )
}

// export async function getServerSideProps(context) {
//   const req = context.req
//   const res = context.res
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   }
// }

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://system:1111@cluster0.hfg277q.mongodb.net/meetups?retryWrites=true&w=majority"
  )
  const db = client.db()

  const meetupsCollection = db.collection("meetups")

  const meetups = await meetupsCollection.find().toArray()

  client.close()

  // fetch("/apu/meetups")
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 600,
  }
}

export default HomePage
