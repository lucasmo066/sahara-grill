// lib/mongodb.ts

import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || 'mongodb+srv://lucasmo066:5BQ1JWcvKRDuf7N8@emails.kgik85p.mongodb.net/SaharaGrill?retryWrites=true&w=majority&appName=Emails';

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local');
}

declare global {
  var _mongoClientPromise: Promise<MongoClient>;
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default clientPromise;