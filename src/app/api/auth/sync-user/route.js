import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import userModel from "@/app/models/user.model";

export async function POST(req) {
  await dbConnect();
  const { email, uid } = await req.json();
  console.log("Syncing user:", email, uid);

  let user = await userModel.findOne({ uid });

  if (!user) {
    user = await userModel.create({ email, uid, role: "user" });
  }

  return NextResponse.json(user);
}
