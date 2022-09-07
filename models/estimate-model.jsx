import mongoose from 'mongoose';

// create Schema models
const estimateSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    comment: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Estimate =
  mongoose.models.Estimate || mongoose.model('Estimate', estimateSchema);
export default Estimate;
