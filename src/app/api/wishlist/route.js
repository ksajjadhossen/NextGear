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
export async function DELETE(request) {
  try {
    await connectDB();
    const { userEmail, productId } = await request.json();

    // ডাটা আছে কি না চেক করা
    if (!userEmail || !productId) {
      return NextResponse.json(
        { error: "userEmail and productId are required" },
        { status: 400 },
      );
    }

    // mongoose মডেল ব্যবহার করে ডিলিট করা
    const result = await wishlistModel.deleteOne({
      userEmail: userEmail,
      productId: String(productId), // আইডিটি স্ট্রিং হিসেবে নিশ্চিত করা
    });

    if (result.deletedCount === 1) {
      return NextResponse.json(
        { message: "Item removed from wishlist" },
        { status: 200 },
      );
    } else {
      return NextResponse.json(
        { error: "Item not found in wishlist" },
        { status: 404 },
      );
    }
  } catch (error) {
    console.error("Wishlist DELETE Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 },
    );
  }
}
