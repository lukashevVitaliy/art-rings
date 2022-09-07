import mongoose from 'mongoose';

// create Schema models
const reviewSchema = new mongoose.Schema(
  {
    bind: { type: String, required: true },
    name: { type: String, required: true },
    rating: { type: String, required: true },
    message: { type: String, required: true },
    // images: [{ data: Buffer, contentType: String }],
  },
  {
    timestamps: true,
  }
);

const Review = mongoose.models.Review || mongoose.model('Review', reviewSchema);
export default Review;
