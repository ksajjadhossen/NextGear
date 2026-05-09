import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Product from "@/app/models/product.model";

export async function GET() {
  try {
    await connectDB();
    const items = await Product.find({}).sort({ createdAt: -1 });
    return NextResponse.json(items);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch items" },
      { status: 500 },
    );
  }
}

export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();

    if (!body.sellerEmail) {
      return NextResponse.json(
        { error: "Validation Failed", details: "sellerEmail is required" },
        { status: 400 },
      );
    }

    const newItem = await Product.create({
      ...body,

      price: Number(body.price),
      stock: Number(body.stock),
    });

    return NextResponse.json(newItem, { status: 201 });
  } catch (error) {
    console.error("POST Error:", error);

    if (error.code === 11000) {
      return NextResponse.json(
        { error: "Duplicate Entry", details: "This item ID already exists." },
        { status: 409 },
      );
    }

    return NextResponse.json(
      { error: "Failed to create item", details: error.message },
      { status: 500 },
    );
  }
}
