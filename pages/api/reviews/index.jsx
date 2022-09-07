import Review from '../../../models/review-model';
import db from '../../../utils/db';

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    return;
  }

  const { bind, name, message, rating } = req.body;

  await db.connect();
  const newReview = new Review({
    bind,
    name,
    message,
    rating,
    // images,
  });
  const review = await newReview.save();
  await db.disconnect();
  // res.status(201).send(review);
  res.status(201).send({
    _id: review._id,
    bind: review.bind,
    name: review.name,
    message: review.message,
    rating: review.rating,
    // images: [{ image: review.images }],
  });
};
export default handler;
