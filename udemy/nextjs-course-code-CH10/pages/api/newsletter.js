import { connectDatabase, insertDocument } from "../../helpers/db-util";

async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid email address." });
      return;
    }
    let client;
    try {
      const client = connectDatabase();
    } catch (error) {
      res.status(500).json({ message: "no signal" });
      return;
    }
    try {
      await insertDocument(client, "newsletter", { email: userEmail });
      client.close();
    } catch (error) {
      res.status(500).json({ message: "no signal" });
      return;
    }

    res.status(201).json({ message: "Signed up!" });
  }
}

export default handler;