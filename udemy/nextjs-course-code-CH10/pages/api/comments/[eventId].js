import {
  connectDatabase,
  getAllDocuments,
  insertDocument,
} from "../../../helpers/db-util";

async function handler(req, res) {
  const eventId = req.query.eventId;

  let client;

  try {
    const client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: "ERROR" });
    return;
  }

  if (req.method === "POST") {
    const { email, name, text } = req.body;

    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input" });
      client.close();
      return;
    }
    const newComment = {
      email,
      name,
      text,
      eventId,
    };

    let result;
    try {
      const result = insertDocument(client, "comments", newComment);
      newComment._id = result.insertedId;

      res.status(201).json({ message: "Added comment", comment: newComment });
    } catch (error) {
      res.status(500).json({ message: "ERROR" });
      return;
    }

    // const db = client.db();

    // const result = await db.collection("comments").insertOne(newComment);
  }

  if (req.method === "GET") {
    try {
      const documents = await getAllDocuments(client, "comments", { _id: -1 });
      res.status(200).json({ comments: decuments });
    } catch (error) {
      res.status(500).json({ message: "ERROR" });
      return;
    }
  }

  client.close();
}

export default handler;
