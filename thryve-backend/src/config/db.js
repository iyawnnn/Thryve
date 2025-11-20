const mongoose = require('mongoose');

async function connectDB(mongoUri) {
  try {
    // Set up mongoose connection options
    const options = {
      serverSelectionTimeoutMS: 5000, // 5 seconds timeout
      heartbeatFrequencyMS: 2000, // Check connection every 2 seconds
      maxPoolSize: 10, // Maximum number of connections
      minPoolSize: 5,  // Minimum number of connections
    };

    await mongoose.connect(mongoUri, options); 
    console.log('✅ MongoDB connected successfully');
    
    // Handle connection events
    mongoose.connection.on('connected', () => {
      console.log('📡 Mongoose connected to MongoDB');
    });
    
    mongoose.connection.on('error', (err) => {
      console.error('❌ Mongoose connection error:', err);
    });
    
    mongoose.connection.on('disconnected', () => {
      console.log('📡 Mongoose disconnected from MongoDB');
    });
    
    // Handle process termination
    process.on('SIGINT', async () => {
      await mongoose.connection.close();
      console.log('📡 Mongoose connection closed due to app termination');
    });
    
  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
    console.error('Stack:', err.stack);
    process.exit(1);
  }
}

module.exports = connectDB;
