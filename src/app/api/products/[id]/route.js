import Product from "@/app/models/product.model";
import connectDB from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
import { isValidObjectId } from "mongoose";
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

    // Next.js 15 এ params কে অবশ্যই await করতে হবে
    const resolvedParams = await params;
    const id = resolvedParams.id;

    if (!isValidObjectId(id)) {
      return NextResponse.json({ error: "INVALID_ASSET_ID" }, { status: 400 });
    }

    const body = await request.json();

    const updatedItem = await Product.findByIdAndUpdate(
      id,
      { $set: body },
      { new: true, runValidators: true },
    );

    if (!updatedItem) {
      return NextResponse.json({ error: "ASSET_NOT_FOUND" }, { status: 404 });
    }

    return NextResponse.json(updatedItem);
  } catch (error) {
    console.error("PATCH_ERROR:", error);
    return NextResponse.json(
      { error: "SYSTEM_RECALIBRATION_FAILED" },
      { status: 500 },
    );
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
