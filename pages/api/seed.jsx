import Estimate from '../../models/estimate-model';
import Order from '../../models/order-model';
import Review from '../../models/review-model';
import Ring from '../../models/ring-model';
import data from '../../utils/data';
import db from '../../utils/db';

// определяем функцию обработчика
const handler = async (req, res) => {
  await db.connect();

  // импортируем товары из модели products
  // удаляем все предыдущие товары в пользовательской коллекции
  await Ring.deleteMany();
  // добавить товары
  await Ring.insertMany(data.rings);
  // удаляем все предыдущие отзывы в пользовательской коллекции
  await Review.deleteMany();
  // добавить отзывы
  await Review.insertMany(data.reviews);
  // удаляем все предыдущие заказы в пользовательской коллекции
  await Order.deleteMany();
  // добавить заказы
  await Order.insertMany(data.orders);
  // удаляем все предыдущие рассчеты заказов в пользовательской коллекции
  await Estimate.deleteMany();
  // добавить рассчеты заказов
  await Estimate.insertMany(data.estimate);

  // разъеденить после загрузки данных пользоателей
  await db.disconnect();
  // отправляем сообщение о успешной загрузке данных
  res.send({ message: 'seeded successfully' });
};
export default handler;
