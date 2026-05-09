import Product from "@/app/models/product.model";
import connectDB from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    await connectDB();
    const { id } = await params;
    const item = await Product.findById(id);

    if (!item) {
      return NextResponse.json({ error: "Item not found" }, { status: 404 });
    }
    return NextResponse.json(item);
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json(
      { error: "Invalid ID format or Server Error" },
      { status: 500 },
    );
  }
}

export async function PATCH(request, { params }) {
  try {
    await connectDB();
    const { id } = params;
    const body = await request.json();
    const updatedItem = await Product.findByIdAndUpdate(id, body, {
      new: true,
    });
    return NextResponse.json(updatedItem);
  } catch (error) {
    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }
}
export async function DELETE(request, { params }) {
  try {
    await connectDB();
    const { id } = await params;

    const deletedItem = await Product.findByIdAndDelete(id);

    if (deletedItem) {
      return NextResponse.json(
        { message: "Product deleted successfully" },
        { status: 200 },
      );
    } else {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 },
      );
    }
  } catch (error) {
    console.error("Delete Error:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 },
    );
  }
}
