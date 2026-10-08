import { MongoClient } from "mongodb";

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

/** Connect only when a signup arrives, never while Next.js builds the site. */
export function getMongoClient(): Promise<MongoClient> {
  if (!global._mongoClientPromise) {
    const uri = process.env.MONGODB_URI;
    if (!uri) throw new Error("Newsletter storage is not configured.");

    const client = new MongoClient(uri, {
      serverSelectionTimeoutMS: 5000,
      connectTimeoutMS: 5000,
      socketTimeoutMS: 10000,
    });
    global._mongoClientPromise = client.connect().catch(async (error) => {
      global._mongoClientPromise = undefined;
      await client.close().catch(() => {});
      throw error;
    });
  }
  return global._mongoClientPromise;
}
