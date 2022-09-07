import Ring from '../../../models/ring-model';
import db from '../../../utils/db';

const handler = async (req, res) => {
  await db.connect();
  const ring = await Ring.findById(req.query.id);
  await db.disconnect();
  res.send(ring);
};

export default handler;
