import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    sellerEmail: { type: String, required: true },
    status: { type: String },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    brand: { type: String, default: "Next Gear" },
    stock: { type: Number, default: 0 },
    rating: { type: Number, default: 4.5 },
    image: { type: String, required: true },
    description: { type: String },
    warranty: { type: String, default: "2 Years" },
    tags: { type: [String], default: [] },
    releasedDate: { type: String },
  },
  { timestamps: true },
);

const Product =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);

export default Product;
