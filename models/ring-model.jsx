import mongoose from 'mongoose';

// create Schema models
const ringSchema = new mongoose.Schema(
  {
    articule: { type: String, required: true, unique: true },
    insertInRings: { type: Boolean, required: true },
    countInStock: { type: Number, required: true },
    category: { type: String, required: true },
    rating: { type: String, required: true },
    currency: { type: String, required: true },
    priceNew: { type: Number, required: true },
    priceOld: { type: Number, required: true },
    sampleOffice: { type: Boolean, required: true },
    noveltie: { type: Boolean, required: true },
    colorImage: [
      {
        image: { type: String, required: true },
      },
    ],
    features: [
      {
        weight: { type: String, required: true },
        material: { type: String, required: true },
        inserts: { type: String, required: true },
        composition: { type: String, required: true },
        view: { type: String, required: true },
      },
    ],
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Ring = mongoose.models.Ring || mongoose.model('Ring', ringSchema);
export default Ring;
