import { NextResponse } from "next/server";
import mongoose from "mongoose";
import connectDB from "@/lib/mongodb";

export async function GET(request) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const email = searchParams.get("email");

    if (!email) {
      return NextResponse.json(
        { error: "Email parameter is missing" },
        { status: 400 },
      );
    }

    // আপনার ডাটাবেস অবজেক্টটি সরাসরি নেওয়া হচ্ছে
    const db = mongoose.connection.db;

    // স্ক্রিনশট অনুযায়ী কালেকশন নাম 'wishlist'
    // এবং ফিল্ডের নাম 'userEmail' হুবহু মিল থাকতে হবে
    const wishlistItems = await db
      .collection("wishlist")
      .find({ userEmail: email })
      .toArray();

    console.log(`Found ${wishlistItems.length} items for email: ${email}`);

    return NextResponse.json(wishlistItems);
  } catch (error) {
    console.error("Wishlist API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 },
    );
  }
}
