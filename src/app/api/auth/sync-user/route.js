import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import User from "@/app/models/user";

export async function POST(req) {
  await dbConnect();
  const { email, uid } = await req.json();
  console.log("Syncing user:", email, uid);

  let user = await User.findOne({ uid });

  if (!user) {
    user = await User.create({ email, uid, role: "user" });
  }

  return NextResponse.json(user);
}
