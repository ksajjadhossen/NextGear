import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import userModel from "@/app/models/user.model";

export async function POST(req) {
  try {
    await connectDB();
    const { email, uid } = await req.json();

    let user = await userModel.findOne({ uid });

    if (!user) {
      user = await userModel.create({ email, uid });
    }

    return NextResponse.json(
      {
        success: true,
        uid: user.uid,
        role: user.role,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error saving user:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
