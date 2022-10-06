import { MongoClient } from "mongodb"

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://system:1111@cluster0.hfg277q.mongodb.net/users?retryWrites=true&w=majority"
  )

  return client
}
