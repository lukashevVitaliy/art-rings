import Order from '../../../models/order-model';
import db from '../../../utils/db';

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    return;
  }
  const {
    name,
    phone,
    email,
    city,
    location,
    isPrivatePolicy,
    totalOrder,
    cartItems,
  } = req.body;

  await db.connect();
  const newOrder = new Order({
    name,
    phone,
    email,
    city,
    location,
    isPrivatePolicy,
    totalOrder,
    cartItems,
  });
  const order = await newOrder.save();

  await db.disconnect();
  res.status(201).send({
    _id: order._id,
    name: order.name,
    phone: order.phone,
    email: order.email,
    city: order.city,
    location: order.location,
    isPrivatePolicy: order.isPrivatePolicy,
    totalOrder: order.totalOrder,
    cartItems: [
      {
        category: order.cartItems.category,
        articule: order.cartItems.articule,
        countInStock: order.cartItems.countInStock,
        quantity: order.cartItems.quantity,
        sizeRingWoman: order.cartItems.sizeRingWoman,
        sizeRingMan: order.cartItems.sizeRingMan,
        priceNew: order.cartItems.priceNew,
        currency: order.cartItems.currency,
        priceOld: order.cartItems.priceOld,
        noveltie: order.cartItems.noveltie,
      },
    ],
  });
};
export default handler;
