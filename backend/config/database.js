const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI;

    if (!uri || typeof uri !== 'string' || uri.trim() === '') {
      console.error('\n\x1b[31mError: MONGODB_URI is not set.\x1b[0m');
      console.error('Please create a `.env` file in the backend folder or set the MONGODB_URI environment variable.');
      console.error('You can copy `.env.example` to `.env` and update the value.');
      // Exit with non-zero so the process doesn't proceed with an undefined URI
      process.exit(1);
    }

    const conn = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
