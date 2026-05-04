import mongoose from "mongoose";

const WishlistSchema = new mongoose.Schema({
  userEmail: { type: String, required: true },
  productId: { type: String, required: true },
  productName: { type: String, required: true },
  category: { type: String },
  price: { type: Number, required: true },
  image: { type: String },
  addedAt: { type: Date, default: Date.now },
});

export default mongoose.models.Wishlist ||
  mongoose.model("Wishlist", WishlistSchema);
