// app/api/emails/route.ts

import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function POST(req: NextRequest) {
  const { email } = await req.json();
  const client = await clientPromise;
  const db = client.db('SaharaGrill');

  try {
    const collection = db.collection('Emails');
    const result = await collection.insertOne({ email, createdAt: new Date() });
    return NextResponse.json({ message: 'Email saved successfully!', result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error saving email', error }, { status: 500 });
  }
}

export async function GET() {
  const client = await clientPromise;
  const db = client.db('SaharaGrill');

  try {
    const collection = db.collection('Emails');
    const emails = await collection.find({}).toArray();
    return NextResponse.json(emails, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error fetching emails', error }, { status: 500 });
  }
}
