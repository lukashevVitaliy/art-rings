import Estimate from '../../../models/estimate-model';
import db from '../../../utils/db';

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    return;
  }
  const { name, email, phone, comment } = req.body;

  await db.connect();
  const newEstimate = new Estimate({
    name,
    email,
    phone,
    comment,
  });
  const estimate = await newEstimate.save();

  await db.disconnect();
  res.status(201).send({
    _id: estimate._id,
    name: estimate.name,
    email: estimate.email,
    phone: estimate.phone,
    comment: estimate.comment,
  });
};
export default handler;
