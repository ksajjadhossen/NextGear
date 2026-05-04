import { NextResponse } from "next/server";
import mongoose from "mongoose";
import connectDB from "@/lib/mongodb";
import wishlistModel from "@/app/models/wishlist.model";

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

    const db = mongoose.connection.db;

    const wishlistItems = await db
      .collection("wishlists")
      .find({ userEmail: email })
      .toArray();

    return NextResponse.json(wishlistItems);
  } catch (error) {
    console.error("Wishlist GET API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 },
    );
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();

    console.log("Incoming Wishlist Data:", body);

    const existing = await wishlistModel.findOne({
      userEmail: body.userEmail,
      productId: body.productId,
    });

    if (existing) {
      return NextResponse.json(
        { message: "Item already in wishlist" },
        { status: 400 },
      );
    }

    const newItem = await wishlistModel.create(body);
    return NextResponse.json(newItem, { status: 201 });
  } catch (error) {
    console.error("Wishlist POST Error Detail:", error.message);
    return NextResponse.json(
      { message: "Server Error", error: error.message },
      { status: 500 },
    );
  }
}
