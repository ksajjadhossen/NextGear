import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Product from "@/app/models/product.model";

export async function GET() {
  try {
    await connectDB();
    const items = await Product.find({}).sort({ createdAt: -1 }); // নতুনগুলো আগে দেখাবে
    return NextResponse.json(items);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch items" },
      { status: 500 },
    );
  }
}

export async function POST(request) {
  console.log("Here is Request", request);
  try {
    await connectDB();

    const body = await request.json();

    const newItem = await Product.create(body);
    console.log("Here is the new item ", newItem);

    return NextResponse.json(newItem, { status: 201 });
  } catch (error) {
    console.error("POST Error:", error);
    return NextResponse.json(
      { error: "Failed to create item", details: error.message },
      { status: 500 },
    );
  }
}
