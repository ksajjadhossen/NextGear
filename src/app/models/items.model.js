import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    shortDescription: { type: String, required: true },
    fullDescription: { type: String, required: true },
    price: { type: Number, required: true },
    imageUrl: { type: String },
    category: { type: String },
  },
  { timestamps: true },
);

export default mongoose.models.Item || mongoose.model("Item", ItemSchema);
