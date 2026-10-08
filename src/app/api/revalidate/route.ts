import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";
import { MENU_CACHE_TAG } from "@/sanity/lib/client";
import { z } from "zod";

const revalidateBody = z.object({
  _type: z.enum(["menuSection", "menuPage"]),
  _id: z.string().min(1),
});

/**
 * Sanity GROQ webhook target for on-demand menu revalidation.
 *
 * Configure in Sanity Manage → API → Webhooks:
 * - URL: https://YOUR_DOMAIN/api/revalidate
 * - Trigger on: Create, Update, Delete
 * - Filter: _type in ["menuSection", "menuPage"] && !(_id in path("drafts.**")) && !(_id in path("versions.**"))
 * - Projection: {_type, _id}
 * - Secret: same value as SANITY_REVALIDATE_SECRET (never NEXT_PUBLIC_)
 * - HTTP method: POST
 * - API version: 2021-03-25 or later
 *
 * Expected delay after Publish: usually a few seconds (webhook delivery +
 * Content Lake consistency wait). The 60s ISR fallback refreshes on a
 * subsequent page request; it is not an automatic browser refresh.
 */
export async function POST(req: NextRequest) {
  try {
    const secret = process.env.SANITY_REVALIDATE_SECRET;
    if (!secret) {
      return NextResponse.json(
        { message: "Missing SANITY_REVALIDATE_SECRET" },
        { status: 500 },
      );
    }

    const { isValidSignature, body } = await parseBody<unknown>(
      req,
      secret,
      false,
    );

    if (!isValidSignature) {
      return NextResponse.json({ message: "Invalid signature" }, { status: 401 });
    }

    const parsed = revalidateBody.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ message: "Bad Request" }, { status: 400 });
    }

    if (/^(drafts|versions)\./.test(parsed.data._id)) {
      return NextResponse.json({ revalidated: false, reason: "Unpublished content" });
    }

    // Only accepted published events need Sanity's consistency delay.
    await new Promise((resolve) => setTimeout(resolve, 3000));
    revalidateTag(MENU_CACHE_TAG);

    return NextResponse.json({
      revalidated: true,
      tag: MENU_CACHE_TAG,
      type: parsed.data._type,
      now: Date.now(),
    });
  } catch (error) {
    if (error instanceof SyntaxError) {
      return NextResponse.json({ message: "Invalid JSON" }, { status: 400 });
    }
    console.error("Revalidation webhook failed.");
    return NextResponse.json({ message: "Revalidation failed" }, { status: 500 });
  }
}
