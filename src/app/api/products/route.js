import { NextResponse } from "next/server";

import mongoose from "mongoose";
import connectDB from "../../../lib/mongodb";

const ProductSchema = new mongoose.Schema({}, { strict: false });
const Product =
  mongoose.models.products || mongoose.model("products", ProductSchema);

export async function GET() {
  try {
    await connectDB();

    const products = await Product.find({});

    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json({ error: "Data fetch failed" }, { status: 500 });
  }
}
