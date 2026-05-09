import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    // Your logic to save user to MongoDB...

    // Always return a JSON object, even if it's just a message
    return NextResponse.json(
      {
        success: true,
        role: "user", // or the actual role from your DB
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
