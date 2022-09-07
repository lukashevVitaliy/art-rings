import mongoose from 'mongoose';

//сохранение предыдущего подключения к mongodb
const connection = {};
// подключение к mongodb
async function connect() {
  if (connection.isConnected) {
    console.log('already connected');
    return;
  }
  // очередь соединений
  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    // если = 1, то мы подключены
    if (connection.isConnected === 1) {
      console.log('use previos connection');
      return;
    }
    // если !== 1, нужно отключиться
    await mongoose.disconnect();
  }
  // используем подключение к БД
  const db = await mongoose.connect(process.env.MONGODB_URI);
  console.log('new connection');
  connection.isConnected = db.connections[0].readyState;
}
// отключение от mongodb
async function disconnect() {
  if (connection.isConnected) {
    if (process.env.NODE.ENV === 'production') {
      await mongoose.disconnect();
      connection.isConnected = false;
    } else {
      console.log('not disconnected');
    }
  }
}

// для получения данных с mondodb (конвертация в формат JSON)
// function convertDocToObj(doc) {
//   doc._id = doc._id.toString();

// colorImage = [...{
// 	...image,
// 	...doc.colorImage._id: doc.colorImage._id.toString()
// }];

// doc.features = [
//   Object({
//     weight: toString(),
//     material: toString(),
//     inserts: toString(),
//     composition: toString(),
//     view: toString(),
//     _id: toString(),
//   }),
// ];
// doc.reviews = [
//   Object({
//     name: toString(),
//     rating: toString(),
//     images: toString(),
//     message: toString(),
//     data: toString(),
//     _id: toString(),
//   }),
// ];

// doc.features = doc.features[Object];
// doc.reviews = doc.reviews[Object];

//   doc.createdAt = doc.createdAt.toString();
//   doc.updatedAt = doc.updatedAt.toString();
//   return doc;
// }

// определить объект БД
const db = { connect, disconnect };
export default db;
