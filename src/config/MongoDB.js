const mongoose = require('mongoose');

const ConnectDB = async (MONGODB_URI) => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('¡MongoDB Atlas Connected!');
  } catch (error) {
    console.log(error);
    throw new Error('Error al conectar con MongoDB');
  }
};

module.exports = ConnectDB;