import { query } from "./_generated/server";

export default query(async ({ db, storage }) => {
  const messages = await db.query("messages").collect();
  for (const message of messages) {
    if (message.format == "image") {
      message.url = await storage.getUrl(message.body);
    }
  }
  return messages;
});
