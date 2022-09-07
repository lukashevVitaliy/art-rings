import mongoose from 'mongoose';

// create Schema models
const orderSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    city: { type: String, required: true },
    location: { type: String, required: true },
    isPrivatePolicy: { type: String },
    totalOrder: { type: Number, required: true },
    cartItems: [
      {
        category: { type: String },
        articule: { type: String },
        countInStock: { type: Number },
        quantity: { type: Number },
        sizeRingWoman: { type: String },
        sizeRingMan: { type: String },
        priceNew: { type: Number },
        currency: { type: String },
        priceOld: { type: Number },
        noveltie: { type: String },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);
export default Order;
