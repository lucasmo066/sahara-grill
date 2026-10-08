import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getMongoClient } from "@/lib/mongodb";

const signupSchema = z.object({ email: z.string().trim().email().max(254) });

export async function POST(req: NextRequest) {
  try {
    const signup = signupSchema.safeParse(await req.json());
    if (!signup.success) {
      return NextResponse.json({ message: "Enter a valid email address." }, { status: 400 });
    }

    const client = await getMongoClient();
    await client.db("SaharaGrill").collection("Emails").insertOne({
      email: signup.data.email.toLowerCase(),
      createdAt: new Date(),
    });
    return NextResponse.json({ message: "Email saved successfully!" });
  } catch (error) {
    if (error instanceof SyntaxError) {
      return NextResponse.json({ message: "Invalid request." }, { status: 400 });
    }
    return NextResponse.json({ message: "Signups are temporarily unavailable. Please try again later." }, { status: 503 });
  }
}

// Subscriber addresses are private; no public GET/list endpoint is exposed.
