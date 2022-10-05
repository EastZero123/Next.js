import { MongoClient } from "mongodb"

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body

    const { title, image, address, description } = data

    const client = await MongoClient.connect(
      "mongodb+srv://system:1111@cluster0.hfg277q.mongodb.net/meetups?retryWrites=true&w=majority"
    )
    const db = client.db()

    const meetupsCollection = db.collection("meetups")

    const result = await meetupsCollection.insertOne(data)

    client.close()

    res.status(201).json({ message: "Meetup insert" })
  }
}

export default handler
